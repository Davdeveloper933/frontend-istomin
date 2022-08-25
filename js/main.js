/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const closeBtn = document.getElementById(\"closebtn\");\r\nconst hamburgerBtn = document.getElementById(\"hamburger\");\r\nconst mobMenu = document.getElementById(\"mob-menu\");\r\nconst {toggleHamburgerBtn, hideMobileMenu} = __webpack_require__(/*! ./module/mob-menu */ \"./src/js/module/mob-menu.js\");\r\nconst {stickyOnScrollDown,showOnScrollUp} = __webpack_require__(/*! ./module/sticky-horizontal-menu */ \"./src/js/module/sticky-horizontal-menu.js\");\r\n\r\nhamburgerBtn.addEventListener(\"click\", toggleHamburgerBtn);\r\ncloseBtn.addEventListener(\"click\",hideMobileMenu);\r\n\r\ndocument.addEventListener(\"click\", function (event) {\r\n        if (!hamburgerBtn.contains(event.target)\r\n               && !mobMenu.contains(event.target)) {\r\n                hideMobileMenu()\r\n        }\r\n})\r\n\r\nwindow.addEventListener(\"scroll\",stickyOnScrollDown);\r\nwindow.addEventListener(\"scroll\",showOnScrollUp);\r\n\n\n//# sourceURL=webpack://gulp_project/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/mob-menu.js":
/*!***********************************!*\
  !*** ./src/js/module/mob-menu.js ***!
  \***********************************/
/***/ (function(module) {

eval("const mobMenu = document.getElementById(\"mob-menu\");\r\n        function hideMobileMenu() {\r\n                mobMenu.classList.add(\"hidden\")\r\n        }\r\n\r\n        function showMobileMenu() {\r\n                mobMenu.classList.remove(\"hidden\")\r\n        }\r\n\r\n        function toggleHamburgerBtn () {\r\n                if (mobMenu.classList.contains(\"hidden\")) {\r\n                        showMobileMenu()\r\n                } else {\r\n                        hideMobileMenu()\r\n                }\r\n        }\r\n\r\n        module.exports.toggleHamburgerBtn = toggleHamburgerBtn;\r\n        module.exports.hideMobileMenu = hideMobileMenu;\n\n//# sourceURL=webpack://gulp_project/./src/js/module/mob-menu.js?");

/***/ }),

/***/ "./src/js/module/sticky-horizontal-menu.js":
/*!*************************************************!*\
  !*** ./src/js/module/sticky-horizontal-menu.js ***!
  \*************************************************/
/***/ (function(module) {

eval("const navbar = document.getElementById(\"navbar\");\r\nlet prevScrollpos = window.pageYOffset;\r\n\r\nfunction stickyOnScrollDown() {\r\n    if (window.pageYOffset > 0) {\r\n        navbar.classList.add(\"sticky\")\r\n        navbar.classList.remove(\"go-up\")\r\n    }\r\n}\r\n\r\n\r\n function showOnScrollUp() {\r\n    const currentScrollPos = window.pageYOffset;\r\n    if (prevScrollpos > currentScrollPos) {\r\n        navbar.classList.remove(\"go-up\")\r\n    }\r\n    else if (currentScrollPos >= 200) {\r\n         navbar.classList.add(\"go-up\")\r\n     }\r\n    prevScrollpos = currentScrollPos;\r\n}\r\n\r\nmodule.exports.stickyOnScrollDown = stickyOnScrollDown;\r\nmodule.exports.showOnScrollUp = showOnScrollUp;\n\n//# sourceURL=webpack://gulp_project/./src/js/module/sticky-horizontal-menu.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;