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

  _generateMarkup() {
    let markup = '';
    this._data.forEach(ingList => {
      markup += `
        <ul class="recipe__ingredients">
        <li class="recipe__ingredient">
        <a class="remove-default" href="#${ingList.id}">
            <h2 class="heading--2">${ingList.title}</h2>
            <ul>
            ${ingList.ingredients.map(this._generateIgn).join('')}
            </ul>
        </a>
      </li>
      <ul>
      <button class=" btn btn-delete__shopping">
     <img src="${deleteIcon}">
     
    </button>
      `;
    });

    return markup;
  }

  addHandlerAddIng(handler) {
    const btnParent = document.querySelector('.recipe');
    btnParent.addEventListener('click', function (e) {
      if (!e.target.classList.contains('add-ing')) return;
      console.log('shopping');

      handler();
    });
  }

  _generateIgn(ing) {
    if (!typeof ing === 'object') return;

    return `
    <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="${icons}#icon-check"></use>
    </svg>
    <div class="recipe__quantity">${
      ing.quantity ? new Fraction(ing.quantity).toString() : ''
    }</div>
    <div class="recipe__description">
      <span class="recipe__unit">${ing.unit}</span>
      ${ing.description}
    </div>
  </li>
     `;
  }
}

export default new AddToShopView();
