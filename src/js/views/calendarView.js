import View from './View';

class CalendarView extends View {
  _parentEl = document.querySelector('.calendar__top');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    console.log(this._data);
    const markup = this._data
      .map(meal => this.generateDaysMarkup(meal.days, meal.title, meal.id))
      .join('');

    return `
    <div>
    ${markup}
   </div>
        `;
  }

  generateDaysMarkup(days, title, id) {
    return days
      .map(
        day => ` <div class=divspan">
    <span class="dspan">Dia ${day}</span> <a href="#${id}" class="heading--2 remove-default">${title}<a/>
    </div>
           `
      )
      .join('');
  }
}
export default new CalendarView();
