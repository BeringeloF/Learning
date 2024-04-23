import View from './View';
import icons from 'url:../../img/icons.svg';
class AddRecipeView extends View {
  _parentEl = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _message = 'Recipe was succesfully uploaded';
  _urlErrorMsg = `This field must be at least five caracteres long!`;
  _ingErrorMsg = `Wrong ingredient format!, please use the correct format!`;
  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHiddenWindow();
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
    if (!this._window.classList.contains('hidden')) {
      this._parentEl.addEventListener(
        'click',
        this.addHandlerToAddHandler.bind(this)
      );
    }
  }

  removeMsg() {
    const msg = this._parentEl.querySelector('.message');
    if (!msg) return;

    this._parentEl.removeChild(msg);
    this._generateMarkup();
  }

  _generateMarkup() {
    const markup = `
    <div class="upload__column">
    <h3 class="upload__heading">Recipe data</h3>
    <label>Title</label>
    <input value="TEST" required="" name="title" type="text">
    <label>URL</label>
    <input value="TEST" required="" name="sourceUrl" type="text">
    <label>Image URL</label>
    <input value="TEST" required="" name="image" type="text">
    <label>Publisher</label>
    <input value="TEST" required="" name="publisher" type="text">
    <label>Prep time</label>
    <input value="23" required="" name="cookingTime" type="number">
    <label>Servings</label>
    <input value="23" required="" name="servings" type="number">
  </div>

  <div class="upload__column">
    <h3 class="upload__heading">Ingredients</h3>
    <label>Ingredient 1</label>
    <input value="0.5,kg,Rice" type="text" required="" name="ingredient-1" placeholder="Format: 'Quantity,Unit,Description'">
    <label>Ingredient 2</label>
    <input value="1,,Avocado" type="text" name="ingredient-2" placeholder="Format: 'Quantity,Unit,Description'">
    <label>Ingredient 3</label>
    <input value=",,salt" type="text" name="ingredient-3" placeholder="Format: 'Quantity,Unit,Description'">
    <label>Ingredient 4</label>
    <input type="text" name="ingredient-4" placeholder="Format: 'Quantity,Unit,Description'">
    <label>Ingredient 5</label>
    <input type="text" name="ingredient-5" placeholder="Format: 'Quantity,Unit,Description'">
    <label>Ingredient 6</label>
    <input type="text" name="ingredient-6" placeholder="Format: 'Quantity,Unit,Description'">
  </div>

  <button class="btn upload__btn">
    <svg>
      <use href="/icons.21bad73c.svg#icon-upload-cloud"></use>
    </svg>
    <span>Upload</span>
  </button>
    `;
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHiddenWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  addHandlerToAddHandler(e) {
    if (e.target.tagName !== 'INPUT') return;
    e.target.addEventListener('blur', this.addHandlerCheckForm.bind(this));
  }
  addHandlerCheckForm(e) {
    console.log('foi chamado');
    const input = e.target;
    console.log(input);

    if (
      (input.name === 'sourceUrl' || input.name === 'image') &&
      input.value.length < 5
    ) {
      input.value = '';
      input.placeholder = this._urlErrorMsg;
    }

    if (input.name.startsWith('ingredient')) {
      if (!input.value.includes(',')) {
        input.value = '';
        input.placeholder = this._ingErrorMsg;
        return;
      }

      const ingArr = input.value.split(',').map(el => el.trim());

      if (ingArr.length !== 3) {
        input.value = '';
        input.placeholder = this._ingErrorMsg;
      }
    }
  }
}

export default new AddRecipeView();
