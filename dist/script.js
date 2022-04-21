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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_changeLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/changeLanguage */ "./src/js/modules/changeLanguage.js");


window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let state = {};
  Object(_modules_form__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_changeLanguage__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./src/js/modules/changeLanguage.js":
/*!******************************************!*\
  !*** ./src/js/modules/changeLanguage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const language = () => {
  const h1 = document.querySelector('#h1'),
        btnChangeLangoage = document.querySelector('#changeLanguageToUa'),
        pMain = document.querySelector('#pMain'),
        showForm = document.querySelector('.showForm'),
        btn = document.querySelector('.btn'),
        clear = document.querySelector('.clear'),
        message = document.querySelector('.message'),
        overlayParagraph = document.querySelector('.overlay__paragraph'),
        yes = document.querySelector('.yes'),
        no = document.querySelector('.no'),
        overlayYesParagraph = document.querySelector('.overlay__yes__paragraph'),
        overlayNoTasksParagraph = document.querySelector('.overlay__noTasks__paragraph'),
        btnMyBad = document.querySelector('.btnMyBad'),
        magickBtn = document.querySelector('.showForm'),
        input = document.querySelector('[name="text"]'),
        parrent = document.querySelector('.tasks');
  const changeLanguageToUs = document.querySelector('#changeLanguageToUs');
  let counterOfBtn = 0;
  changeLanguageToUs.addEventListener('click', () => {
    localStorage.setItem(`language`, 0);
    changeUs();
  });
  btnChangeLangoage.addEventListener('click', () => {
    localStorage.setItem(`language`, 1);
    changUa();
  });

  if (localStorage.getItem(`language`) == 1) {
    changUa();
  }

  try {
    magickBtn.addEventListener('click', () => counterOfBtn = 1);
  } catch (e) {}

  function changeUs() {
    if (counterOfBtn == 0) {
      pMain.textContent = 'My first pet project';
    }

    if (counterOfBtn == 1 || parrent.childNodes.length > 0) {
      pMain.textContent = 'Here you can writh your tasks';
    }

    input.setAttribute('placeholder', 'input your task');

    try {
      h1.textContent = 'Hi, it`s simple To Do web app';
      showForm.style.cssText = 'font-size: 25px;';
      showForm.textContent = `let's start`;
    } catch (e) {}

    clear.style.cssText = 'font-size: 25px;';
    clear.textContent = 'Clear All';
    btn.style.cssText = 'font-size: 25px;';
    btn.textContent = 'Add task';
    message.textContent = 'There is nothing to submit, please write your task';
    overlayParagraph.textContent = 'You are sure you want to delete all tasks ?';
    yes.textContent = 'Yes';
    no.textContent = 'Noooooo';
    overlayYesParagraph.textContent = 'All tasks are cleared';
    overlayNoTasksParagraph.textContent = 'There is no tasks yeat. So i`ts nothing to delete.';
    btnMyBad.textContent = 'Ok, my bad';
  }

  function changUa() {
    if (counterOfBtn == 0) {
      pMain.textContent = 'Мій перший пет проект';
    }

    if (counterOfBtn == 1 || parrent.childNodes.length > 0) {
      pMain.textContent = 'Тут ви можете писати ваші нотатки';
    }

    try {
      h1.textContent = 'Привіт, це простий записник';
      showForm.style.cssText = 'font-size: 20px;';
      showForm.textContent = 'Розпочнімо';
    } catch (e) {}

    input.setAttribute('placeholder', 'введіть текст');
    clear.style.cssText = 'font-size: 19px;';
    clear.textContent = 'Видалити все';
    btn.style.cssText = 'font-size: 19px;';
    btn.textContent = 'Додати нотатку';
    message.textContent = 'Поки що нотаток немає, будь ласка спочатку напишіть щось';
    overlayParagraph.textContent = 'Ви впевнені що хочете видалити всі записи?';
    yes.textContent = 'Так';
    no.textContent = 'Нііііі';
    overlayYesParagraph.textContent = 'Всі записи видалено';
    overlayNoTasksParagraph.textContent = 'Поки що немає записів. Нічого видаляти.';
    btnMyBad.textContent = 'Зрозуміло';
  }
};

/* harmony default export */ __webpack_exports__["default"] = (language);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const form = () => {
  const input = document.querySelector('[name="text"]'),
        btn = document.querySelector('.btn'),
        parrent = document.querySelector('.tasks'),
        form = document.querySelector('.form'),
        magicBtn = document.querySelector('.showForm'),
        clearBtn = document.querySelector('.clear'),
        yesBtn = document.querySelector('.yes'),
        noBtn = document.querySelector('.no'),
        overlay = document.querySelector('.overlay'),
        overlayYes = document.querySelector('.overlay__yes'),
        overlayNoTasks = document.querySelector('.overlay__noTasks'),
        btnMyBad = document.querySelector('.btnMyBad'),
        h1 = document.querySelector('#h1'),
        pMain = document.querySelector('#pMain'),
        btnCloseInfo = document.querySelector('.overlay__info-btn'),
        btnInfo = document.querySelector('.info'),
        infoOverlay = document.querySelector('.overlay__info'),
        infoText = document.querySelector('.overlay__info-text');
  let counter = 0;
  let counterOfBtn = 0; // if (!localStorage.getItem(`language`)) {
  //     const lang = localStorage.setItem(`language`, 0);
  // }
  // console.log(counterOfBtn);
  // console.log(counter);
  // console.log(closeBtn)
  // if (parrent.childNodes) {
  //     console.log('ok');
  //     console.log(parrent.childNodes);
  // }

  btnInfo.addEventListener('click', () => {
    infoOverlay.style.display = 'block';

    if (localStorage.getItem(`language`) == 0) {
      infoText.textContent = `
            The notes you make here will be saved after reloading the page and even after closing the browser. So you don't have to worry about something happening to your records. Unless you want to delete them yourself, you need to swipe the note to the left or click on the cross. There is also a 'Delete All' button that can delete all entries. But be careful removing them, they will not return. Also, this notebook can memorize the language you have chosen to use. So, I hope you enjoy this web application.
            `;
    } else {
      infoText.textContent = `
            Нотатки які ви зробите тут, збережуться  після перезавантаження сторінки та навіть після закриття брузеру. Тож ви можете не хвилюватись що з вашими записами щось трапиться. Хіба що ви самі захочете їх видалити, для цього потрібно просо свайпнути нотатку вліво, чи натиснути на хрестик. Є також кнопка 'Видалити все', яка зможе видалити всі записи. Але будь обережним видаливши їх, вони вже не повернуться. Також цей записник вміє замап'ятовувати мову яку ви вибрали для користування. Тож, я надіюсь вам сподобається цей веб застосунок, приємного користування.
            `;
    }
  });
  btnCloseInfo.addEventListener('click', () => {
    infoOverlay.style.display = 'none';
  });

  function addTask() {
    const task = document.createElement('div'),
          closeBtn = document.createElement('div');
    counter++;
    task.classList.add('task', 'animate__animated', 'animate__bounceIn');
    localStorage.setItem(`task${counter}`, input.value); // console.log(localStorage.getItem(`task${counter}`));

    task.textContent = localStorage.getItem(`task${counter}`);
    closeBtn.classList.add('close');
    closeBtn.textContent = 'X';
    task.append(closeBtn);
    parrent.prepend(task); // console.log('clicked');

    input.value = ''; // console.log(counter);

    localStorage.setItem(`counter`, `${counter}`);
  }

  magicBtn.addEventListener('click', function (e) {
    e.preventDefault();
    counterOfBtn = 1; // console.log(counterOfBtn);

    magicBtn.classList.add('animate__animated', 'animate__zoomOut');
    magicBtn.remove();
    form.classList.add('animate__animated', 'animate__flipInX');
    form.style.display = 'flex';
    h1.remove();
    pMain.classList.add('animate__animated', 'animate__fadeInDown');

    if (counterOfBtn == 1 && localStorage.getItem(`language`) == 0) {
      pMain.textContent = `Here you can writh your tasks`;
    }

    if (counterOfBtn == 1 && localStorage.getItem(`language`) == 1) {
      pMain.textContent = `Тут ви можете писати ваші нотатки`;
    }
  });
  clearBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (localStorage.getItem(`counter`) > 0) {
      overlay.style.display = 'block';
      overlay.classList.add('animate__animated', 'animate__bounceIn');
    }

    if (localStorage.getItem(`counter`) == 0) {
      overlayNoTasks.style.display = 'block';
    }
  });
  noBtn.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.style.display = 'none';
  });
  yesBtn.addEventListener('click', function (e) {
    e.preventDefault();
    parrent.textContent = '';

    for (let i = 1; i <= localStorage.getItem(`counter`); i++) {
      if (localStorage.getItem(`counter`) > 0) {
        localStorage.removeItem(`task${i}`);
      }
    }

    localStorage.setItem(`counter`, 0);
    counter = 0;
    overlay.style.display = 'none';
    overlayYes.style.display = 'block';
    setTimeout(() => overlayYes.classList.add('animate__animated', 'animate__fadeOut'), 1000);
    setTimeout(() => overlayYes.style.display = 'none', 1500);
  });
  btnMyBad.addEventListener('click', () => {
    overlayNoTasks.style.display = 'none';
  });
  btn.addEventListener('click', e => {
    e.preventDefault();

    if (input.value !== '') {
      document.querySelector('.message').style.display = 'none';
      addTask();
    } else {
      document.querySelector('.message').style.display = 'block';
      console.log('You dont write enithing yeat');
    }
  });

  function showTasks() {
    for (let i = 1; i <= localStorage.getItem(`counter`); i++) {
      if (localStorage.getItem(`counter`) > 0) {
        // console.log(`task ${i}`);
        const task = document.createElement('div'),
              closeBtn = document.createElement('div');
        task.classList.add('task', 'animate__animated', 'animate__bounceIn');
        task.textContent = localStorage.getItem(`task${i}`); // task.textContent = 'some text'

        closeBtn.classList.add('close');
        closeBtn.textContent = 'X';
        task.append(closeBtn);
        parrent.prepend(task);
      }
    }
  }

  function close() {
    parrent.addEventListener('click', function (e) {
      e.stopPropagation();

      if (e.target.classList.contains('close')) {
        localStorage.removeItem(`task${counter}`); // console.log(e.target);

        counter--;
        localStorage.setItem(`counter`, `${counter}`);
        e.target.parentElement.classList.remove('animate__bounceIn');
        e.target.parentElement.classList.add('animate__animated', 'animate__backOutLeft');

        function delParrent() {
          e.target.parentElement.remove();
        }

        setTimeout(function () {
          delParrent();
        }, 500);
      }
    });
  }

  function crossOutTheTask() {
    parrent.addEventListener('click', function (e) {
      if (e.target.classList.contains('task')) {
        e.target.classList.toggle('done');
      }
    });
  }

  showTasks();
  crossOutTheTask();
  close();

  if (localStorage.getItem(`counter`) !== null) {
    counter = localStorage.getItem(`counter`);
  }

  if (parrent.childNodes.length > 0) {
    magicBtn.click(); // console.log('yes');
  } else {} // console.log('no');
    // console.log(parrent.childNodes);
    // console.log(parrent.childNodes.length);


  let initialPoint;
  let finalPoint;
  document.addEventListener('touchstart', function (event) {
    // event.preventDefault();
    event.stopPropagation();
    initialPoint = event.changedTouches[0];
  }, false);
  document.addEventListener('touchend', function (event) {
    // event.preventDefault();
    event.stopPropagation();
    finalPoint = event.changedTouches[0];
    const xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    const yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);

    if (xAbs > 20 || yAbs > 20) {
      if (xAbs > yAbs) {
        if (finalPoint.pageX < initialPoint.pageX) {
          if (event.target.classList.contains('task')) {
            localStorage.removeItem(`task${counter}`);
            counter--;
            localStorage.setItem(`counter`, `${counter}`);
            event.target.classList.remove('animate__bounceIn');
            event.target.classList.add('animate__animated', 'animate__backOutLeft');

            function delParrent() {
              event.target.remove();
            }

            setTimeout(function () {
              delParrent();
            }, 500);
          }
          /*СВАЙП ВЛЕВО*/

        } else {
            /*СВАЙП ВПРАВО*/
          }
      } else {
        if (finalPoint.pageY < initialPoint.pageY) {
          /*СВАЙП ВВЕРХ*/
        } else {
            /*СВАЙП ВНИЗ*/
          }
      }
    }
  }, false);
};

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map