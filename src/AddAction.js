import Action from './Action';

let actions = [];
let days = [];

function addAction() {

  let newAction = new Action(nameAction.value, date.value, start.value, end.value);

  if (actions.length == 0) {
    actions.push(newAction);
    days.push(newAction.date);

  } else if (actions.find(sameDate)) {

    let thisDay = actions.filter(action => action.date == newAction.date);

    if (thisDay.find(sameTimeEarlier) || thisDay.find(sameTimeLater)) {
      alert('Это время занято, выберите другое!');

    } else {
      actions.push(newAction);
    }

  } else {
    days.push(newAction.date);
    actions.push(newAction);
  }


  function sameDate(element) {
    return element.date === newAction.date;
  }

  function sameTimeLater(element) {
    return (element.start.replace(/:/, '') <= newAction.start.replace(/:/, '') && newAction.start.replace(/:/, '') < element.end.replace(/:/, ''));
  }

  function sameTimeEarlier(element) {
    return (element.start.replace(/:/, '') < newAction.end.replace(/:/, '') && newAction.end.replace(/:/, '') <= element.end.replace(/:/, ''));
  }

}

export {
  actions,
  days,
  addAction
}
