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
  _ingParent = document.querySelector('.upload__column');
  _btnAddIng = document.querySelector('.btn-add_ing');
  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHiddenWindow();
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    this._btnAddIng.addEventListener('click', this._addMoreIng.bind(this));
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

  removeMsgOrErr() {
    let popup = this._parentEl.querySelector('.message')
      ? this._parentEl.querySelector('.message')
      : this._parentEl.querySelector('.error');

    if (!popup) return;

    this._parentEl.innerHTML = '';
    !this._window.classList.contains('hidden') && this.toggleWindow();
    this._generateMarkup();
  }

  _generateMarkup() {
    const markup = `
   
    <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST11" required name="title" type="text" />
          <label>URL</label>
          <input value="TEST11" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TEST11" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TEST11" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <!-- Ingrediente 1 -->
<label>Ingredient 1</label>
<input
  type="text"
  name="ingredient-1"
  data-ing="1"
/>

<label class="hidden-form form-to-add" data-label="1">Quantity</label>
<input type="number" name="quantity-1" data-qt="1" class="hidden-form form-to-add" />

<label class="hidden-form form-to-add" data-label="1">Unit</label>
<input
  type="text"
  name="unit-1"
  data-unit="1"
  placeholder="ex: kg, ml, lb"
  class="hidden-form form-to-add"
/>

<!-- Ingrediente 2 -->
<label>Ingredient 2</label>
<input
  type="text"
  name="ingredient-2"
  data-ing="2"
/>

<label class="hidden-form form-to-add" data-label="2">Quantity</label>
<input type="number" name="quantity-2" data-qt="2" class="hidden-form form-to-add" />

<label class="hidden-form form-to-add" data-label="2">Unit</label>
<input
  type="text"
  name="unit-2"
  data-unit="2"
  placeholder="ex: kg, ml, lb"
  class="hidden-form form-to-add"
/>

<!-- Ingrediente 3 -->
<label>Ingredient 3</label>
<input
  type="text"
  name="ingredient-3"
  data-ing="3"
/>

<label class="hidden-form form-to-add" data-label="3">Quantity</label>
<input type="number" name="quantity-3" data-qt="3" class="hidden-form form-to-add" />

<label class="hidden-form form-to-add" data-label="3">Unit</label>
<input
  type="text"
  name="unit-3"
  data-unit="3"
  placeholder="ex: kg, ml, lb"
  class="hidden-form form-to-add"
/>

<!-- Ingrediente 4 -->
<label>Ingredient 4</label>
<input
  type="text"
  name="ingredient-4"
  data-ing="4"
/>

<label class="hidden-form form-to-add" data-label="4">Quantity</label>
<input type="number" name="quantity-4" data-qt="4" class="hidden-form form-to-add" />

<label class="hidden-form form-to-add" data-label="4">Unit</label>
<input
  type="text"
  name="unit-4"
  data-unit="4"
  placeholder="ex: kg, ml, lb"
  class="hidden-form form-to-add"
/>

<!-- Ingrediente 5 -->
<label>Ingredient 5</label>
<input
  type="text"
  name="ingredient-5"
  data-ing="5"
/>

<label class="hidden-form form-to-add" data-label="5">Quantity</label>
<input type="number" name="quantity-5" data-qt="5" class="hidden-form form-to-add" />

<label class="hidden-form form-to-add" data-label="5">Unit</label>
<input
  type="text"
  name="unit-5"
  data-unit="5"
  placeholder="ex: kg, ml, lb"
  class="hidden-form form-to-add"
/>

<!-- Ingrediente 6 -->
<label>Ingredient 6</label>
<input
  type="text"
  name="ingredient-6"
  data-ing="6"
/>

<label class="hidden-form form-to-add" data-label="6">Quantity</label>
<input type="number" name="quantity-6" data-qt="6" class="hidden-form form-to-add" />

<label class="hidden-form form-to-add" data-label="6">Unit</label>
<input
  type="text"
  name="unit-6"
  data-unit="6"
  placeholder="ex: kg, ml, lb"
  class="hidden-form form-to-add"
/>


          <button type="button" class="btn btn-add_ing">Add more ingredients</button>
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="src/img/icons.svg#icon-upload-cloud"></use>
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
      const parent = document.querySelector('.upload');
      const ingredientsEl = parent.querySelectorAll(`input[data-ing]`);
      console.log('fdiunfh');

      if ([...ingredientsEl].every(el => el.value === '')) {
        ingredientsEl[0].placeholder =
          'Please specify at least one ingredient for the recipe.';
        console.log('foi');

        return;
      }

      const dataArr = [...new FormData(e.target)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  addHandlerToAddHandler(e) {
    if (e.target.tagName !== 'INPUT') return;
    const input = e.target;
    input.addEventListener('blur', this.addHandlerCheckForm.bind(this));

    if (!input.name.startsWith('ingredient')) return;
    const allHiddenInputs = this._parentEl.querySelectorAll('.form-to-add');

    allHiddenInputs.forEach(el => el.classList.add('hidden-form'));
    const ingNum = input.dataset.ing;
    const labels = this._parentEl.querySelectorAll(`[data-label="${ingNum}"]`);
    const unit = this._parentEl.querySelector(`[data-unit="${ingNum}"]`);
    const quantity = this._parentEl.querySelector(`[data-qt="${ingNum}"]`);
    unit.classList.remove('hidden-form');
    quantity.classList.remove('hidden-form');
    labels.forEach(el => el.classList.remove('hidden-form'));
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
  }

  _addMoreIng() {
    const ingNum = [...this._parentEl.querySelectorAll(`[data-label]`)].slice(
      -1
    )[0].dataset.label;
    const lastEl = this._parentEl.querySelector(`[data-unit="${ingNum}"]`);
    const markup = `
    <label>Ingredient ${+ingNum + 1}</label>
<input
  type="text"

  name="ingredient"
  data-ing="${+ingNum + 1}"
/>

<label class="hidden-form form-to-add" data-label="${
      +ingNum + 1
    }">Quantity</label>
<input type="number" name="quantity" data-qt="${
      +ingNum + 1
    }" class="hidden-form form-to-add" />

<label class="hidden-form form-to-add" data-label="${+ingNum + 1}">Unit</label>
<input
  type="text"
  
  name="unit"
  data-unit="${+ingNum + 1}"
  placeholder="ex: kg, ml, lb"
  class="hidden-form form-to-add"
/>
         `;
    lastEl.insertAdjacentHTML('afterend', markup);
  }
}

export default new AddRecipeView();
