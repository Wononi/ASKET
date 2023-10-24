/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ \"./style/style.scss\");\n\nconst headerNav = document.querySelector('header nav');\nif (headerNav !== null && headerNav !== undefined) {\n  const observer = new IntersectionObserver(entries => {\n    entries.forEach(entry => {\n      if (!entry.isIntersecting) {\n        document.querySelector('.scroll__nav').classList.add('scroll__nav-show');\n      } else {\n        document.querySelector('.scroll__nav').classList.remove('scroll__nav-show');\n      }\n    });\n  });\n  observer.observe(headerNav);\n}\nconst text = document.querySelector('.download__wrapper p');\nif (text !== null && text !== undefined) {\n  const mediaQuery = window.matchMedia('(max-width: 1023px)');\n  function handleTabletChange(e) {\n    if (e.matches) {\n      text.innerHTML = `скачай<br>установи<br>работай`;\n    } else {\n      text.innerHTML = 'скачай → установи → работай';\n    }\n  }\n  mediaQuery.addListener(handleTabletChange);\n  handleTabletChange(mediaQuery);\n}\nconst navigation = Array.from(document.querySelectorAll('header nav a'));\nconst navigationScroll = Array.from(document.querySelectorAll('.scroll__nav a'));\nif (navigation.length !== 0) {\n  navigation.splice(0, 1);\n  navigation.splice(3, 1);\n  navigationScroll.splice(0, 1);\n  navigationScroll.splice(3, 1);\n  const observers = new IntersectionObserver(entries => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting && entry.target.getAttribute('id') === 'for-what') {\n        navigation[0].classList.add('active');\n        navigation[1].classList.remove('active');\n        navigation[2].classList.remove('active');\n        navigationScroll[0].classList.add('active');\n        navigationScroll[1].classList.remove('active');\n        navigationScroll[2].classList.remove('active');\n      } else if (entry.isIntersecting && entry.target.getAttribute('id') === 'for-who') {\n        navigation[0].classList.remove('active');\n        navigation[1].classList.add('active');\n        navigation[2].classList.remove('active');\n        navigationScroll[0].classList.remove('active');\n        navigationScroll[1].classList.add('active');\n        navigationScroll[2].classList.remove('active');\n      } else if (entry.isIntersecting && entry.target.getAttribute('id') === 'more') {\n        navigation[0].classList.remove('active');\n        navigation[1].classList.remove('active');\n        navigation[2].classList.add('active');\n        navigationScroll[0].classList.remove('active');\n        navigationScroll[1].classList.remove('active');\n        navigationScroll[2].classList.add('active');\n      }\n    });\n  });\n  let arrSection = [];\n  arrSection.push(document.querySelector('.for-what h2'), document.querySelector('.for-who h2'), document.querySelector('.more__wrapper'));\n  arrSection.forEach(el => {\n    observers.observe(el);\n  });\n  const forWhat = document.querySelector(\"header\");\n  const forWho = document.querySelector(\".for-who\");\n  const more = document.querySelector(\".more\");\n  const download = document.querySelector(\".download\");\n  let dowloadsBtn = document.querySelectorAll('.header__download');\n  dowloadsBtn.forEach(e => {\n    e.addEventListener(\"click\", () => {\n      download.scrollIntoView({\n        block: \"start\",\n        behavior: \"smooth\"\n      });\n    });\n  });\n  navigation[0].addEventListener(\"click\", () => {\n    forWhat.scrollIntoView({\n      block: \"start\",\n      behavior: \"smooth\"\n    });\n  });\n  navigationScroll[0].addEventListener(\"click\", () => {\n    forWhat.scrollIntoView({\n      block: \"start\",\n      behavior: \"smooth\"\n    });\n  });\n  navigation[1].addEventListener(\"click\", () => {\n    forWho.scrollIntoView({\n      block: \"start\",\n      behavior: \"smooth\"\n    });\n  });\n  navigationScroll[1].addEventListener(\"click\", () => {\n    forWho.scrollIntoView({\n      block: \"start\",\n      behavior: \"smooth\"\n    });\n  });\n  navigation[2].addEventListener(\"click\", () => {\n    more.scrollIntoView({\n      block: \"start\",\n      behavior: \"smooth\"\n    });\n  });\n  navigationScroll[2].addEventListener(\"click\", () => {\n    more.scrollIntoView({\n      block: \"start\",\n      behavior: \"smooth\"\n    });\n  });\n}\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./style/style.scss":
/*!**************************!*\
  !*** ./style/style.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map