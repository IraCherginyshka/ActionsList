import { days } from './AddAction';

let selectDay = [];

function showDay() {
 
  if (event.target.value !== 'Дата') {
    selectDay = days.filter((day) => day === event.target.value);
  } else {
    selectDay = days;
  }
}

export {
  showDay,
  selectDay
}
