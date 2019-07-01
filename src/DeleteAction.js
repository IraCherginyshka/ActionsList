
import { actions, days } from './AddAction';

function deleteAction(target) {

  const deleteDate = target.parentNode.parentNode.parentNode.dataset.id;

  let index = actions.findIndex((element) => {
    if (element.date === deleteDate && element.start === target.parentNode.querySelector('.block-day__item--start').innerText) {
      return element;
    }
  });

  actions.splice(index, 1);

  let actionInDay = actions.filter(element => {
    return element.date === deleteDate;
  });

  if (actionInDay.length == 0) {
    let index = days.findIndex((element) => {
      if (element === deleteDate) {
        return element;
      }
    });
    days.splice(index, 1);
  }
}

export default deleteAction;