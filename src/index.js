"use strict";

import validator from './Validator';
import { days, addAction } from './AddAction';
import { renderDay, renderSelect } from './Render';
import deleteAction from './DeleteAction';
import { showDay, selectDay } from './ShowDay';

import './app.scss';

const button = document.querySelector('.form-add__button');
const contant = document.querySelector('.page-form__contant');
const select = document.querySelector(".page-form__select");

button.addEventListener('click', () => {

  if (validator()) {
    addAction();
    renderDay(days);
    renderSelect();
  }

});

contant.addEventListener('click', (event) => {
  let target = event.target;

  if (target.classList.contains("block-day__item--delete")) {
    deleteAction(target);
    
    if (selectDay.length > 0) {
      renderDay(selectDay);
    } else {
       renderDay(days);
    }
    renderSelect();
  }
});

select.addEventListener('change', (event) => {
  showDay();
  renderDay(selectDay);
}); 