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

/***/ "./src/keys.js":
/*!*********************!*\
  !*** ./src/keys.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet api_key = {\r\n    newsapiorg: 'pub_1145725872fd78d5a00ae0ad5fc25d8f4c3b4'\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api_key);\n\n//# sourceURL=webpack://news_today/./src/keys.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys */ \"./src/keys.js\");\n\r\n\r\nlet news = {\r\n    link: [],\r\n    image: [],\r\n    title: [],\r\n    description: [],\r\n    publisher: [],\r\n    pubDate: []\r\n}\r\n\r\nlet language = 'en';\r\n\r\nlet chooseCategory = () => {\r\n    let random_number = Math.floor(Math.random() * 6);\r\n    console.log(random_number);\r\n    switch(random_number) {\r\n        case 0:\r\n            return category.zero;\r\n        case 1:\r\n            return category.one;\r\n        case 2:\r\n            return category.two;\r\n        case 3:\r\n            return category.three;\r\n        case 4:\r\n            return category.four;\r\n        case 5:\r\n            return category.five;\r\n    }\r\n}\r\n\r\nlet category = {\r\n    zero: 'entertainment',\r\n    one: 'environment',\r\n    two: 'food',\r\n    three: 'sports',\r\n    four: 'top',\r\n    five: 'world'\r\n}\r\n\r\nlet url_news = 'https://newsdata.io/api/1/news?apikey=' + _keys__WEBPACK_IMPORTED_MODULE_0__[\"default\"] +\r\n                '&language=' + language + \r\n                '&category=' + category.four;\r\n\r\n\r\nlet fetchNewsReddit = () => {\r\n    /**REDDIT NEWS **/\r\n    fetch('https://www.reddit.com/r/news.json')\r\n    .then((response) => (response.json()))\r\n    .then(function(response) {\r\n        // console.log(response.data.children.length);\r\n        for(let i=0; i<response.data.children.length; i++)\r\n        {\r\n            // console.log(response.data.children[i].data);\r\n            news.link[i] = response.data.children[i].data.url;\r\n            news.title[i] = response.data.children[i].data.title;\r\n            news.publisher[i] = response.data.children[i].data.domain;\r\n            createCard(news.link[i], news.image[i], news.title[i], news.description[i], news.publisher[i], news.pubDate[i]);\r\n        }\r\n    })\r\n}\r\n\r\nlet fetchNewsAPIOrg = () => {\r\n    fetch(url_news, {mode: 'cors'})\r\n    .then(function(response) {\r\n        return response.json();\r\n    })\r\n    .then(function(response) {\r\n        console.log(response);\r\n        getDataFromNewsAPIOrg(response);\r\n    })\r\n    .catch((error) => console.log(error));\r\n}\r\n\r\n/**NEWS API ORG */\r\nPromise.all([\r\n    // fetchNewsAPIOrg(),\r\n    fetchNewsReddit()\r\n])\r\n\r\nlet getDataFromNewsAPIOrg = (response) => {\r\n    for(let i=0; i<response.results.length; i++){\r\n        //substitute data value to object array\r\n        news.link[i] = response.results[i].link;\r\n        news.image[i] = response.results[i].image_url;\r\n        news.title[i] = response.results[i].title;\r\n        news.description[i] = response.results[i].description;\r\n        news.publisher[i] = response.results[i].source_id;\r\n        news.pubDate[i] = response.results[i].pubDate;\r\n        //call create card for each news article\r\n        createCard(news.link[i], news.image[i], news.title[i], news.description[i], news.publisher[i], news.pubDate[i]);\r\n    }\r\n}\r\n\r\n/**Function to CREATE NEWS CARD DYNAMICALLY **/\r\nlet createCard = (link, image_source, headline_text, details_text, publisher_text, date_text) => {\r\n    const content = document.querySelector('.content');\r\n    //create card\r\n    const card = document.createElement('div');\r\n    content.appendChild(card);\r\n    card.classList.add('card');\r\n    card.addEventListener('click', () => {\r\n        console.log('im clicked!');\r\n        url = link;\r\n        window.open(url, '_blank').focus();\r\n    });\r\n    //create image\r\n    // console.log(image_source);\r\n    if (image_source !== null && image_source !== undefined) {\r\n        const img = document.createElement('img');\r\n        img.src = image_source;\r\n        card.appendChild(img);\r\n    }\r\n    //create headline\r\n    const headline = document.createElement('div');\r\n    headline.textContent = headline_text;\r\n    card.appendChild(headline);\r\n    headline.classList.add('headline');\r\n    //create details\r\n    const details = document.createElement('div');\r\n    details.textContent = details_text;\r\n    card.appendChild(details);\r\n    details.classList.add('details');\r\n    //create wrapper for publisher and date\r\n    const wrapper = document.createElement('div');\r\n    card.appendChild(wrapper);\r\n    wrapper.classList.add('wrapper');\r\n    //create publisher\r\n    const publisher = document.createElement('div');\r\n    publisher.textContent = publisher_text;\r\n    publisher.classList.add('publisher');\r\n    wrapper.appendChild(publisher);\r\n    //create separation dot\r\n    const dot = document.createElement('div');\r\n    dot.textContent = '•';\r\n    wrapper.appendChild(dot);\r\n    //create date\r\n    const date = document.createElement('div');\r\n    date.textContent = date_text;\r\n    date.classList.add('date');\r\n    wrapper.appendChild(date);\r\n}\r\n\r\n/*Test card*/\r\n// const card = document.querySelector('.card');\r\n\r\n// card.addEventListener('click', () => {\r\n//     console.log('im clicked!');\r\n//     url = 'https://google.com'\r\n//     window.open(url, '_blank').focus();\r\n// });\r\n\n\n//# sourceURL=webpack://news_today/./src/script.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;