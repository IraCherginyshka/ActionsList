
import { actions, days } from './AddAction';

function deleteAction(target) {

  let index = actions.findIndex((element) => {
    if (element.date === target.parentNode.parentNode.parentNode.dataset.id &&
      element.start === target.parentNode.querySelector('.block-day__item--start').innerText) {
      return element;
    }
  });

  actions.splice(index, 1);

  let actionInDay = actions.filter(element => {
    return element.date === target.parentNode.parentNode.parentNode.dataset.id;
  });

  if (actionInDay.length == 0) {
    let index = days.findIndex((element) => {
      if (element === target.parentNode.parentNode.parentNode.dataset.id) {
        return element;
      }
    });
    days.splice(index, 1);
  }
}

export default deleteAction;