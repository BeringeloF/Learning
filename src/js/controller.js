import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import addToShopView from './views/addToShopView.js';
import calendarView from './views/calendarView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
/*
if (module.hot) {
  module.hot.accept();
}*/

// https://forkify-api.herokuapp.com/v2
// id 5ed6604591c37cdc054bca5d          5ed6604591c37cdc054bc96e

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    //Update results view to mark selected search results
    resultsView.update(model.getSearchResultsPage());

    //1) Loading Recipe
    await model.loadRecipe(id);

    //2) Rendering Recipe]
    console.log(model.state.recipe);
    recipeView.render(model.state.recipe);
    //updating bookmarks

    bookmarksView.update(model.state.bookmarks);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    //1 get search query
    const query = searchView.getQuery();
    if (!query) return;
    //load search results
    await model.loadSearchResults(query);
    //render search results
    console.log(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    //render pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goToPage) {
  //render new results
  resultsView.render(model.getSearchResultsPage(goToPage));
  //render new pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //Update the recipe servings (in state)
  model.updateServings(newServings);

  //Update the recipe view
  //recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

controlAddBookmark = function () {
  //Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else if (model.state.recipe.bookmarked)
    model.deleteBookmark(model.state.recipe.id);
  //Update recipe view
  recipeView.update(model.state.recipe);

  //renderBookmarks
  bookmarksView.render(model.state.bookmarks);
};

const constrolBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlCalendar = function () {
  calendarView.render(model.state.weaklyMeal);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    //show  loading spinner
    addRecipeView.renderSpinner();

    //upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);
    //Render recipe
    recipeView.render(model.state.recipe);

    //render bookmark
    bookmarksView.render(model.state.bookmarks);

    //succes message
    addRecipeView.renderMessage();

    //changed id in url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    //close form window
    setTimeout(function () {
      addRecipeView.removeMsgOrErr();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('err', err);
    addRecipeView.renderError(err.message);

    setTimeout(function () {
      addRecipeView.removeMsgOrErr();
    }, MODAL_CLOSE_SEC * 1000);
  }
};

const controlAddIngToShopList = function () {
  //add ing list
  console.log(model.state.recipe.addedShopList);

  if (!model.state.recipe.addedShopList)
    model.addIngredientsToShopList(model.state.recipe);
  else if (model.state.recipe.addedShopList)
    model.deleteIngredientsShopList(model.state.recipe.id);

  recipeView.update(model.state.recipe);
};

const controlShoppingList = function () {
  //render shoppingList
  console.log(model.state.shoppingList);
  window.location.hash = '';

  addToShopView.render(model.state.shoppingList);
};

const controlDeleteIngList = function (id) {
  model.deleteIngredientsShopList(id);
  addToShopView.render(model.state.shoppingList);
};
const controlShowDaysRecipe = function () {
  recipeView.addHandlerRenderDays(model.state.recipe.markedDays);
};

const controlAssignRecipe = function (daysClicked, del) {
  if (!del) model.markOnCalendar(model.state.recipe, daysClicked);
  else model.desmarkOnCalendar(model.state.recipe.id, del);

  calendarView.render(model.state.weaklyMeal);
};

const init = function () {
  bookmarksView.addHandlerRender(constrolBookmarks);
  calendarView.addHandlerRender(controlCalendar);
  addToShopView.addHandlerShowShopList(controlShoppingList);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  recipeView.addHandlerAddIng(controlAddIngToShopList);
  addToShopView.addHandlerDeleteIngList(controlDeleteIngList);
  recipeView.addHandlerShowDaysRecipe(controlShowDaysRecipe);
  recipeView.addHandlerAssignRecipe(controlAssignRecipe);
};

init();
