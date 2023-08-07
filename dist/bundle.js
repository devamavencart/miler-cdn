/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("// Wait for the DOM to be fully loaded before attaching event listeners\ndocument.addEventListener('click', function (event) {\n        const screenInfo = {\n            width: window.screen.width,\n            height: window.screen.height,\n        };\n        const eventObject = { \n            type: event.target.tagName,\n            screenInfo: screenInfo,\n            timestamp: new Date(8.64e15).toString(),\n        };\n          // Make an API call to the backend to send the event data\n        fetch('http://127.0.0.1:3032/miler_cdn/event', {\n            method: 'POST',\n            headers: {\n            'Content-Type': 'application/json',\n            },\n            body:JSON.stringify(eventObject),\n        })\n        .then((response) => response.json())\n        .then((data) => {\n            console.log('Response from backend:', data);\n        })\n        .catch((error) => {\n            console.error('Error sending event:', error);\n        });\n});\n\n//# sourceURL=webpack://content-delivery-network/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;