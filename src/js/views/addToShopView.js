import View from './View';
import { Fraction } from 'fractional';
import icons from 'url:../../img/icons.svg';
import deleteIcon from 'url:../../img/delete.png';

class AddToShopView extends View {
  _parentEl = document.querySelector('.recipe');
  _btnAdd = document.querySelector('.btn-add__shopping');
  _errorMsg = 'No ingredients have been added to the shopping list yet.';

  addHandlerShowShopList(handler) {
    this._btnAdd.addEventListener('click', handler);
  }

  addHandlerDeleteIngList(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn-delete__shopping');

      if (!btn) return;
      const id = btn.closest('.shop-item').dataset.id;
      console.log(id);

      handler(id);
    });
  }

  _generateMarkup() {
    let markup = '';
    console.log(this._data);

    this._data.forEach(ingList => {
      markup += `
      <div class="shop-item" data-id="${ingList.id}">
        <ul class="recipe__ingredients">
        <li class="recipe__ingredient">
        <div>
        <a class="remove-default" href="#${ingList.id}">
            <h2 class="heading--2">${ingList.title}</h2>
        </a>
            <ul>
            ${ingList.ingredients.map(this._generateIgn).join('')}
            </ul>
        </div>
       
      </li>
      <ul>
      <button class=" btn-delete__shopping">
       <img src="${deleteIcon}">
     
       </button>
    </div>
      `;
    });

    return markup;
  }

  _generateIgn(ing) {
    if (!typeof ing === 'object') return;

    return `
    <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="${icons}#icon-check"></use>
    </svg>
    <div class="recipe__quantity">${ing.quantity ? ing.quantity : ''}</div>
    <div class="recipe__description">
      <span class="recipe__unit">${ing.unit}</span>
      ${ing.description}
    </div>
  </li>
     `;
  }
}

export default new AddToShopView();
