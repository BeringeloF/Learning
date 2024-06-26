import icons from 'url:../../img/icons.svg';
export default class View {
  _data;

  /**
   * Render the recive object to the DOM
   * @param {Object | Object[]} data  the data to be renderded
   * @param {boolean} [render = true] if false create markup string insted of rendering to the DOM
   * @returns {undefined | string}  markup string is returned if render = false
   * @this {object}View instance
   * @autor ME
   * @todo finish implementation
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    console.log(this);
    this._data = data;

    const markup = this._generateMarkup();
    if (!render) return markup;
    console.log(this, render);

    this._clear();
    this._parentEl.insertAdjacentHTML(`afterbegin`, markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();
    const newDom = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDom.querySelectorAll('*'));
    const curElements = Array.from(this._parentEl.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      //IsEqualNode serva pare ver se os elementos sao iguais
      //Update change TEXT
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }
      //Update change ATTRIBUTES
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  _clear() {
    this._parentEl.innerHTML = ``;
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
        </div>'`;
    this._clear();
    this._parentEl.insertAdjacentHTML(`afterbegin`, markup);
  }

  renderError(message = this._errorMsg) {
    const markup = `
        <div class="error">
            <div>
              <svg>
                <use href="${icons}icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;

    this._clear();
    this._parentEl.insertAdjacentHTML(`afterbegin`, markup);
  }

  renderMessage(message = this._message) {
    const markup = `
        <div class="message">
            <div>
              <svg>
                <use href="${icons}icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;

    this._clear();
    this._parentEl.insertAdjacentHTML(`afterbegin`, markup);
  }
}
