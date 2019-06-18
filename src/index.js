"use strict";

import validator from './Validator';
import { actions, days, addAction } from './AddAction';
import { renderDay } from './Render';
import deleteAction from './DeleteAction';

import './app.scss';

const button = document.querySelector('.form-add__button');
const contant = document.querySelector('.page-form__contant');

button.addEventListener('click', () => {

  if (validator()) {
    addAction();
    renderDay();
  }

});

contant.addEventListener('click', (event) => {
  let target = event.target;

  if (target.classList.contains("block-day__item--delete")) {
    deleteAction(target);
    renderDay();
  }

});