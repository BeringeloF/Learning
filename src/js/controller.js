import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2
// id 5ed6604591c37cdc054bca5d          5ed6604591c37cdc054bc96e

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    //1) Loading Recipe
    await model.loadRecipe(id);

    //2) Rendering Recipe]
    console.log(model.state.recipe);

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    //1 get search query
    const query = searchView.getQuery();
    if (!query) return;
    //load search results
    await model.loadSearchResults(query);
    //render search results
    console.log(model.state.search.results);
  } catch (err) {
    console.error(err);
  }
};

controlSearchResults();
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
