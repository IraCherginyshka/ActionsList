/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAction = exports.days = exports.actions = undefined;

var _Action = __webpack_require__(3);

var _Action2 = _interopRequireDefault(_Action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = [];
var days = [];

function addAction() {

  var newAction = new _Action2.default(nameAction.value, date.value, start.value, end.value);

  if (actions.length == 0) {
    actions.push(newAction);
    days.push(newAction.date);
  } else if (actions.find(sameDate)) {

    var thisDay = actions.filter(function (action) {
      return action.date == newAction.date;
    });

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
    return element.start.replace(/:/, '') <= newAction.start.replace(/:/, '') && newAction.start.replace(/:/, '') < element.end.replace(/:/, '');
  }

  function sameTimeEarlier(element) {
    return element.start.replace(/:/, '') < newAction.end.replace(/:/, '') && newAction.end.replace(/:/, '') <= element.end.replace(/:/, '');
  }
}

exports.actions = actions;
exports.days = days;
exports.addAction = addAction;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Validator = __webpack_require__(2);

var _Validator2 = _interopRequireDefault(_Validator);

var _AddAction = __webpack_require__(0);

var _Render = __webpack_require__(4);

var _DeleteAction = __webpack_require__(10);

var _DeleteAction2 = _interopRequireDefault(_DeleteAction);

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var button = document.querySelector('.form-add__button');
var contant = document.querySelector('.page-form__contant');

button.addEventListener('click', function () {

  if ((0, _Validator2.default)()) {
    (0, _AddAction.addAction)();
    (0, _Render.renderDay)();
  }
});

contant.addEventListener('click', function (event) {
  var target = event.target;

  if (target.classList.contains("block-day__item--delete")) {
    (0, _DeleteAction2.default)(target);
    (0, _Render.renderDay)();
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Validator;
function Validator() {

  var nameAction = document.querySelector('#nameAction');
  var date = document.querySelector('#date');
  var start = document.querySelector('#start');
  var end = document.querySelector('#end');

  if (nameAction.value.length > 25 || !nameAction.value) {
    alert('Введите название мероприятия! Максимальное колличество символов - 25');
  } else if (!date.value.match(/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/)) {
    alert('Введите дату в формате дд.мм.гггг');
  } else if (!start.value.match(/(09|1[0-7]):[0-5][0-9]/)) {
    alert('Начало мероприятия должно быть не раньше 09:00');
  } else if (!end.value.match(/(09|1[0-7]:[0-5][0-9])|(1[0-7]:[0-5][0-9])|(18:00)/)) {
    alert('Мероприятие должно закончиться до 18:00');
  } else if (start.value.replace(/:/, "") - end.value.replace(/:/, "") > 0) {
    alert('Мероприятие должно закончиться после времени начала!');
  } else {
    return true;
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Action = function Action(nameAction, date, start, end) {
  _classCallCheck(this, Action);

  this.nameAction = nameAction;
  this.date = date;
  this.start = start;
  this.end = end;
};

exports.default = Action;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderList = exports.renderTitle = exports.renderDay = undefined;

var _AddAction = __webpack_require__(0);

var formatter = new Intl.DateTimeFormat("ru");

function renderDay() {

  var contant = document.querySelector('.page-form__contant');
  contant.innerHTML = '';

  _AddAction.days.sort(function (a, b) {
    var yearA = a.match(/\d{4}$/)[0];
    var monthA = a.replace(/^\d{2}./, '').replace(/.\d{4}$/, '');
    var dayA = a.match(/^\d{2}/)[0];

    var yearB = b.match(/\d{4}$/)[0];
    var monthB = b.replace(/^\d{2}./, '').replace(/.\d{4}$/, '');
    var dayB = b.match(/^\d{2}/)[0];

    var dateA = new Date(yearA, monthA, dayA);
    var dateB = new Date(yearB, monthB, dayB);

    return dateA - dateB;
  });

  console.log(_AddAction.days);

  for (var i = 0; i < _AddAction.days.length; i++) {
    contant.innerHTML += '\n      <div class="block-day">\n      <div class="block-day__title">' + _AddAction.days[i] + '</div>\n      <div class="block-day__content">\n        <ul class="block-day__list" data-id=\'' + _AddAction.days[i] + '\'>\n        </ul>\n      </div>\n      </div>';

    renderList(_AddAction.days[i]);
    renderTitle(_AddAction.days[i]);
  }
}

function renderTitle(day) {
  var dayTitle = document.querySelector('ul[data-id=\'' + day + '\']').parentElement.previousElementSibling;
  dayTitle.innerHTML = day;
}

function renderList(day) {
  var list = document.querySelector('ul[data-id=\'' + day + '\']');
  list.innerHTML = "";

  _AddAction.actions.sort(function (a, b) {
    return a.start.replace(/:/, '') - b.start.replace(/:/, '');
  });
  console.log(_AddAction.actions);

  for (var i = 0; i < _AddAction.actions.length; i++) {

    if (_AddAction.actions[i].date === day) {
      list.innerHTML += '\n        <li class="block-day__item">\n          <ul class="block-day__list block-day__item--list">\n            <li class="block-day__item--name">' + _AddAction.actions[i].nameAction + '</li>\n            <li class="block-day__item--start">' + _AddAction.actions[i].start + '</li>\n            <li class="block-day__item--end">' + _AddAction.actions[i].end + '</li>\n            <li class="block-day__item--edit"><i class="fas fa-edit"></i></li>\n            <li class="block-day__item--delete">x</li>\n          </ul>\n     </li>';
    }
  }
}

exports.renderDay = renderDay;
exports.renderTitle = renderTitle;
exports.renderList = renderList;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AddAction = __webpack_require__(0);

function deleteAction(target) {

  var index = _AddAction.actions.findIndex(function (element) {
    if (element.date === target.parentNode.parentNode.parentNode.dataset.id && element.start === target.parentNode.querySelector('.block-day__item--start').innerText) {
      return element;
    }
  });

  _AddAction.actions.splice(index, 1);

  var actionInDay = _AddAction.actions.filter(function (element) {
    return element.date === target.parentNode.parentNode.parentNode.dataset.id;
  });

  if (actionInDay.length == 0) {
    var _index = _AddAction.days.findIndex(function (element) {
      if (element === target.parentNode.parentNode.parentNode.dataset.id) {
        return element;
      }
    });
    _AddAction.days.splice(_index, 1);
  }
}

exports.default = deleteAction;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map