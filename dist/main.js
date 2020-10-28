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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/css/grid.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./src/css/grid.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".grid-template {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(12, 1fr);\\r\\n  grid-gap: 1%;\\r\\n}\\r\\n\\r\\n.row {\\r\\n  grid-column: span 12;\\r\\n}\\r\\n\\r\\n.col-place-center {\\r\\n  place-self: center;\\r\\n}\\r\\n\\r\\n.col-1 {\\r\\n  grid-column: span 1;\\r\\n}\\r\\n\\r\\n.col-start-1 {\\r\\n  grid-column-start: 1;\\r\\n}\\r\\n\\r\\n.col-end-1 {\\r\\n  grid-column-end: 1;\\r\\n}\\r\\n\\r\\n.row-start-1 {\\r\\n  grid-row-start: 1;\\r\\n}\\r\\n\\r\\n.row-end-1 {\\r\\n  grid-row-end: 1;\\r\\n}\\r\\n\\r\\n.row-span-1 {\\r\\n  grid-row: span 1;\\r\\n}\\r\\n\\r\\n.col-2 {\\r\\n  grid-column: span 2;\\r\\n}\\r\\n\\r\\n.col-start-2 {\\r\\n  grid-column-start: 2;\\r\\n}\\r\\n\\r\\n.col-end-2 {\\r\\n  grid-column-end: 2;\\r\\n}\\r\\n\\r\\n.row-start-2 {\\r\\n  grid-row-start: 2;\\r\\n}\\r\\n\\r\\n.row-end-2 {\\r\\n  grid-row-end: 2;\\r\\n}\\r\\n\\r\\n.row-span-2 {\\r\\n  grid-row: span 2;\\r\\n}\\r\\n\\r\\n.col-3 {\\r\\n  grid-column: span 3;\\r\\n}\\r\\n\\r\\n.col-start-3 {\\r\\n  grid-column-start: 3;\\r\\n}\\r\\n\\r\\n.col-end-3 {\\r\\n  grid-column-end: 3;\\r\\n}\\r\\n\\r\\n.row-start-3 {\\r\\n  grid-row-start: 3;\\r\\n}\\r\\n\\r\\n.row-end-3 {\\r\\n  grid-row-end: 3;\\r\\n}\\r\\n\\r\\n.row-span-3 {\\r\\n  grid-row: span 3;\\r\\n}\\r\\n\\r\\n.col-4 {\\r\\n  grid-column: span 4;\\r\\n}\\r\\n\\r\\n.col-start-4 {\\r\\n  grid-column-start: 4;\\r\\n}\\r\\n\\r\\n.col-end-4 {\\r\\n  grid-column-end: 4;\\r\\n}\\r\\n\\r\\n.row-start-4 {\\r\\n  grid-row-start: 4;\\r\\n}\\r\\n\\r\\n.row-end-4 {\\r\\n  grid-row-end: 4;\\r\\n}\\r\\n\\r\\n.row-span-4 {\\r\\n  grid-row: span 4;\\r\\n}\\r\\n\\r\\n.col-5 {\\r\\n  grid-column: span 5;\\r\\n}\\r\\n\\r\\n.col-start-5 {\\r\\n  grid-column-start: 5;\\r\\n}\\r\\n\\r\\n.col-end-5 {\\r\\n  grid-column-end: 5;\\r\\n}\\r\\n\\r\\n.row-start-5 {\\r\\n  grid-row-start: 5;\\r\\n}\\r\\n\\r\\n.row-end-5 {\\r\\n  grid-row-end: 5;\\r\\n}\\r\\n\\r\\n.row-span-5 {\\r\\n  grid-row: span 5;\\r\\n}\\r\\n\\r\\n.col-6 {\\r\\n  grid-column: span 6;\\r\\n}\\r\\n\\r\\n.col-start-6 {\\r\\n  grid-column-start: 6;\\r\\n}\\r\\n\\r\\n.col-end-6 {\\r\\n  grid-column-end: 6;\\r\\n}\\r\\n\\r\\n.row-start-6 {\\r\\n  grid-row-start: 6;\\r\\n}\\r\\n\\r\\n.row-end-6 {\\r\\n  grid-row-end: 6;\\r\\n}\\r\\n\\r\\n.row-span-6 {\\r\\n  grid-row: span 6;\\r\\n}\\r\\n\\r\\n.col-7 {\\r\\n  grid-column: span 7;\\r\\n}\\r\\n\\r\\n.col-start-7 {\\r\\n  grid-column-start: 7;\\r\\n}\\r\\n\\r\\n.col-end-7 {\\r\\n  grid-column-end: 7;\\r\\n}\\r\\n\\r\\n.row-start-7 {\\r\\n  grid-row-start: 7;\\r\\n}\\r\\n\\r\\n.row-end-7 {\\r\\n  grid-row-end: 7;\\r\\n}\\r\\n\\r\\n.row-span-7 {\\r\\n  grid-row: span 7;\\r\\n}\\r\\n\\r\\n.col-8 {\\r\\n  grid-column: span 8;\\r\\n}\\r\\n\\r\\n.col-start-8 {\\r\\n  grid-column-start: 8;\\r\\n}\\r\\n\\r\\n.col-end-8 {\\r\\n  grid-column-end: 8;\\r\\n}\\r\\n\\r\\n.row-start-8 {\\r\\n  grid-row-start: 8;\\r\\n}\\r\\n\\r\\n.row-end-8 {\\r\\n  grid-row-end: 8;\\r\\n}\\r\\n\\r\\n.row-span-8 {\\r\\n  grid-row: span 8;\\r\\n}\\r\\n\\r\\n.col-9 {\\r\\n  grid-column: span 9;\\r\\n}\\r\\n\\r\\n.col-start-9 {\\r\\n  grid-column-start: 9;\\r\\n}\\r\\n\\r\\n.col-end-9 {\\r\\n  grid-column-end: 9;\\r\\n}\\r\\n\\r\\n.row-start-9 {\\r\\n  grid-row-start: 9;\\r\\n}\\r\\n\\r\\n.row-end-9 {\\r\\n  grid-row-end: 9;\\r\\n}\\r\\n\\r\\n.row-span-9 {\\r\\n  grid-row: span 9;\\r\\n}\\r\\n\\r\\n.col-10 {\\r\\n  grid-column: span 10;\\r\\n}\\r\\n\\r\\n.col-start-10 {\\r\\n  grid-column-start: 10;\\r\\n}\\r\\n\\r\\n.col-end-10 {\\r\\n  grid-column-end: 10;\\r\\n}\\r\\n\\r\\n.row-start-10 {\\r\\n  grid-row-start: 10;\\r\\n}\\r\\n\\r\\n.row-end-10 {\\r\\n  grid-row-end: 10;\\r\\n}\\r\\n\\r\\n.row-span-10 {\\r\\n  grid-row: span 10;\\r\\n}\\r\\n\\r\\n.col-11 {\\r\\n  grid-column: span 11;\\r\\n}\\r\\n\\r\\n.col-start-11 {\\r\\n  grid-column-start: 11;\\r\\n}\\r\\n\\r\\n.col-end-11 {\\r\\n  grid-column-end: 11;\\r\\n}\\r\\n\\r\\n.row-start-11 {\\r\\n  grid-row-start: 11;\\r\\n}\\r\\n\\r\\n.row-end-11 {\\r\\n  grid-row-end: 11;\\r\\n}\\r\\n\\r\\n.row-span-11 {\\r\\n  grid-row: span 11;\\r\\n}\\r\\n\\r\\n.col-12 {\\r\\n  grid-column: span 12;\\r\\n}\\r\\n\\r\\n.col-start-12 {\\r\\n  grid-column-start: 12;\\r\\n}\\r\\n\\r\\n.col-end-12 {\\r\\n  grid-column-end: 12;\\r\\n}\\r\\n\\r\\n.row-start-12 {\\r\\n  grid-row-start: 12;\\r\\n}\\r\\n\\r\\n.row-end-12 {\\r\\n  grid-row-end: 12;\\r\\n}\\r\\n\\r\\n.row-span-12 {\\r\\n  grid-row: span 12;\\r\\n}\\r\\n\\r\\n/* flex */\\r\\n.d-flex {\\r\\n  display: flex;\\r\\n  display: flex;\\r\\n  flex-basis: auto;\\r\\n  flex-grow: 1;\\r\\n}\\r\\n\\r\\n.flex-column {\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.flex-center {\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.justify-c-center {\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.align-i-center {\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.flex-rev-column {\\r\\n  flex-direction: column-reverse;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/grid.css?./node_modules/css-loader/dist/cjs.js??ref--4-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/css/main.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./src/css/main.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--4-1!./grid.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/css/grid.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--4-1!./switch.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/css/switch.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\n// Module\nexports.push([module.i, \"body {\\r\\n  margin: 0;\\r\\n  background-color: #fafafa;\\r\\n  height: 100vh;\\r\\n  font-family: \\\"Fira Sans\\\", sans-serif;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  width: 100%;\\r\\n  min-height: 55px;\\r\\n  background-color: #4da3ff !important;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);\\r\\n  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);\\r\\n  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  padding-left: 5px;\\r\\n}\\r\\n\\r\\n.container-search {\\r\\n  width: 100vw;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nli {\\r\\n  border-bottom: solid;\\r\\n  border-color: #212121;\\r\\n  padding: 4px;\\r\\n  font-size: 20px;\\r\\n  display: flex !important;\\r\\n  justify-content: space-between !important;\\r\\n}\\r\\n\\r\\n.h3-title {\\r\\n  margin: 0;\\r\\n  margin-left: 24px;\\r\\n}\\r\\n\\r\\n.main {\\r\\n  height: 75vh;\\r\\n  padding: 3%;\\r\\n  width: 80vw;\\r\\n  flex-grow: 0;\\r\\n}\\r\\n\\r\\n.flex-grow-0 {\\r\\n  flex-grow: 0;\\r\\n}\\r\\n\\r\\n.d-none {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.results-cont {\\r\\n  flex-grow: 0;\\r\\n  width: 325px;\\r\\n}\\r\\n\\r\\n.searchbar {\\r\\n  height: 35px;\\r\\n  width: 300px;\\r\\n  border: 1px solid white;\\r\\n  border-bottom-color: #212121;\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.searchbar:focus {\\r\\n  outline: #8bc34a auto 1px;\\r\\n  border-style: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  background-color: #fafafa;\\r\\n  border-style: none;\\r\\n  font-size: 23px;\\r\\n  position: relative;\\r\\n  left: 25px;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.img-style {\\r\\n  -webkit-user-select: none;\\r\\n  margin: auto 0 auto 0;\\r\\n}\\r\\n\\r\\n.justify-c-between {\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/main.css?./node_modules/css-loader/dist/cjs.js??ref--4-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/css/switch.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./src/css/switch.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".onoffswitch {\\r\\n  position: relative;\\r\\n  width: 90px;\\r\\n  margin-top: 20px;\\r\\n  -webkit-user-select: none;\\r\\n  -moz-user-select: none;\\r\\n  -ms-user-select: none;\\r\\n}\\r\\n\\r\\n.onoffswitch-checkbox {\\r\\n  position: absolute;\\r\\n  opacity: 0;\\r\\n  pointer-events: none;\\r\\n}\\r\\n\\r\\n.onoffswitch-label {\\r\\n  display: block;\\r\\n  overflow: hidden;\\r\\n  cursor: pointer;\\r\\n  border: 2px solid #999999;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.onoffswitch-inner {\\r\\n  display: block;\\r\\n  width: 200%;\\r\\n  margin-left: -100%;\\r\\n  transition: margin 0.3s ease-in 0s;\\r\\n}\\r\\n\\r\\n.onoffswitch-inner:before,\\r\\n.onoffswitch-inner:after {\\r\\n  display: block;\\r\\n  float: left;\\r\\n  width: 50%;\\r\\n  height: 30px;\\r\\n  padding: 0;\\r\\n  line-height: 30px;\\r\\n  font-size: 20px;\\r\\n  color: white;\\r\\n  font-family: Trebuchet, Arial, sans-serif;\\r\\n  font-weight: bold;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.onoffswitch-inner:before {\\r\\n  content: \\\"ºF\\\";\\r\\n  padding-left: 26px;\\r\\n  background-color: #007bff;\\r\\n  border-color: #007bff;\\r\\n  color: #ffffff;\\r\\n}\\r\\n\\r\\n.onoffswitch-inner:after {\\r\\n  content: \\\"ºC\\\";\\r\\n  padding-right: 26px;\\r\\n  background-color: #007bff;\\r\\n  border-color: #007bff;\\r\\n  color: #fafafa;\\r\\n  text-align: right;\\r\\n}\\r\\n\\r\\n.onoffswitch-switch {\\r\\n  display: block;\\r\\n  width: 18px;\\r\\n  margin: 6px;\\r\\n  background: #ffffff;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  bottom: 8px;\\r\\n  right: 56px;\\r\\n  border: 2px solid #999999;\\r\\n  border-radius: 20px;\\r\\n  transition: all 0.3s ease-in 0s;\\r\\n}\\r\\n\\r\\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\\r\\n  margin-left: 0;\\r\\n}\\r\\n\\r\\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\\r\\n  right: 0px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/switch.css?./node_modules/css-loader/dist/cjs.js??ref--4-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--4-1!./main.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/css/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/dataplacement.js":
/*!******************************!*\
  !*** ./src/dataplacement.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return htmlManipulation; });\n/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query */ \"./src/query.js\");\n/* eslint-disable no-restricted-syntax, guard-for-in */\r\n\r\n\r\nconst htmlManipulation = (() => {\r\n  const buttonSearch = document.getElementById('buttonsearch');\r\n  const searchBar = document.getElementById('searchbar');\r\n  const location = document.getElementById('header-1');\r\n  const imgLink = document.getElementById('img-weather');\r\n  let value = '';\r\n\r\n  const drawResult = (data) => {\r\n    location.innerHTML = `${data.name}`;\r\n    let i = 0;\r\n    for (const key in data.main) {\r\n      document.getElementById(`span-${i}`).innerHTML = `${data.main[key]}`;\r\n      imgLink.src =\r\n        `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;\r\n      if (i < 4) {\r\n        document.getElementById(`span-${i}`).innerHTML += '&nbsp;°';\r\n      }\r\n      i += 1;\r\n      if (i === 6) {\r\n        break;\r\n      }\r\n    }\r\n  };\r\n\r\n  function getData() {\r\n    value = searchBar.value.trim().split(',');\r\n    _query__WEBPACK_IMPORTED_MODULE_0__[\"default\"].querySearch(value[0], value[1]).then((response) => {\r\n      if (response.cod === 200) {\r\n        drawResult(response);\r\n      } else {\r\n        location.innerHTML = response.message;\r\n      }\r\n    });\r\n  }\r\n\r\n  const buttonInit = () => {\r\n    buttonSearch.addEventListener('click', () => {\r\n      getData();\r\n    });\r\n    document.querySelector('.onoffswitch-label').addEventListener('click', () => {\r\n      _query__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleUnit();\r\n      _query__WEBPACK_IMPORTED_MODULE_0__[\"default\"].querySearch(value[0], value[1]).then((response) => {\r\n        if (response) {\r\n          drawResult(response);\r\n        }\r\n      });\r\n    });\r\n  };\r\n\r\n  const searchbarInit = () => {\r\n    searchBar.addEventListener('keypress', (e) => {\r\n      if (e.keyCode === 13) {\r\n        getData();\r\n      }\r\n    });\r\n  };\r\n\r\n  const init = () => {\r\n    buttonInit();\r\n    searchbarInit();\r\n  };\r\n\r\n  return {\r\n    init,\r\n  };\r\n})();\r\n\r\n\n\n//# sourceURL=webpack:///./src/dataplacement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dataplacement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataplacement */ \"./src/dataplacement.js\");\n\r\n\r\n\r\nconst init = () => {\r\n  _dataplacement__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\r\n};\r\n\r\nwindow.onload = init();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/query.js":
/*!**********************!*\
  !*** ./src/query.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return queryWeather; });\nconst queryWeather = (function factory() {\r\n  const http = 'https://api.openweathermap.org/data/2.5/weather?q=';\r\n  const apiKey = '&appid=8a337fa287e25404c5043b8a8eb17d4a';\r\n  let defaultUnit = 'imperial';\r\n\r\n  const querySearch = async (city, country) => {\r\n    const response = '';\r\n    if ((city !== undefined || country !== undefined)) {\r\n      const raw = await fetch(`${http}${city},${country}${apiKey}&units=${defaultUnit}`, {\r\n        mode: 'cors',\r\n      });\r\n      const response = await raw.json();\r\n      return response;\r\n    }\r\n    return response;\r\n  };\r\n\r\n  const toggleUnit = () => {\r\n    if (defaultUnit === 'metric') {\r\n      defaultUnit = 'imperial';\r\n    } else {\r\n      defaultUnit = 'metric';\r\n    }\r\n  };\r\n\r\n  return {\r\n    querySearch,\r\n    toggleUnit,\r\n  };\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/query.js?");

/***/ })

/******/ });