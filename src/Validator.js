export default function Validator() {

  const nameAction = document.querySelector('#nameAction');
  const date = document.querySelector('#date');
  const start = document.querySelector('#start');
  const end = document.querySelector('#end');

  if (nameAction.value.length > 25 || !nameAction.value) {
    alert('Введите название мероприятия! Максимальное колличество символов - 25');

  } else if (!date.value.match(/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/)) {
    alert('Введите дату в формате дд.мм.гггг');

  } else if (!start.value.match(/(09|1[0-7]):[0-5][0-9]/)) {
    alert('Начало мероприятия должно быть не раньше 09:00');

  } else if (!end.value.match(/(09|1[0-7]:[0-5][0-9])|(1[0-7]:[0-5][0-9])|(18:00)/)) {
    alert('Мероприятие должно закончиться до 18:00');

  } else if ((start.value.replace(/:/, "") - end.value.replace(/:/, "") > 0)) { 
    alert('Мероприятие должно закончиться после времени начала!');
  } else {
      return true;
  }
}


