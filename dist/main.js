/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.jsx":
/*!****************************!*\
  !*** ./components/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation_NavigationList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation/NavigationList.jsx */ "./components/Navigation/NavigationList.jsx");
/* harmony import */ var _Location_Location_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location/Location.jsx */ "./components/Location/Location.jsx");
/* harmony import */ var _Order_Order_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Order/Order.jsx */ "./components/Order/Order.jsx");
/* harmony import */ var _Model_Model_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Model/Model.jsx */ "./components/Model/Model.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleMenuClick", function (id) {
      if (id >= _this.state.isActive) return;

      _this.setState({
        isActive: id
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (e) {
      e.persist();

      var newOrder = _this.state.order.map(function (item, i) {
        if (i === 0) {
          return _objectSpread({}, item, _defineProperty({}, e.target.name, e.target.value));
        } else {
          return _objectSpread({}, item);
        }
      });

      _this.setState(function (prev) {
        return _objectSpread({}, prev, {}, _defineProperty({}, e.target.name, e.target.value), {
          order: newOrder
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputClick", function (e) {
      e.persist();

      _this.setState(function (prev) {
        return _objectSpread({}, prev, {}, _defineProperty({}, e.target.name, ""));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonClick", function () {
      _this.setState({
        isActive: 2
      });
    });

    _this.state = {
      isActive: 2,
      city: document.querySelector(".body-header__text").textContent || "",
      place: "",
      order: [{
        city: document.querySelector(".body-header__text").textContent || null,
        place: null,
        title: "Пункт выдачи"
      }, {
        value: null,
        title: "Модель"
      }, {
        value: null,
        title: "Цвет"
      }, {
        value: null,
        title: "Длительность аренды"
      }, {
        value: null,
        title: "Тариф"
      }, {
        value: false,
        title: "Полный бак"
      }, {
        value: false,
        title: "Детское кресло"
      }, {
        value: false,
        title: "Правый руль"
      }]
    };
    _this.handleMenuClick = _this.handleMenuClick.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleInputClick = _this.handleInputClick.bind(_assertThisInitialized(_this));
    _this.handleButtonClick = _this.handleButtonClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var city = this.state.city;
      var place = this.state.place;
      var isActive = this.state.isActive;
      var renderStep;

      switch (this.state.isActive) {
        case 1:
          renderStep = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Location_Location_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
            city: city,
            place: place,
            onInputChange: this.handleInputChange,
            onInputClick: this.handleInputClick
          });
          break;

        case 2:
          renderStep = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Model_Model_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null);
          break;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "body-main__inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_NavigationList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        active: isActive,
        menuClick: this.handleMenuClick
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "body-main__content"
      }, renderStep, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Order_Order_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        order: this.state.order,
        onButtonClick: this.handleButtonClick
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/Location/Location.jsx":
/*!******************************************!*\
  !*** ./components/Location/Location.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Location; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LocationForm_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocationForm.jsx */ "./components/Location/LocationForm.jsx");


function Location(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-location__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-location"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LocationForm_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    city: props.city,
    place: props.place,
    onInputChange: props.onInputChange,
    onInputClick: props.onInputClick
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-location__map"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "body-main-location__subtitle"
  }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0435:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-location__chart"
  }))));
}

/***/ }),

/***/ "./components/Location/LocationForm.jsx":
/*!**********************************************!*\
  !*** ./components/Location/LocationForm.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocationForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var LocationForm = /*#__PURE__*/function (_React$Component) {
  _inherits(LocationForm, _React$Component);

  function LocationForm(props) {
    var _this;

    _classCallCheck(this, LocationForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LocationForm).call(this, props));
    _this.inputChange = _this.inputChange.bind(_assertThisInitialized(_this));
    _this.inputClick = _this.inputClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LocationForm, [{
    key: "inputChange",
    value: function inputChange(e) {
      this.props.onInputChange(e);
    }
  }, {
    key: "inputClick",
    value: function inputClick(e) {
      this.props.onInputClick(e);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "body-main-location__form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "body-main-location__group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "body-main-location__label"
      }, "\u0413\u043E\u0440\u043E\u0434"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "body-main-location__input",
        type: "text",
        value: this.props.city,
        onChange: this.inputChange,
        name: "city"
      }), this.props.city && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "./images/orderpage/form_icon_delete.svg",
        className: "body-main-location__delete",
        onClick: this.inputClick,
        name: "city"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "body-main-location__group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "body-main-location__label"
      }, "\u041F\u0443\u043D\u043A\u0442 \u0432\u044B\u0434\u0430\u0447\u0438"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "body-main-location__input",
        type: "text",
        value: this.props.place,
        onChange: this.inputChange,
        name: "place",
        placeholder: "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0432\u0432\u043E\u0434\u0438\u0442\u044C \u043F\u0443\u043D\u043A\u0442 \u0432\u044B\u0434\u0430\u0447\u0438"
      }), this.props.place && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "./images/orderpage/form_icon_delete.svg",
        className: "body-main-location__delete",
        onClick: this.inputClick,
        name: "place"
      })));
    }
  }]);

  return LocationForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/Model/Model.jsx":
/*!************************************!*\
  !*** ./components/Model/Model.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModelMenu_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModelMenu.jsx */ "./components/Model/ModelMenu.jsx");
/* harmony import */ var _ModelList_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModelList.jsx */ "./components/Model/ModelList.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Model() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: 1,
    model: "ELANTRA",
    price: "12 000 - 15 000 Р",
    class: "eco"
  }, {
    id: 2,
    model: "i30 N",
    price: "10 000 - 32 000 Р",
    class: "premium"
  }, {
    id: 3,
    model: "CRETA",
    price: "12 000 - 25 000 Р",
    class: "premium"
  }, {
    id: 4,
    model: "SONATA",
    price: "10 000 - 32 000 Р",
    class: "eco"
  }, {
    id: 5,
    model: "ELANTRA",
    price: "12 000 - 15 000 Р",
    class: "premium"
  }, {
    id: 6,
    model: "i30 N",
    price: "10 000 - 32 000 Р",
    class: "premium"
  }, {
    id: 7,
    model: "CRETA",
    price: "12 000 - 25 000 Р",
    class: "eco"
  }, {
    id: 8,
    model: "SONATA",
    price: "10 000 - 32 000 Р",
    class: "eco"
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      car = _useState2[0],
      setCar = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("all"),
      _useState4 = _slicedToArray(_useState3, 2),
      filter = _useState4[0],
      setFilter = _useState4[1];

  function handleMenuClick(name) {
    setFilter(name);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-model__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-model"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModelMenu_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    filter: filter,
    onMenuClick: handleMenuClick
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModelList_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cars: car,
    filter: filter
  })));
}

/***/ }),

/***/ "./components/Model/ModelItem.jsx":
/*!****************************************!*\
  !*** ./components/Model/ModelItem.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModelItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ModelItem(_ref) {
  var car = _ref.car;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-model__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "body-main-model__title"
  }, car.model), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-main-model__price"
  }, car.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./images/orderpage/cars/".concat(car.model, ".jpg"),
    className: "body-main-model__image"
  }));
}

/***/ }),

/***/ "./components/Model/ModelList.jsx":
/*!****************************************!*\
  !*** ./components/Model/ModelList.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModelList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModelItem_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModelItem.jsx */ "./components/Model/ModelItem.jsx");


function ModelList(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-model__list"
  }, props.cars.map(function (item) {
    return props.filter !== "all" ? props.filter === item.class ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModelItem_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      car: item,
      key: item.id
    }) : null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModelItem_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      car: item,
      key: item.id
    });
  }));
}

/***/ }),

/***/ "./components/Model/ModelMenu.jsx":
/*!****************************************!*\
  !*** ./components/Model/ModelMenu.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModelMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModelMenuItem_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModelMenuItem.jsx */ "./components/Model/ModelMenuItem.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function ModelMenu(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: 1,
    name: "all",
    title: "Все модели"
  }, {
    id: 2,
    name: "eco",
    title: "Эконом"
  }, {
    id: 3,
    name: "premium",
    title: "Премиум"
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      menu = _useState2[0],
      setMenu = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "body-main-model__ul"
  }, menu.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModelMenuItem_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item,
      filter: props.filter,
      key: item.id,
      menuClick: props.onMenuClick
    });
  }));
}

/***/ }),

/***/ "./components/Model/ModelMenuItem.jsx":
/*!********************************************!*\
  !*** ./components/Model/ModelMenuItem.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModelMenuItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ModelMenuItem(_ref) {
  var item = _ref.item,
      filter = _ref.filter,
      menuClick = _ref.menuClick;
  var classes = ["body-main-model__li"];

  if (filter === item.name) {
    classes.push("body-main-model__li--active");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: classes.join(" "),
    name: item.name,
    onClick: function onClick() {
      return menuClick(item.name);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "body-main-model__circle"
  }), item.title);
}

/***/ }),

/***/ "./components/Navigation/NavigationItem.jsx":
/*!**************************************************!*\
  !*** ./components/Navigation/NavigationItem.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavigationItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function NavigationItem(_ref) {
  var link = _ref.link,
      active = _ref.active,
      clickItem = _ref.clickItem;
  var classes = ["body-list__item"];

  if (link.id === active) {
    classes.push("body-list__item--active");
  }

  if (link.id < active) {
    classes.push("body-list__item--complete");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: classes.join(" "),
    onClick: function onClick() {
      return clickItem(link.id);
    }
  }, link.link, link.id !== 4 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./images/orderpage/menu_arrow.svg",
    className: "body-list__image"
  }) : "");
}

/***/ }),

/***/ "./components/Navigation/NavigationList.jsx":
/*!**************************************************!*\
  !*** ./components/Navigation/NavigationList.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavigationList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationItem_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationItem.jsx */ "./components/Navigation/NavigationItem.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function NavigationList(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: 1,
    link: "Местоположение"
  }, {
    id: 2,
    link: "Модель"
  }, {
    id: 3,
    link: "Дополнительно"
  }, {
    id: 4,
    link: "Итого"
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      links = _useState2[0],
      setLinks = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "body-list__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "body-list"
  }, links.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationItem_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      link: item,
      key: item.id,
      active: props.active,
      clickItem: props.menuClick
    });
  })));
}

/***/ }),

/***/ "./components/Order/Order.jsx":
/*!************************************!*\
  !*** ./components/Order/Order.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Order; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OrderItem_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderItem.jsx */ "./components/Order/OrderItem.jsx");


function Order(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-order__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-order"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "body-main-order__title"
  }, "\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437: "), props.order.map(function (item, idx) {
    if (idx !== 0 && !item.value) return;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OrderItem_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      items: item,
      key: item.title
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-main-order__price"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0426\u0435\u043D\u0430: "), "\u043E\u0442 8 000 \u0434\u043E 12 000 \u20BD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button body-main-order__button",
    disabled: !props.order[0].city || !props.order[0].place,
    onClick: props.onButtonClick
  }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C")));
}

/***/ }),

/***/ "./components/Order/OrderItem.jsx":
/*!****************************************!*\
  !*** ./components/Order/OrderItem.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function OrderLocation(props) {
  var item = props.item;

  if (item.hasOwnProperty("city") || item.hasOwnProperty("place")) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "body-main-order__loc"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "body-main-order__text"
    }, item.city), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "body-main-order__text"
    }, item.place));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-main-order__text"
  }, item.value);
}

function OrderItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-order__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-main-order__subtitle"
  }, props.items.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderLocation, {
    item: props.items
  }));
}

/***/ }),

/***/ "./scripts/index.jsx":
/*!***************************!*\
  !*** ./scripts/index.jsx ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/style/main.scss */ "./style/main.scss");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svgHover_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svgHover.js */ "./scripts/svgHover.js");
/* harmony import */ var _startscreenmenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startscreenmenu.js */ "./scripts/startscreenmenu.js");
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider.js */ "./scripts/slider.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/App.jsx */ "./components/App.jsx");







var orderPage = document.getElementById("app");

if (orderPage) {
  react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_App_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null), orderPage);
}

var goToUrl = document.querySelector(".body-content__button");

if (goToUrl) {
  goToUrl.addEventListener("click", function () {
    location.href = "order_page.html";
  });
}

/***/ }),

/***/ "./scripts/slider.js":
/*!***************************!*\
  !*** ./scripts/slider.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel_slick_slick_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel/slick/slick.min.js */ "../node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel_slick_slick_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_min_js__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0__(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0__(".slider").slick({
    dots: true,
    speed: 1000,
    easing: "ease",
    autoplay: true,
    autoplaySpeed: 4000,
    touchThreshold: 10
  });
  jquery__WEBPACK_IMPORTED_MODULE_0__(".slick-arrow.slick-prev").append('<img src="./images/startscreen/slider_left_arrow.svg" class="slick-arrow-img" />');
  jquery__WEBPACK_IMPORTED_MODULE_0__(".slick-arrow.slick-next").append('<img src="./images/startscreen/slider_right_arrow.svg" class="slick-arrow-img" />');
});

/***/ }),

/***/ "./scripts/startscreenmenu.js":
/*!************************************!*\
  !*** ./scripts/startscreenmenu.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0__(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0__(".burger").on("click", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0__(".container__menu").fadeToggle(200);
  });
});

/***/ }),

/***/ "./scripts/svgHover.js":
/*!*****************************!*\
  !*** ./scripts/svgHover.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0__(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0__("img.list__image").each(function () {
    var $img = jquery__WEBPACK_IMPORTED_MODULE_0__(this);
    var imgID = $img.attr("id");
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    jquery__WEBPACK_IMPORTED_MODULE_0__["get"](imgURL, function (data) {
      var $svg = jquery__WEBPACK_IMPORTED_MODULE_0__(data).find("svg");

      if (typeof imgID !== "undefined") {
        $svg = $svg.attr("id", imgID);
      }

      if (typeof imgClass !== "undefined") {
        $svg = $svg.attr("class", imgClass + " replaced-svg");
      }

      $svg = $svg.removeAttr("xmlns:a");
      $img.replaceWith($svg);
    }, "xml");
  });
});

/***/ }),

/***/ "./style/main.scss":
/*!*************************!*\
  !*** ./style/main.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi @babel/polyfill ./scripts/index.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./scripts/index.jsx */"./scripts/index.jsx");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map