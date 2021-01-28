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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".grid-template {\\n  display: grid;\\n  grid-template-columns: repeat(12, 1fr);\\n  grid-gap: 1%;\\n}\\n\\n.row {\\n  grid-column: span 12;\\n}\\n\\n.col-place-center {\\n  place-self: center;\\n}\\n\\n.col-1 {\\n  grid-column: span 1;\\n}\\n\\n.col-start-1 {\\n  grid-column-start: 1;\\n}\\n\\n.col-end-1 {\\n  grid-column-end: 1;\\n}\\n\\n.row-start-1 {\\n  grid-row-start: 1;\\n}\\n\\n.row-end-1 {\\n  grid-row-end: 1;\\n}\\n\\n.row-span-1 {\\n  grid-row: span 1;\\n}\\n\\n.col-2 {\\n  grid-column: span 2;\\n}\\n\\n.col-start-2 {\\n  grid-column-start: 2;\\n}\\n\\n.col-end-2 {\\n  grid-column-end: 2;\\n}\\n\\n.row-start-2 {\\n  grid-row-start: 2;\\n}\\n\\n.row-end-2 {\\n  grid-row-end: 2;\\n}\\n\\n.row-span-2 {\\n  grid-row: span 2;\\n}\\n\\n.col-3 {\\n  grid-column: span 3;\\n}\\n\\n.col-start-3 {\\n  grid-column-start: 3;\\n}\\n\\n.col-end-3 {\\n  grid-column-end: 3;\\n}\\n\\n.row-start-3 {\\n  grid-row-start: 3;\\n}\\n\\n.row-end-3 {\\n  grid-row-end: 3;\\n}\\n\\n.row-span-3 {\\n  grid-row: span 3;\\n}\\n\\n.col-4 {\\n  grid-column: span 4;\\n}\\n\\n.col-start-4 {\\n  grid-column-start: 4;\\n}\\n\\n.col-end-4 {\\n  grid-column-end: 4;\\n}\\n\\n.row-start-4 {\\n  grid-row-start: 4;\\n}\\n\\n.row-end-4 {\\n  grid-row-end: 4;\\n}\\n\\n.row-span-4 {\\n  grid-row: span 4;\\n}\\n\\n.col-5 {\\n  grid-column: span 5;\\n}\\n\\n.col-start-5 {\\n  grid-column-start: 5;\\n}\\n\\n.col-end-5 {\\n  grid-column-end: 5;\\n}\\n\\n.row-start-5 {\\n  grid-row-start: 5;\\n}\\n\\n.row-end-5 {\\n  grid-row-end: 5;\\n}\\n\\n.row-span-5 {\\n  grid-row: span 5;\\n}\\n\\n.col-6 {\\n  grid-column: span 6;\\n}\\n\\n.col-start-6 {\\n  grid-column-start: 6;\\n}\\n\\n.col-end-6 {\\n  grid-column-end: 6;\\n}\\n\\n.row-start-6 {\\n  grid-row-start: 6;\\n}\\n\\n.row-end-6 {\\n  grid-row-end: 6;\\n}\\n\\n.row-span-6 {\\n  grid-row: span 6;\\n}\\n\\n.col-7 {\\n  grid-column: span 7;\\n}\\n\\n.col-start-7 {\\n  grid-column-start: 7;\\n}\\n\\n.col-end-7 {\\n  grid-column-end: 7;\\n}\\n\\n.row-start-7 {\\n  grid-row-start: 7;\\n}\\n\\n.row-end-7 {\\n  grid-row-end: 7;\\n}\\n\\n.row-span-7 {\\n  grid-row: span 7;\\n}\\n\\n.col-8 {\\n  grid-column: span 8;\\n}\\n\\n.col-start-8 {\\n  grid-column-start: 8;\\n}\\n\\n.col-end-8 {\\n  grid-column-end: 8;\\n}\\n\\n.row-start-8 {\\n  grid-row-start: 8;\\n}\\n\\n.row-end-8 {\\n  grid-row-end: 8;\\n}\\n\\n.row-span-8 {\\n  grid-row: span 8;\\n}\\n\\n.col-9 {\\n  grid-column: span 9;\\n}\\n\\n.col-start-9 {\\n  grid-column-start: 9;\\n}\\n\\n.col-end-9 {\\n  grid-column-end: 9;\\n}\\n\\n.row-start-9 {\\n  grid-row-start: 9;\\n}\\n\\n.row-end-9 {\\n  grid-row-end: 9;\\n}\\n\\n.row-span-9 {\\n  grid-row: span 9;\\n}\\n\\n.col-10 {\\n  grid-column: span 10;\\n}\\n\\n.col-start-10 {\\n  grid-column-start: 10;\\n}\\n\\n.col-end-10 {\\n  grid-column-end: 10;\\n}\\n\\n.row-start-10 {\\n  grid-row-start: 10;\\n}\\n\\n.row-end-10 {\\n  grid-row-end: 10;\\n}\\n\\n.row-span-10 {\\n  grid-row: span 10;\\n}\\n\\n.col-11 {\\n  grid-column: span 11;\\n}\\n\\n.col-start-11 {\\n  grid-column-start: 11;\\n}\\n\\n.col-end-11 {\\n  grid-column-end: 11;\\n}\\n\\n.row-start-11 {\\n  grid-row-start: 11;\\n}\\n\\n.row-end-11 {\\n  grid-row-end: 11;\\n}\\n\\n.row-span-11 {\\n  grid-row: span 11;\\n}\\n\\n.col-12 {\\n  grid-column: span 12;\\n}\\n\\n.col-start-12 {\\n  grid-column-start: 12;\\n}\\n\\n.col-end-12 {\\n  grid-column-end: 12;\\n}\\n\\n.row-start-12 {\\n  grid-row-start: 12;\\n}\\n\\n.row-end-12 {\\n  grid-row-end: 12;\\n}\\n\\n.row-span-12 {\\n  grid-row: span 12;\\n}\\n\\n/* flex */\\n.d-flex {\\n  display: flex;\\n  display: flex;\\n  flex-basis: auto;\\n  flex-grow: 1;\\n}\\n\\n.flex-column {\\n  flex-direction: column;\\n}\\n\\n.flex-center {\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.justify-c-center {\\n  justify-content: center;\\n}\\n\\n.align-i-center {\\n  align-items: center;\\n}\\n\\n.flex-rev-column {\\n  flex-direction: column-reverse;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/grid.css?./node_modules/css-loader/dist/cjs.js??ref--4-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/css/main.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./src/css/main.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--4-1!./grid.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/css/grid.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--4-1!./switch.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/css/switch.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,100);\"]);\n// Module\nexports.push([module.i, \"body {\\n  margin: 0;\\n  background-color: #fafafa;\\n  height: 100vh;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  background-color: #3F51B5;\\n}\\n\\n.transparent {\\n  background-color: transparent; \\n}\\n\\n\\n.search {\\n  font: 400 1rem 'Roboto';\\n  letter-spacing: 0.025em;\\n  color: white;\\n  height: 45px;\\n  border: none;\\n  font-width: thin;\\n  float: left;\\n  width: 380px;\\n  border-bottom: solid thin white;\\n  color: #E8E8E8;\\n  color: rgba(255, 255, 255, 0.7);\\n  margin-right: 10px;\\n}\\n\\n.text {\\n  color: white;\\n  font: 400 1rem 'Roboto';\\n  letter-spacing: 0.025em;\\n  text-transform: uppercase;\\n}\\n\\n.temp {\\n  font-size: 8em;\\n  font-weight: 300;\\n  line-height: 0.75;\\n  margin-right: 5px;\\n}\\n\\n.tempbox {\\n  margin-right: 45px;\\n\\n}\\n\\n.display {\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n.button {\\n  height: 45px;\\n  margin: 1em 0 4em;\\n  padding: 0;\\n  font: 400 1.1rem 'Roboto';\\n  letter-spacing: 0.025em;\\n  text-transform: uppercase;\\n  color: #FFFFFF;\\n  border: none;\\n}\\n\\nheader {\\n  width: 100%;\\n  min-height: 55px;\\n  background-color: #4da3ff !important;\\n  position: absolute;\\n  top: 0;\\n  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);\\n  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);\\n  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);\\n}\\n\\nh3 {\\n  padding-left: 5px;\\n}\\n\\n.container-search {\\n  width: 100vw;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\nul {\\n  list-style: none;\\n  padding: 0;\\n}\\n\\nli {\\n  border-bottom: thin;\\n  border-color: rgba(255, 255, 255, 0.6);\\n  padding: 4px;\\n  opacity: 0.7;\\n  font-size: 20px;\\n  display: flex !important;\\n  justify-content: space-between !important;\\n  text-align: right;\\n}\\n\\n.li {\\n font-size: 14px;\\n color: rbg(255,255,255);\\n opacity: 0.5;\\n}\\n\\n\\n.main {\\n  width: 480px;\\n}\\n\\n.flex-grow-0 {\\n  flex-grow: 0;\\n}\\n\\n.d-none {\\n  display: none;\\n}\\n\\n.results-cont {\\n  flex-grow: 0;\\n  width: 325px;\\n}\\n\\n.searchbar {\\n  height: 35px;\\n  width: 300px;\\n  border: 1px solid white;\\n  border-bottom-color: #212121;\\n  font-size: 25px;\\n}\\n\\n.searchbar:focus {\\n  outline: #8bc34a auto 1px;\\n  border-style: none;\\n}\\n\\nbutton {\\n  background-color: #fafafa;\\n  border-style: none;\\n  font-size: 26px;\\n  position: relative;\\n  left: 25px;\\n}\\n\\nbutton:hover {\\n  cursor: pointer;\\n}\\n\\n.img-style {\\n  -webkit-user-select: none;\\n  margin: auto 0 auto 0;\\n}\\n\\n.justify-c-between {\\n  justify-content: space-between;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/main.css?./node_modules/css-loader/dist/cjs.js??ref--4-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/css/switch.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./src/css/switch.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".onoffswitch {\\n  position: relative;\\n  width: 90px;\\n  margin-top: 20px;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n}\\n\\n.onoffswitch-checkbox {\\n  position: absolute;\\n  opacity: 0;\\n  pointer-events: none;\\n}\\n\\n.onoffswitch-label {\\n  display: block;\\n  overflow: hidden;\\n  cursor: pointer;\\n  border: 2px solid #999999;\\n  border-radius: 20px;\\n}\\n\\n.onoffswitch-inner {\\n  display: block;\\n  width: 200%;\\n  margin-left: -100%;\\n  transition: margin 0.3s ease-in 0s;\\n}\\n\\n.onoffswitch-inner:before,\\n.onoffswitch-inner:after {\\n  display: block;\\n  float: left;\\n  width: 50%;\\n  height: 30px;\\n  padding: 0;\\n  line-height: 30px;\\n  font-size: 20px;\\n  color: white;\\n  font-family: Trebuchet, Arial, sans-serif;\\n  font-weight: bold;\\n  box-sizing: border-box;\\n}\\n\\n.onoffswitch-inner:before {\\n  content: \\\"ºF\\\";\\n  padding-left: 26px;\\n  background-color: #007bff;\\n  border-color: #007bff;\\n  color: #ffffff;\\n}\\n\\n.onoffswitch-inner:after {\\n  content: \\\"ºC\\\";\\n  padding-right: 26px;\\n  background-color: #007bff;\\n  border-color: #007bff;\\n  color: #fafafa;\\n  text-align: right;\\n}\\n\\n.onoffswitch-switch {\\n  display: block;\\n  width: 18px;\\n  margin: 6px;\\n  background: #ffffff;\\n  position: absolute;\\n  top: 0;\\n  bottom: 8px;\\n  right: 56px;\\n  border: 2px solid #999999;\\n  border-radius: 20px;\\n  transition: all 0.3s ease-in 0s;\\n}\\n\\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\\n  margin-left: 0;\\n}\\n\\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\\n  right: 0px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/switch.css?./node_modules/css-loader/dist/cjs.js??ref--4-1");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return htmlManipulation; });\n/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query */ \"./src/query.js\");\n/* eslint-disable no-restricted-syntax, guard-for-in */\n\n\nconst htmlManipulation = (() => {\n  const buttonSearch = document.getElementById('buttonsearch');\n  const searchBar = document.getElementById('searchbar');\n  const location = document.getElementById('header-1');\n  const imgLink = document.getElementById('image-weather'); // image\n  let value = '';\n\n  const drawResult = (data) => {\n    location.innerHTML = `${data.name}`;\n    let i = 0;\n    for (const key in data.main) {\n      document.getElementById(`span-${i}`).innerHTML = `${data.main[key]}`;\n      imgLink.src =\n        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;\n      if (i < 4) {\n        document.getElementById(`span-${i}`).innerHTML += '&nbsp;°';\n      }\n      i += 1;\n      if (i === 6) {\n        break;\n      }\n    }\n  };\n\n  function getData() {\n    value = searchBar.value.trim().split(',');\n    _query__WEBPACK_IMPORTED_MODULE_0__[\"default\"].querySearch(value[0], value[1]).then((response) => {\n      console.log(response);\n      console.log('asdasd');\n      if (response.cod === 200) {\n        drawResult(response);\n      } else {\n        location.innerHTML = response.message;\n      }\n    });\n  }\n\n  const buttonInit = () => {\n    buttonSearch.addEventListener('click', () => {\n      getData();\n    });\n    document.getElementById('switch').addEventListener('click', () => {\n      _query__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleUnit();\n      _query__WEBPACK_IMPORTED_MODULE_0__[\"default\"].querySearch(value[0], value[1]).then((response) => {\n        if (response) {\n          drawResult(response);\n        }\n      });\n    });\n  };\n\n  const searchbarInit = () => {\n    searchBar.addEventListener('keypress', (e) => {\n      if (e.keyCode === 13) {\n        getData();\n      }\n    });\n  };\n\n  const init = () => {\n    buttonInit();\n    searchbarInit();\n  };\n\n  return {\n    init,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/dataplacement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dataplacement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataplacement */ \"./src/dataplacement.js\");\n\n\n\nconst init = () => {\n  _dataplacement__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n};\n\nwindow.onload = init();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/query.js":
/*!**********************!*\
  !*** ./src/query.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return queryWeather; });\nconst queryWeather = (function factory() {\n  const http = 'https://api.openweathermap.org/data/2.5/weather?q=';\n  const apiKey = '&appid=8a337fa287e25404c5043b8a8eb17d4a';\n  let defaultUnit = 'imperial';\n\n  const querySearch = async (city, country) => {\n    const response = '';\n    if ((city !== undefined || country !== undefined)) {\n      const raw = await fetch(`${http}${city},${country}${apiKey}&units=${defaultUnit}`, {\n        mode: 'cors',\n      });\n      const response = await raw.json();\n      console.log(response);\n      return response;\n    }\n    return response;\n  };\n\n  const toggleUnit = () => {\n    if (defaultUnit === 'metric') {\n      defaultUnit = 'imperial';\n    } else {\n      defaultUnit = 'metric';\n    }\n  };\n\n  return {\n    querySearch,\n    toggleUnit,\n  };\n}());\n\n\n\n\n//# sourceURL=webpack:///./src/query.js?");

/***/ })

/******/ });