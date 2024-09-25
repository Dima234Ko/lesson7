/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./docs/buildingPage.js":
      /*!******************************!*\
  !*** ./docs/buildingPage.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addButton: () => (/* binding */ addButton),\n/* harmony export */   checkButtonExistence: () => (/* binding */ checkButtonExistence),\n/* harmony export */   checkQuantityExistence: () => (/* binding */ checkQuantityExistence),\n/* harmony export */   settingCoordinat: () => (/* binding */ settingCoordinat),\n/* harmony export */   uploadButtons: () => (/* binding */ uploadButtons)\n/* harmony export */ });\n/* harmony import */ var _location_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.js */ "./docs/location.js");\n/* harmony import */ var _workAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workAPI.js */ "./docs/workAPI.js");\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.js */ "./docs/weather.js");\n/* eslint-disable no-console */\n/* eslint-disable no-undef */\n\n\n\n\nfunction addButton(buttonName) {\n  if (checkButtonExistence(buttonName)) {\n    if (checkQuantityExistence()) {\n      const buttonsDiv = document.querySelector("#buttons");\n      const buttons = buttonsDiv.querySelectorAll("button");\n      buttons[0].remove();\n    }\n    const button = document.createElement("button");\n    button.textContent = buttonName;\n    button.className = "button";\n    const buttonsDiv = document.querySelector("#buttons");\n    buttonsDiv.appendChild(button);\n  }\n}\n\nfunction checkButtonExistence(buttonName) {\n  const buttonsDiv = document.querySelector("#buttons");\n  if (buttonsDiv) {\n    const buttons = buttonsDiv.querySelectorAll("button");\n    for (const button of buttons) {\n      if (button.textContent === buttonName) {\n        return false;\n      }\n    }\n  }\n  return true;\n}\n\nfunction checkQuantityExistence() {\n  const buttonsDiv = document.querySelector("#buttons");\n  if (buttonsDiv) {\n    const buttons = buttonsDiv.querySelectorAll("button");\n    if (buttons.length > 9) {\n      return true;\n    } else return false;\n  }\n}\n\nasync function settingCoordinat() {\n  var center = Object.values(await (0,_location_js__WEBPACK_IMPORTED_MODULE_0__.main)());\n  var zoom = 10;\n  await loadYmaps();\n  ymaps.ready(() => {\n    let map = new ymaps.Map("map", {\n      center: center, // Используем координаты центра\n      zoom: zoom, // Уровень масштабирования\n    });\n    window.map = map;\n  });\n  let city = "Москва";\n  try {\n    let cityName = await (0,_workAPI_js__WEBPACK_IMPORTED_MODULE_1__.openweathergeoApi)(center);\n    city = cityName[0].name;\n  } catch (err) {\n    console.log(err);\n  }\n  let dataWeather = await (0,_weather_js__WEBPACK_IMPORTED_MODULE_2__.getData)(city);\n  await (0,_weather_js__WEBPACK_IMPORTED_MODULE_2__.printWeather)(dataWeather);\n}\n\nfunction loadYmaps() {\n  return new Promise((resolve, reject) => {\n    const script = document.createElement("script");\n    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";\n    script.onload = () => resolve();\n    script.onerror = () => reject(new Error("Ошибка загрузки Yandex Maps API"));\n    document.head.appendChild(script);\n  });\n}\n\nfunction uploadButtons() {\n  let buttons = document.querySelectorAll("#buttons button");\n\n  buttons.forEach((button) => {\n    button.addEventListener("click", () => {\n      (0,_weather_js__WEBPACK_IMPORTED_MODULE_2__.printWeather)(button.textContent);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://lesson7/./docs/buildingPage.js?',
        );

        /***/
      },

    /***/ "./docs/index.js":
      /*!***********************!*\
  !*** ./docs/index.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./docs/style.css");\n/* harmony import */ var _buildingPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildingPage.js */ "./docs/buildingPage.js");\n\n\n\n\n(0,_buildingPage_js__WEBPACK_IMPORTED_MODULE_1__.settingCoordinat)();\n\n\n//# sourceURL=webpack://lesson7/./docs/index.js?',
        );

        /***/
      },

    /***/ "./docs/location.js":
      /*!**************************!*\
  !*** ./docs/location.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   main: () => (/* binding */ main)\n/* harmony export */ });\nasync function getUserCoordinates() {\n  if (!navigator.geolocation) {\n    throw new Error("Geolocation is not supported by this browser");\n  }\n\n  try {\n    const position = await new Promise((resolve, reject) => {\n      navigator.geolocation.getCurrentPosition(resolve, reject);\n    });\n    const latitude = position.coords.latitude;\n    const longitude = position.coords.longitude;\n    return [latitude, longitude];\n  } catch (error) {\n    throw new Error(`Error getting location: ${error.message}`);\n  }\n}\n\nasync function main() {\n  try {\n    const coordinates = await getUserCoordinates();\n    return coordinates;\n  } catch (error) {\n    return { lat: null, lon: null, error: error.message };\n  }\n}\n\n\n//# sourceURL=webpack://lesson7/./docs/location.js?',
        );

        /***/
      },

    /***/ "./docs/weather.js":
      /*!*************************!*\
  !*** ./docs/weather.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCondition: () => (/* binding */ getCondition),\n/* harmony export */   getCoord: () => (/* binding */ getCoord),\n/* harmony export */   getData: () => (/* binding */ getData),\n/* harmony export */   getHumidity: () => (/* binding */ getHumidity),\n/* harmony export */   getPressure: () => (/* binding */ getPressure),\n/* harmony export */   getTempCity: () => (/* binding */ getTempCity),\n/* harmony export */   getWeather: () => (/* binding */ getWeather),\n/* harmony export */   getWindSpeed: () => (/* binding */ getWindSpeed),\n/* harmony export */   printWeather: () => (/* binding */ printWeather)\n/* harmony export */ });\n/* harmony import */ var _workAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workAPI.js */ "./docs/workAPI.js");\n/* harmony import */ var _buildingPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildingPage.js */ "./docs/buildingPage.js");\n\n\n\n\nasync function getWeather(city) {\n  let data = await (0,_workAPI_js__WEBPACK_IMPORTED_MODULE_0__.openweathermapApi)(city);\n  return data;\n}\n\nconst buttonElement = document.querySelector("#searchButton");\nif (buttonElement !== null) {\n  buttonElement.addEventListener("click", async function () {\n    let city = document.querySelector("#search").value;\n    try {\n      let dataWeather = await getData(city);\n      await printWeather(dataWeather);\n      await setCenterMap(dataWeather);\n      (0,_buildingPage_js__WEBPACK_IMPORTED_MODULE_1__.addButton)(city);\n    } catch {\n      alert("Населенный пункт не найден");\n    }\n  });\n}\n\nasync function setCenterMap(dataWeather) {\n  var center = Object.values(dataWeather.coord);\n  window.map.setCenter(center);\n}\n\nasync function getData(city) {\n  let data = await getWeather(city);\n  return {\n    tempCity: getTempCity(data),\n    windSpeed: getWindSpeed(data),\n    humidity: getHumidity(data),\n    pressure: getPressure(data),\n    condition: getCondition(data),\n    coord: getCoord(data),\n  };\n}\n\nasync function printWeather(dataWeather) {\n  const element = document.querySelector("#weather");\n\n  element.innerText =\n    "Температура: " +\n    dataWeather.tempCity +\n    "°C" +\n    "\\n" +\n    "Ветер: " +\n    dataWeather.windSpeed +\n    " м/с" +\n    "\\n" +\n    "Влажность: " +\n    dataWeather.humidity +\n    "%" +\n    "\\n" +\n    "Давление: " +\n    dataWeather.pressure +\n    " атм" +\n    "\\n" +\n    dataWeather.condition;\n\n  (0,_buildingPage_js__WEBPACK_IMPORTED_MODULE_1__.uploadButtons)();\n}\n\nfunction getCondition(data) {\n  switch (data.list[0].weather[0].main) {\n    case "Clouds":\n      return "Облачно";\n    case "Clear":\n      return "Ясно";\n    case "Rain":\n      return "Дождь";\n    case "Snow":\n      return "Снег";\n    default:\n      // eslint-disable-next-line no-console\n      console.log("Undefined");\n  }\n}\n\nfunction getTempCity(data) {\n  return (data.list[0].main.temp - 273.15).toFixed(0);\n}\n\nfunction getWindSpeed(data) {\n  return data.list[0].wind.speed;\n}\n\nfunction getHumidity(data) {\n  return data.list[0].main.humidity;\n}\n\nfunction getPressure(data) {\n  return (data.list[0].main.pressure * 0.987).toFixed(0);\n}\n\nfunction getCoord(data) {\n  return data.list[0].coord;\n}\n\n\n//# sourceURL=webpack://lesson7/./docs/weather.js?',
        );

        /***/
      },

    /***/ "./docs/workAPI.js":
      /*!*************************!*\
  !*** ./docs/workAPI.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkResponse: () => (/* binding */ checkResponse),\n/* harmony export */   getAdminURL: () => (/* binding */ getAdminURL),\n/* harmony export */   getKeyAdminAPI: () => (/* binding */ getKeyAdminAPI),\n/* harmony export */   getKeyUserAPI: () => (/* binding */ getKeyUserAPI),\n/* harmony export */   getUserURL: () => (/* binding */ getUserURL),\n/* harmony export */   openweathergeoApi: () => (/* binding */ openweathergeoApi),\n/* harmony export */   openweathermapApi: () => (/* binding */ openweathermapApi)\n/* harmony export */ });\nasync function openweathermapApi(city) {\n  let response = await fetch(\n    getAdminURL() +\n      "q=" +\n      city +\n      "&limit=1&appid=" +\n      "&appid=" +\n      getKeyAdminAPI(),\n    { method: "GET" },\n  );\n  if (checkResponse) {\n    return await response.json();\n  }\n}\n\nasync function openweathergeoApi(coords) {\n  let response = await fetch(\n    getUserURL() +\n      "lat=" +\n      coords[0] +\n      "&lon=" +\n      coords[1] +\n      `&limit=1&appid=${getKeyUserAPI()}`,\n    { method: "GET" },\n  );\n\n  if (checkResponse) {\n    return await response.json();\n  }\n}\n\nfunction getAdminURL() {\n  return "https://openweathermap.org/data/2.5/find?";\n}\n\nfunction getKeyAdminAPI() {\n  return "439d4b804bc8187953eb36d2a8c26a02&_=1726339180386";\n}\n\nfunction getUserURL() {\n  return "https://api.openweathermap.org/geo/1.0/reverse?";\n}\n\nfunction getKeyUserAPI() {\n  return "813c35b4fc3ef7e0c16420d3e7bfdce6";\n}\n\nfunction checkResponse(response) {\n  if (!response.ok) {\n    throw new Error(`Ошибка HTTP: ${response.status}`);\n  } else return true;\n}\n\n\n//# sourceURL=webpack://lesson7/./docs/workAPI.js?',
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./docs/style.css":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./docs/style.css ***!
  \**************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#map {\n  width: 40vw;\n  height: 40vh;\n  position: absolute;\n  top: 40px;\n  left: 0;\n}\n\n#search-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50vw;\n  display: flex;\n  align-items: center;\n}\n#search {\n  width: 40vw;\n  padding: 5px;\n  box-sizing: border-box;\n}\n#show-button {\n  padding: 5px 10px;\n  margin-left: 5px;\n}\n#weather {\n  position: absolute;\n  top: 40px;\n  left: 40vw;\n  width: 20vw;\n  padding: 5px;\n  box-sizing: border-box;\n}\n#buttons {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  flex-direction: column;\n}\n.button {\n  background: none;\n  border: none;\n  margin-bottom: 10px;\n  font-size: 16px;\n  cursor: pointer;\n  text-align: left;\n}\n.button:hover {\n  text-decoration: underline;\n}\n`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lesson7/./docs/style.css?./node_modules/css-loader/dist/cjs.js',
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://lesson7/./node_modules/css-loader/dist/runtime/api.js?',
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://lesson7/./node_modules/css-loader/dist/runtime/noSourceMaps.js?",
        );

        /***/
      },

    /***/ "./docs/style.css":
      /*!************************!*\
  !*** ./docs/style.css ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./docs/style.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://lesson7/./docs/style.css?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://lesson7/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://lesson7/./node_modules/style-loader/dist/runtime/insertBySelector.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://lesson7/./node_modules/style-loader/dist/runtime/insertStyleElement.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://lesson7/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://lesson7/./node_modules/style-loader/dist/runtime/styleDomAPI.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://lesson7/./node_modules/style-loader/dist/runtime/styleTagTransform.js?",
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./docs/index.js");
  /******/
  /******/
})();
