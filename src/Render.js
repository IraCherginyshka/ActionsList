import { actions, days } from './AddAction';

// const formatter = new Intl.DateTimeFormat("ru");
const select = document.querySelector(".page-form__select");

function renderDay(days) {

  const contant = document.querySelector('.page-form__contant');
  contant.innerHTML = '';
  days.sort((a, b) => {
    let yearA = a.match(/\d{4}$/)[0];
    let monthA = a.replace((/^\d{2}./), '').replace((/.\d{4}$/), '');
    let dayA = a.match(/^\d{2}/)[0];

    let yearB = b.match(/\d{4}$/)[0];
    let monthB = b.replace((/^\d{2}./), '').replace((/.\d{4}$/), '');
    let dayB = b.match(/^\d{2}/)[0];

    let dateA = new Date(yearA, monthA, dayA);
    let dateB = new Date(yearB, monthB, dayB);

    return dateA - dateB;
  });

  for (let i = 0; i < days.length; i++) {
    contant.innerHTML += `
      <div class="block-day">
      <div class="block-day__title">${days[i]}</div>
      <div class="block-day__content">
        <ul class="block-day__list" data-id='${days[i]}'>
        </ul>
      </div>
      </div>`;

    renderList(days[i]);
    renderTitle(days[i]);
  }
}

function renderTitle(day) {
  let dayTitle = document.querySelector(`ul[data-id='${day}']`).parentElement.previousElementSibling;
  dayTitle.innerHTML = day;
}

function renderList(day) {
  let list = document.querySelector(`ul[data-id='${day}']`);
  list.innerHTML = "";

  actions.sort((a, b) => {
    return a.start.replace(/:/, '') - b.start.replace(/:/, '');
  });

  for (let i = 0; i < actions.length; i++) {

    if (actions[i].date === day) {
      list.innerHTML += `
        <li class="block-day__item">
          <ul class="block-day__list block-day__item--list">
            <li class="block-day__item--name">${actions[i].nameAction}</li>
            <li class="block-day__item--start">${actions[i].start}</li>
            <li class="block-day__item--end">${actions[i].end}</li>
            <li class="block-day__item--edit"><i class="fas fa-edit"></i></li>
            <li class="block-day__item--delete">x</li>
          </ul>
     </li>`
    }
  }
}

function renderSelect() {
  select.innerHTML = "<option selected>Дата </option>";

  for (let i = 0; i < days.length; i++) {
    const newOption = new Option(days[i], days[i]);
    select.appendChild(newOption);
  }
}

export {
  renderDay,
  renderSelect
} 
