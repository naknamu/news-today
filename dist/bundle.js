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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nhtml, body{\\r\\n    height: 100vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    font-family: 'Roboto', sans-serif;;\\r\\n    background-color: #e2e8f0;\\r\\n}\\r\\n\\r\\nheader {\\r\\n    font-family: 'Blaka Ink', cursive;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding: 12px;\\r\\n    gap: 8px;\\r\\n}\\r\\n\\r\\nheader h1 {\\r\\n    font-size: 35px;\\r\\n}\\r\\n\\r\\nheader input[type=search]{\\r\\n    padding: 8px 16px;\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    font-size: 16px;\\r\\n    width: 100%;\\r\\n    border: none;\\r\\n    border-radius: 8px;\\r\\n}\\r\\n\\r\\nheader input[type=search]:focus{\\r\\n    /* border: none; */\\r\\n    outline: none;\\r\\n    border: 1px solid orange;\\r\\n}\\r\\n\\r\\nheader .searchbar{\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.content{\\r\\n    padding: 12px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 12px;\\r\\n}\\r\\n\\r\\n.card {\\r\\n    background-color: white;\\r\\n    border-radius: 8px;\\r\\n    width: 100%;\\r\\n    display: grid;\\r\\n}\\r\\n\\r\\n.card:hover{\\r\\n    transform: translateY(-4px);\\r\\n    box-shadow: rgba(0, 0, 0, 0.16) 5px 5px 5px 5px;\\r\\n}\\r\\n\\r\\n.card img {\\r\\n    width: 100%;\\r\\n    height: auto;\\r\\n    border-top-right-radius: 8px;\\r\\n    border-top-left-radius: 8px;\\r\\n}\\r\\n\\r\\n.video{\\r\\n    width: 100%;\\r\\n    height: auto;\\r\\n    border-top-right-radius: 8px;\\r\\n    border-top-left-radius: 8px;\\r\\n}\\r\\n\\r\\n.headline, .details, .wrapper{\\r\\n    padding: 8px;\\r\\n}\\r\\n\\r\\n.headline{\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\n.details{ \\r\\n    font-size: 12px;\\r\\n    color: gray;\\r\\n}\\r\\n\\r\\n.wrapper{\\r\\n    display: flex;\\r\\n    font-size: 12px;\\r\\n    gap: 8px;\\r\\n    margin-bottom: 5px;\\r\\n}\\r\\n\\r\\nfooter{\\r\\n    font-family: Georgia, 'Times New Roman', Times, serif;\\r\\n    font-size: 16px;\\r\\n    padding: 12px;\\r\\n    color: gray;\\r\\n}\\r\\n\\r\\n/*LOADING ANIMATION*/\\r\\n.ring\\r\\n{\\r\\n  position:absolute;\\r\\n  top:50%;\\r\\n  left:50%;\\r\\n  transform:translate(-50%,-50%);\\r\\n  width:150px;\\r\\n  height:150px;\\r\\n  background:transparent;\\r\\n  border:3px solid #3c3c3c;\\r\\n  border-radius:50%;\\r\\n  text-align:center;\\r\\n  line-height:150px;\\r\\n  font-family:sans-serif;\\r\\n  font-size:20px;\\r\\n  color: gray;\\r\\n  letter-spacing:4px;\\r\\n  text-transform:uppercase;\\r\\n  text-shadow:0 0 10px gray;\\r\\n  box-shadow:0 0 20px rgba(0,0,0,.5);\\r\\n}\\r\\n.ring:before\\r\\n{\\r\\n  content:'';\\r\\n  position:absolute;\\r\\n  top:-3px;\\r\\n  left:-3px;\\r\\n  width:100%;\\r\\n  height:100%;\\r\\n  border:3px solid transparent;\\r\\n  border-top:3px solid gray;\\r\\n  border-right:3px solid gray;\\r\\n  border-radius:50%;\\r\\n  animation:animateC 2s linear infinite;\\r\\n}\\r\\nspan\\r\\n{\\r\\n  display:block;\\r\\n  position:absolute;\\r\\n  top:calc(50% - 2px);\\r\\n  left:50%;\\r\\n  width:50%;\\r\\n  height:4px;\\r\\n  background:transparent;\\r\\n  transform-origin:left;\\r\\n  animation:animate 2s linear infinite;\\r\\n}\\r\\nspan:before\\r\\n{\\r\\n  content:'';\\r\\n  position:absolute;\\r\\n  width:16px;\\r\\n  height:16px;\\r\\n  border-radius:50%;\\r\\n  background:gray;\\r\\n  top:-6px;\\r\\n  right:-8px;\\r\\n  box-shadow:0 0 20px gray;\\r\\n}\\r\\n@keyframes animateC\\r\\n{\\r\\n  0%\\r\\n  {\\r\\n    transform:rotate(0deg);\\r\\n  }\\r\\n  100%\\r\\n  {\\r\\n    transform:rotate(360deg);\\r\\n  }\\r\\n}\\r\\n@keyframes animate\\r\\n{\\r\\n  0%\\r\\n  {\\r\\n    transform:rotate(45deg);\\r\\n  }\\r\\n  100%\\r\\n  {\\r\\n    transform:rotate(405deg);\\r\\n  }\\r\\n}\\r\\n\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://news_today/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://news_today/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://news_today/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://news_today/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://news_today/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://news_today/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://news_today/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://news_today/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://news_today/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://news_today/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/create-card.js":
/*!****************************!*\
  !*** ./src/create-card.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**Function to CREATE NEWS CARD DYNAMICALLY **/\nlet createCard = (\n  link,\n  image_source,\n  headline_text,\n  details_text,\n  publisher_text,\n  date_text\n) => {\n  const content = document.querySelector(\".content\");\n  //create card\n  const card = document.createElement(\"div\");\n  content.appendChild(card);\n  card.classList.add(\"card\");\n  card.addEventListener(\"click\", () => {\n    console.log(\"im clicked!\");\n    window.open(link, \"_blank\").focus();\n  });\n  //create video or image\n  if (image_source !== null && image_source !== undefined) {\n    //video\n    if (image_source.includes(\".mp4\")) {\n      console.log(\"this link is not an image!\");\n      const video = document.createElement(\"video\");\n      card.appendChild(video);\n      video.src = image_source;\n      video.setAttribute(\"controls\", \"controls\");\n      video.classList.add('video');\n      //image\n    } else {\n      const img = document.createElement(\"img\");\n      img.src = image_source;\n      card.appendChild(img);\n    }\n  }\n  //create headline\n  const headline = document.createElement(\"div\");\n  headline.textContent = headline_text;\n  card.appendChild(headline);\n  headline.classList.add(\"headline\");\n  //create details\n  const details = document.createElement(\"div\");\n  details.textContent = details_text;\n  card.appendChild(details);\n  details.classList.add(\"details\");\n  //create wrapper for publisher and date\n  const wrapper = document.createElement(\"div\");\n  card.appendChild(wrapper);\n  wrapper.classList.add(\"wrapper\");\n  //create publisher\n  const publisher = document.createElement(\"div\");\n  publisher.textContent = publisher_text;\n  publisher.classList.add(\"publisher\");\n  wrapper.appendChild(publisher);\n  //create separation dot\n  const dot = document.createElement(\"div\");\n  dot.textContent = \"•\";\n  wrapper.appendChild(dot);\n  //create date\n  const date = document.createElement(\"div\");\n  date.textContent = date_text;\n  date.classList.add(\"date\");\n  wrapper.appendChild(date);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCard);\n\n\n//# sourceURL=webpack://news_today/./src/create-card.js?");

/***/ }),

/***/ "./src/create-emptyMessage.js":
/*!************************************!*\
  !*** ./src/create-emptyMessage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _astro_skull_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./astro_skull.png */ \"./src/astro_skull.png\");\n\n\nlet createEmptyMessage = (content) => {\n  content.textContent = '';\n  //text message\n  const newText = document.createElement(\"div\");\n  newText.textContent = \"There seems to be nothing here...\";\n  newText.style.color = \"gray\";\n  content.appendChild(newText);\n  //image\n  const newImage = document.createElement(\"img\");\n  newImage.src = _astro_skull_png__WEBPACK_IMPORTED_MODULE_0__;\n  content.appendChild(newImage);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEmptyMessage);\n\n\n//# sourceURL=webpack://news_today/./src/create-emptyMessage.js?");

/***/ }),

/***/ "./src/loading.js":
/*!************************!*\
  !*** ./src/loading.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createLoadingAnimation\": () => (/* binding */ createLoadingAnimation),\n/* harmony export */   \"deleteLoadingAnimation\": () => (/* binding */ deleteLoadingAnimation)\n/* harmony export */ });\n//FUNCTION CREATING LOADING ANIMATION\r\nlet createLoadingAnimation = (content) => {\r\n    console.log(\"loading screen!\");\r\n    //create ring div\r\n    const ring = document.createElement(\"div\");\r\n    ring.classList.add(\"ring\");\r\n    content.appendChild(ring);\r\n    ring.textContent = \"Loading\";\r\n    //create child span\r\n    const span = document.createElement(\"span\");\r\n    ring.appendChild(span);\r\n  };\r\n  \r\n  //DELETE LOADING ANIMATION\r\n  let deleteLoadingAnimation = () => {\r\n    const ring = document.querySelector(\".ring\");\r\n    ring.remove();\r\n  };\r\n\r\n\n\n//# sourceURL=webpack://news_today/./src/loading.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _create_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-card */ \"./src/create-card.js\");\n/* harmony import */ var _create_emptyMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-emptyMessage */ \"./src/create-emptyMessage.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ \"./src/loading.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n\n\n\n\n\n\n/**Locate main div content in DOM*/\nconst content = document.querySelector(\".content\");\n\n//**FETCH DATA FROM NEWS API */\nasync function fetchNewsAPIOrg(url_news) {\n  //showing loading animation\n  (0,_loading__WEBPACK_IMPORTED_MODULE_3__.createLoadingAnimation)(content);\n\n  const response = await fetch(url_news, { mode: \"cors\" });\n  const newsData = await response.json();\n\n  if (newsData.results.length === 0) {\n    //show a message if search is empty\n    (0,_create_emptyMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n  } else {\n    //otherwise delete loading animation\n    (0,_loading__WEBPACK_IMPORTED_MODULE_3__.deleteLoadingAnimation)();\n    //get data from NEWS API and create HTML news card elements\n    getDataFromNewsAPIOrg(newsData);\n  }\n\n  return newsData;\n}\n\n/*SUBSTITUTE VALUE FROM API DATA TO CREATE DOM ELEMENTS**/\nlet getDataFromNewsAPIOrg = (response) => {\n  for (let i = 0; i < response.results.length; i++) {\n    //substitute data value to object array\n    _variables__WEBPACK_IMPORTED_MODULE_4__.news.link[i] = response.results[i].link;\n    _variables__WEBPACK_IMPORTED_MODULE_4__.news.image[i] = response.results[i].image_url;\n    _variables__WEBPACK_IMPORTED_MODULE_4__.news.title[i] = response.results[i].title;\n    _variables__WEBPACK_IMPORTED_MODULE_4__.news.description[i] = response.results[i].description;\n    _variables__WEBPACK_IMPORTED_MODULE_4__.news.publisher[i] = response.results[i].source_id;\n    _variables__WEBPACK_IMPORTED_MODULE_4__.news.pubDate[i] = response.results[i].pubDate;\n    //call create card for each news article\n    (0,_create_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n      _variables__WEBPACK_IMPORTED_MODULE_4__.news.link[i],\n      _variables__WEBPACK_IMPORTED_MODULE_4__.news.image[i],\n      _variables__WEBPACK_IMPORTED_MODULE_4__.news.title[i],\n      _variables__WEBPACK_IMPORTED_MODULE_4__.news.description[i],\n      _variables__WEBPACK_IMPORTED_MODULE_4__.news.publisher[i],\n      _variables__WEBPACK_IMPORTED_MODULE_4__.news.pubDate[i]\n    );\n  }\n};\n\n/**WHEN WINDOW IS FIRST LOADED, THIS FUNCTION IS CALLED */\nwindow.onload = () => {\n  /**NEWS API ORG */\n  Promise.all([\n    //default news that will be loaded will be from top news\n    fetchNewsAPIOrg(_variables__WEBPACK_IMPORTED_MODULE_4__.url_news_four),\n  ]);\n};\n\n/*Using search functionality*/\nlet search_input;\nconst search = document.querySelector(\"#search\");\n\nsearch.addEventListener(\"keypress\", (e) => {\n    if (e.keyCode === 13 && search.value !== \"\") {\n      console.log(\"search started!\");\n      //clear content\n      content.textContent = \"\";\n      search_input = search.value;\n      let url_news_query =\n        \"https://newsdata.io/api/1/news?apikey=\" +\n        _variables__WEBPACK_IMPORTED_MODULE_4__.api_key.newsapiorg +\n        \"&language=\" +\n        _variables__WEBPACK_IMPORTED_MODULE_4__.language +\n        \"&q=\" +\n        search_input;\n      fetchNewsAPIOrg(url_news_query);\n    }\n  });\n\n\n//# sourceURL=webpack://news_today/./src/script.js?");

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api_key\": () => (/* binding */ api_key),\n/* harmony export */   \"category\": () => (/* binding */ category),\n/* harmony export */   \"chooseCategory\": () => (/* binding */ chooseCategory),\n/* harmony export */   \"language\": () => (/* binding */ language),\n/* harmony export */   \"news\": () => (/* binding */ news),\n/* harmony export */   \"url_news_five\": () => (/* binding */ url_news_five),\n/* harmony export */   \"url_news_four\": () => (/* binding */ url_news_four),\n/* harmony export */   \"url_news_one\": () => (/* binding */ url_news_one),\n/* harmony export */   \"url_news_random\": () => (/* binding */ url_news_random),\n/* harmony export */   \"url_news_three\": () => (/* binding */ url_news_three),\n/* harmony export */   \"url_news_two\": () => (/* binding */ url_news_two)\n/* harmony export */ });\nlet api_key = {\n  newsapiorg: \"pub_1145725872fd78d5a00ae0ad5fc25d8f4c3b4\",\n};\n\nlet news = {\n  link: [],\n  image: [],\n  title: [],\n  description: [],\n  publisher: [],\n  pubDate: [],\n};\n\nlet language = \"en\";\n\nlet chooseCategory = () => {\n  let random_number = Math.floor(Math.random() * 6);\n  // console.log(random_number);\n  switch (random_number) {\n    case 0:\n      return category.zero;\n    case 1:\n      return category.one;\n    case 2:\n      return category.two;\n    case 3:\n      return category.three;\n    case 4:\n      return category.four;\n    case 5:\n      return category.five;\n  }\n};\n\nlet category = {\n  zero: \"entertainment\",\n  one: \"environment\",\n  two: \"food\",\n  three: \"sports\",\n  four: \"top\",\n  five: \"world\",\n};\n\nlet url_news_zero =\n  \"https://newsdata.io/api/1/news?apikey=\" +\n  api_key.newsapiorg +\n  \"&language=\" +\n  language +\n  \"&category=\" +\n  category.zero;\n\nlet url_news_one =\n  \"https://newsdata.io/api/1/news?apikey=\" +\n  api_key.newsapiorg +\n  \"&language=\" +\n  language +\n  \"&category=\" +\n  category.one;\n\nlet url_news_two =\n  \"https://newsdata.io/api/1/news?apikey=\" +\n  api_key.newsapiorg +\n  \"&language=\" +\n  language +\n  \"&category=\" +\n  category.two;\n\nlet url_news_three =\n  \"https://newsdata.io/api/1/news?apikey=\" +\n  api_key.newsapiorg +\n  \"&language=\" +\n  language +\n  \"&category=\" +\n  category.three;\n\nlet url_news_four =\n  \"https://newsdata.io/api/1/news?apikey=\" +\n  api_key.newsapiorg +\n  \"&language=\" +\n  language +\n  \"&category=\" +\n  category.four;\n\nlet url_news_five =\n  \"https://newsdata.io/api/1/news?apikey=\" +\n  api_key.newsapiorg +\n  \"&language=\" +\n  language +\n  \"&category=\" +\n  category.five;\n\nlet url_news_random =\n  \"https://newsdata.io/api/1/news?apikey=\" +\n  api_key.newsapiorg +\n  \"&language=\" +\n  language +\n  \"&category=\" +\n  chooseCategory();\n\n\n\n\n//# sourceURL=webpack://news_today/./src/variables.js?");

/***/ }),

/***/ "./src/astro_skull.png":
/*!*****************************!*\
  !*** ./src/astro_skull.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"79304ffefe6fdee6a5b8.png\";\n\n//# sourceURL=webpack://news_today/./src/astro_skull.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;