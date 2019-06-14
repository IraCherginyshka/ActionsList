import { actions, days } from './AddAction';


const formatter = new Intl.DateTimeFormat("ru");


function renderTitle(day) {
  let dayTitle = document.querySelector(`ul[data-id='${day}']`).parentElement.previousElementSibling;
  dayTitle.innerHTML = day;
}

function renderDay(day) {

  const contant = document.querySelector('.page-form__contant');
  contant.innerHTML = '';

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
  }
  renderTitle(day);
}


function renderList(day) {

    let list = document.querySelector(`ul[data-id='${day}']`);
    list.innerHTML = "";

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

export {
  renderDay,
  renderTitle,
  renderList
}