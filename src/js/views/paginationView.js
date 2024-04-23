import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      console.log(goToPage);
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const curPage = this._data.page;
    // page1 and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateBtnMarkup('next', curPage, numPages);
    }

    //other page
    if (curPage < numPages) {
      return `
      ${this._generateBtnMarkup('prev', curPage, numPages)}
      ${this._generateBtnMarkup('next', curPage, numPages)}
    `;
    }

    //last page
    if (curPage === numPages && numPages > 1) {
      return this._generateBtnMarkup('prev', curPage, numPages);
    }
    //page 1 and theres no other pages
    return ``;
    console.log(numPages);
  }

  _generateBtnMarkup(direction, curPage, totalPages) {
    const html = `<span class="total-pages">currently on page ${curPage} of ${totalPages}</span>`;

    return direction === 'prev'
      ? `<button data-goto ="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
  <svg class="search__icon">
    <use href="${icons}#icon-arrow-left"></use>
  </svg>
  <span>Page ${curPage - 1}</span>
</button>
${curPage === totalPages ? html : ''}
 `
      : `${curPage < totalPages ? html : ''}<button data-goto ="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
    <span>Page ${curPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>
  `;
  }
}

export default new PaginationView();
