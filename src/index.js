"use strict";

import validator from './Validator';
import { actions, days, addAction } from './AddAction';
import { renderDay } from './Render';

import './app.scss';

const button = document.querySelector('.form-add__button');


button.addEventListener('click', () => {

  if (validator()) {
    addAction();

    for (let i = 0; i < days.length; i++) {
      renderDay(days[i]);
    }
  }

  console.log(actions);
  console.log(days);
});


const contant = document.querySelector('.page-form__contant');

contant.addEventListener('click', (event) => {
  let target = event.target;

 
    if (target.classList.contains("block-day__item--delete")) {
      // deleteAction(target);
      
      //проверка один ли день в списке
      //если да, то удаляю полность день с массива
      //если нет, то ищу выбранный день и удаляю уго
      //делаю перересовку страницы
      
      renderDay(target.parentNode.parentNode.parentNode.dataset.id);

      console.log(target);
      console.log(target.parentNode.parentNode.parentNode.dataset.id);
    }


});

// function deleteAction() {

// 