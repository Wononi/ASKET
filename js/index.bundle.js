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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ \"./style/style.scss\");\n\nconst observer = new IntersectionObserver(entries => {\n  entries.forEach(entry => {\n    if (!entry.isIntersecting) {\n      document.querySelector('.scroll__nav').classList.add('scroll__nav-show');\n    } else {\n      document.querySelector('.scroll__nav').classList.remove('scroll__nav-show');\n    }\n  });\n});\nobserver.observe(document.querySelector('header nav'));\nconst text = document.querySelector('.download__wrapper p');\nconst mediaQuery = window.matchMedia('(max-width: 1023px)');\nfunction handleTabletChange(e) {\n  if (e.matches) {\n    text.innerHTML = `скачай<br>установи<br>работай`;\n  } else {\n    text.innerHTML = 'скачай → установи → работай';\n  }\n}\nmediaQuery.addListener(handleTabletChange);\nhandleTabletChange(mediaQuery);\nconst navigation = Array.from(document.querySelectorAll('header nav a'));\nconst navigationScroll = Array.from(document.querySelectorAll('.scroll__nav a'));\nnavigation.splice(0, 1);\nnavigation.splice(3, 1);\nnavigationScroll.splice(0, 1);\nnavigationScroll.splice(3, 1);\nconst observers = new IntersectionObserver(entries => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting && entry.target.getAttribute('id') === 'for-what') {\n      navigation[0].classList.add('active');\n      navigation[1].classList.remove('active');\n      navigation[2].classList.remove('active');\n      navigationScroll[0].classList.add('active');\n      navigationScroll[1].classList.remove('active');\n      navigationScroll[2].classList.remove('active');\n    } else if (entry.isIntersecting && entry.target.getAttribute('id') === 'for-who') {\n      navigation[0].classList.remove('active');\n      navigation[1].classList.add('active');\n      navigation[2].classList.remove('active');\n      navigationScroll[0].classList.remove('active');\n      navigationScroll[1].classList.add('active');\n      navigationScroll[2].classList.remove('active');\n    } else if (entry.isIntersecting && entry.target.getAttribute('id') === 'more') {\n      navigation[0].classList.remove('active');\n      navigation[1].classList.remove('active');\n      navigation[2].classList.add('active');\n      navigationScroll[0].classList.remove('active');\n      navigationScroll[1].classList.remove('active');\n      navigationScroll[2].classList.add('active');\n    }\n  });\n});\nlet arrSection = [];\narrSection.push(document.querySelector('.for-what h2'), document.querySelector('.for-who h2'), document.querySelector('.more__wrapper'));\narrSection.forEach(el => {\n  observers.observe(el);\n});\nconst forWhat = document.querySelector(\"header\");\nconst forWho = document.querySelector(\".for-who\");\nconst more = document.querySelector(\".more\");\nnavigation[0].addEventListener(\"click\", () => {\n  forWhat.scrollIntoView({\n    block: \"start\",\n    behavior: \"smooth\"\n  });\n});\nnavigationScroll[0].addEventListener(\"click\", () => {\n  forWhat.scrollIntoView({\n    block: \"start\",\n    behavior: \"smooth\"\n  });\n});\nnavigation[1].addEventListener(\"click\", () => {\n  forWho.scrollIntoView({\n    block: \"start\",\n    behavior: \"smooth\"\n  });\n});\nnavigationScroll[1].addEventListener(\"click\", () => {\n  forWho.scrollIntoView({\n    block: \"start\",\n    behavior: \"smooth\"\n  });\n});\nnavigation[2].addEventListener(\"click\", () => {\n  more.scrollIntoView({\n    block: \"start\",\n    behavior: \"smooth\"\n  });\n});\nnavigationScroll[2].addEventListener(\"click\", () => {\n  more.scrollIntoView({\n    block: \"start\",\n    behavior: \"smooth\"\n  });\n});\n\n//# sourceURL=webpack:///./js/index.js?");

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