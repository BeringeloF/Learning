import {
  API_URL,
  RES_PER_PAGE,
  KEY,
  API_FOOD_IFO,
  SPOONACULAR_KEY,
  type,
} from './config';
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
  days: [],
  weaklyMeal: [],
};

const persistItem = function (item) {
  const items = {
    bookmark: state.bookmarks,
    shoplist: state.shoppingList,
    calendar: state.weaklyMeal,
  };
  localStorage.setItem(`${item}`, JSON.stringify(items[item]));
};

export const desmarkOnCalendar = function (id, del) {
  const index = state.weaklyMeal.findIndex(
    el => el.id === id && del === el.days[0]
  );
  state.weaklyMeal.splice(index, 1);
  persistItem('calendar');
};

export const markOnCalendar = function (recipe, daysClicked) {
  console.log(daysClicked);

  const temp = recipe.markedDays.map((day, i) => {
    if (daysClicked.some(m => m === i)) {
      return [day[0], true];
    } else return [day[0], false];
  });
  console.log(temp);

  state.recipe.markedDays = [...temp];
  if (!temp.some(day => day[1])) return;
  const pro = {
    title: recipe.title,
    id: recipe.id,
    days: [
      ...temp
        .filter(day => day[1])
        .map(day => day[0])
        .slice(-1),
    ],
    index: [...daysClicked],
  };

  if (
    state.weaklyMeal.some(meal => JSON.stringify(meal) === JSON.stringify(pro))
  )
    return;

  state.weaklyMeal.push(pro);

  persistItem('calendar');
};

(function getNextSevenDays() {
  const date = new Date();
  const arr = [];
  for (let i = 0; i < 7; i++) {
    const dia = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + i
    );
    arr.push([dia.getDate()]);
  }
  console.log(state.days);
  state.dates = [...arr];
  console.log(state);
})();

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

    state.recipe.markedDays = [...state.dates];

    if (state.weaklyMeal.some(meal => meal.id === id)) {
      console.log('foi salvo');
      const nada = state.weaklyMeal.filter(meal => meal.id === id).slice(-1);
      console.log(nada[0]);

      markOnCalendar(state.recipe, nada[0].index);
    } else markOnCalendar(state.recipe, []);
    console.log(state.weaklyMeal);

    console.log(state.recipe.markedDays);
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

const persistShopList = function () {
  localStorage.setItem(`shoplist`, JSON.stringify(state.shoppingList));
};

export const addBookmark = function (recipe) {
  //Add bookmark
  state.bookmarks.push(recipe);
  //Mark current recipe as bookmarked

  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistItem('bookmark');
};

export const addIngredientsToShopList = function (recipe) {
  // const listIng = {
  //   ingredients: recipe.ingredients,
  //   id: recipe.id,
  //   title: recipe.title,
  // };
  state.shoppingList.push(recipe);
  if (recipe.id === state.recipe.id) state.recipe.addedShopList = true;

  persistItem('shoplist');
};

export const deleteIngredientsShopList = function (id) {
  const index = state.shoppingList.findIndex(ingList => ingList.id === id);
  state.shoppingList.splice(index, 1);

  if (id === state.recipe.id) state.recipe.addedShopList = false;
  persistItem('shoplist');
};

export const deleteBookmark = function (id) {
  //delete bookmark
  const index = state.bookmarks.findIndex(bookmark => bookmark.id === id);
  state.bookmarks.splice(index, 1);
  //mark current recipe as not bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistItem('bookmark');
};

function init() {
  const storage = localStorage.getItem(`bookmark`);
  const storage2 = localStorage.getItem('shoplist');
  const storage3 = localStorage.getItem('calendar');
  if (storage) state.bookmarks = JSON.parse(storage);
  if (storage2) state.shoppingList = JSON.parse(storage2);
  if (storage3) state.weaklyMeal = JSON.parse(storage3);
  console.log(state.shoppingList);
}
init();

console.log(state.bookmarks);

const clearAllLocalStorage = function () {
  //localStorage.clear('bookmark');
  // localStorage.clear('shoplist');
  localStorage.clear('calendar');
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
    markOnCalendar(state.recipe, []);
  } catch (err) {
    throw err;
  }
};
