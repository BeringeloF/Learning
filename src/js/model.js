import { API_URL, RES_PER_PAGE, KEY } from './config';
import { AJAX } from './helpers';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: RES_PER_PAGE,
    page: 1,
  },
  bookmarks: [],
  shoppingList: [],
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    serving: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
    state.recipe = createRecipeObject(data);

    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;

    if (state.shoppingList.some(ingList => ingList.id === id))
      state.recipe.addedShopList = true;
    else state.recipe.addedShopList = false;
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && { key: rec.key }),
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.serving;
  });
  state.recipe.serving = newServings;
};

const persistBookmarks = function () {
  localStorage.setItem(`bookmark`, JSON.stringify(state.bookmarks));
};

const persistShopList = function () {
  localStorage.setItem(`shoplist`, JSON.stringify(state.shoppingList));
};

export const addBookmark = function (recipe) {
  //Add bookmark
  state.bookmarks.push(recipe);
  //Mark current recipe as bookmarked

  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmarks();
};

export const addIngredientsToShopList = function (recipe) {
  // const listIng = {
  //   ingredients: recipe.ingredients,
  //   id: recipe.id,
  //   title: recipe.title,
  // };
  state.shoppingList.push(recipe);
  if (recipe.id === state.recipe.id) state.recipe.addedShopList = true;

  persistShopList();
};

export const deleteIngredientsShopList = function (id) {
  const index = state.shoppingList.findIndex(ingList => ingList.id === id);
  state.shoppingList.splice(index, 1);

  if (id === state.recipe.id) state.recipe.addedShopList = false;
  persistShopList();
};

export const deleteBookmark = function (id) {
  //delete bookmark
  const index = state.bookmarks.findIndex(bookmark => bookmark.id === id);
  state.bookmarks.splice(index, 1);
  //mark current recipe as not bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem(`bookmark`);
  const storage2 = localStorage.getItem('shoplist');
  if (storage) state.bookmarks = JSON.parse(storage);
  if (storage2) state.shoppingList = JSON.parse(storage2);
  console.log(state.shoppingList);
};
init();

console.log(state.bookmarks);

const clearAllLocalStorage = function () {
  localStorage.clear('bookmark');
  localStorage.clear('shoplist');
};
//clearAllLocalStorage();

export const uploadRecipe = async function (newRecipe) {
  try {
    console.log(Object.entries(newRecipe));

    const ingredients = Object.entries(newRecipe)
      .slice(6)
      .map((ing, i, arr) => {
        if (ing[0].startsWith('ingredient') && ing[1] != '') {
          const description = ing[1].trim();
          const quantity = arr[i + 1][1];
          const unit = arr[i + 2][1];
          console.log(description, quantity, unit);

          return { quantity: quantity ? +quantity : null, unit, description };
        }
      })
      .filter(ing => ing !== undefined);

    if (ingredients.length === 0)
      throw new Error('Ingredient field shoud not be empty!');

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };
    console.log(recipe);
    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    console.log(data);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};
