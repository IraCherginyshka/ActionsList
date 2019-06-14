import Action from './Action';

let actions = [];
let days = [];

function addAction() {

  let newAction = new Action(nameAction.value, date.value, start.value, end.value);

  if (actions.length == 0) {
    actions.push(newAction);
    days.push(newAction.date);

  } else if (actions.find(sameDate)) {
    console.log('same date')

    if (actions.find(sameTime)) {
      console.log('sameTime ')
      alert('Это время занято, выберите другое');

    } else if (actions.find(differentTimeHour)) {
      actions.push(newAction);
      console.log('sdifferentTimeHourame ')

    } else if (actions.find(sameEndStart)) {
      actions.push(newAction);
      console.log('sameEndStart ')

    } else {
      alert('Это время занято, выберите другое!');
    }

  } else if (actions.find(differentDate)) {
    days.push(newAction.date);
    actions.push(newAction);

  } else {
    alert('Это время занято, выберите другое');
  }

  
  function sameDate(element) {
    return element.date === newAction.date;
  }
  function differentDate(element) {
    return !(element.date === newAction.date);
  }

  function differentTimeHour(element) {
    return ((newAction.start.replace(/:\d{2}/, '') - element.end.replace(/:\d{2}/, '')) > 0) || ((newAction.end.replace(/:\d{2}/, '') - element.start.replace(/:\d{2}/, '')) < 0);
  }

  function sameTime(element) {
    return (newAction.start === element.start || newAction.end === element.end);
  }

  function sameEndStart(element) {
    return (newAction.start == element.end) || (newAction.end == element.start);
  }
}

export {
  actions,
  days,
  addAction
}
