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
/* harmony import */ var _Options_Options_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Options/Options.jsx */ "./components/Options/Options.jsx");
/* harmony import */ var _Total_Total_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Total/Total.jsx */ "./components/Total/Total.jsx");
/* harmony import */ var _Modal_Modal_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modal/Modal.jsx */ "./components/Modal/Modal.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

    _defineProperty(_assertThisInitialized(_this), "handleButtonDeclineClick", function () {
      _this.setState({
        isModal: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonClick", function () {
      // const history = this.state.history;
      // const current = history[history.length - 1];
      // const newOrder = this.state.order;
      _this.setState({
        isActive: _this.state.isActive < 4 ? _this.state.isActive + 1 : 4,
        isModal: _this.state.isActive === 4 ? true : false // history: this.state.history.concat({ order: newOrder })

      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOrderChange", function (name, value, index) {
      var newOrder = _this.state.order.slice();

      newOrder[index][name] = value;

      _this.setState({
        order: newOrder
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDateInputChange", function (e, index) {
      // this.handleInputChange(e);
      _this.handleOrderChange(e.target.name, e.target.value, index);

      var since = _this.state.order[index].since;
      var by = _this.state.order[index].by;
      var from = new Date(since.replace(/(\d+).(\d+).(\d+)/, "$3.$2.$1"));
      var to = new Date(by.replace(/(\d+).(\d+).(\d+)/, "$3.$2.$1"));
      var time = new Date(to - from);
      var day = time.getDate() === 0 ? 0 : time.getDate() - 1;
      var hours = time.getHours() + time.getTimezoneOffset() / 60;
      var datetime = [];
      day ? datetime.push(day + "д") : null;
      hours ? datetime.push(hours + "ч") : null;

      _this.handleOrderChange("value", datetime.join(" "), index);
    });

    _this.state = {
      isActive: 1,
      isModal: false,
      order: [{
        city: document.querySelector(".body-header__text").textContent || "",
        place: "",
        title: "Пункт выдачи"
      }, {
        name: "",
        number: "",
        value: "",
        fuel: "",
        title: "Модель"
      }, {
        value: "",
        title: "Цвет"
      }, {
        value: "",
        title: "Длительность аренды",
        since: new Date().toLocaleString().slice(0, -3).replace(",", ""),
        by: ""
      }, {
        value: "",
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
      }],
      history: []
    };
    _this.handleMenuClick = _this.handleMenuClick.bind(_assertThisInitialized(_this));
    _this.handleButtonClick = _this.handleButtonClick.bind(_assertThisInitialized(_this));
    _this.handleOrderChange = _this.handleOrderChange.bind(_assertThisInitialized(_this));
    _this.handleDateInputChange = _this.handleDateInputChange.bind(_assertThisInitialized(_this));
    _this.handleButtonDeclineClick = _this.handleButtonDeclineClick.bind(_assertThisInitialized(_this)); // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleInputClick = this.handleInputClick.bind(this);
    // this.handleLocationInputChange = this.handleLocationInputChange.bind(this);
    // this.handleLocationInputClick = this.handleLocationInputClick.bind(this);
    // this.handleDateInputClick = this.handleDateInputClick.bind(this);

    return _this;
  }

  _createClass(App, [{
    key: "render",
    // handleDateInputClick = (e, index) => {
    //   // this.handleInputClick(e);
    //   this.handleOrderChange(e.target.name, "", index);
    //   this.handleOrderChange("value", "", index);
    // };
    value: function render() {
      var isActive = this.state.isActive;
      var renderStep;

      switch (this.state.isActive) {
        case 1:
          renderStep = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Location_Location_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
            city: this.state.order[0].city,
            place: this.state.order[0].place,
            onInputChange: this.handleOrderChange // onInputChange={this.handleLocationInputChange}
            // onInputClick={this.handleLocationInputClick}

          });
          break;

        case 2:
          renderStep = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Model_Model_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
            onMenuItemClick: this.handleOrderChange
          });
          break;

        case 3:
          renderStep = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Options_Options_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
            since: this.state.order[3].since,
            by: this.state.order[3].by,
            onOrderChange: this.handleOrderChange,
            onInputDateChange: this.handleDateInputChange // onInputDateClick={this.handleDateInputClick}

          });
          break;

        case 4:
          renderStep = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Total_Total_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
            since: this.state.order[3].since,
            name: this.state.order[1].name,
            model: this.state.order[1].value,
            number: this.state.order[1].number,
            fuel: this.state.order[1].fuel,
            isFull: this.state.order[5].value
          });
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
        onButtonClick: this.handleButtonClick,
        step: this.state.isActive
      })), this.state.isModal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_Modal_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onButtonDeclineClick: this.handleButtonDeclineClick
      }) : "");
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
    onInputChange: props.onInputChange // onInputClick={props.onInputClick}

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

function LocationForm(props) {
  function inputChange(e) {
    props.onInputChange(e.target.name, e.target.value, 0);
  }

  function inputClick(e) {
    props.onInputChange(e.target.name, "", 0);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form-section__container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-section__group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-section__label"
  }, "\u0413\u043E\u0440\u043E\u0434"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-section__input",
    type: "text",
    value: props.city,
    onChange: inputChange,
    name: "city"
  }), props.city && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./images/orderpage/form_icon_delete.svg",
    className: "form-section__delete",
    onClick: inputClick,
    name: "city"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-section__group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-section__label"
  }, "\u041F\u0443\u043D\u043A\u0442 \u0432\u044B\u0434\u0430\u0447\u0438"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-section__input",
    type: "text",
    value: props.place,
    onChange: inputChange,
    name: "place",
    placeholder: "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0432\u0432\u043E\u0434\u0438\u0442\u044C \u043F\u0443\u043D\u043A\u0442 \u0432\u044B\u0434\u0430\u0447\u0438"
  }), props.place && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./images/orderpage/form_icon_delete.svg",
    className: "form-section__delete",
    onClick: inputClick,
    name: "place"
  })));
}

/***/ }),

/***/ "./components/Modal/Modal.jsx":
/*!************************************!*\
  !*** ./components/Modal/Modal.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Modal(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal__content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "modal__title"
  }, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button button__accept"
  }, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button button__decline",
    onClick: props.onButtonDeclineClick
  }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F"))));
}

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




function Model(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: 1,
    model: "ELANTRA",
    price: "12 000 - 15 000 Р",
    class: "eco",
    name: "Hyndai",
    number: "К 761 НА 73",
    fuel: "36%"
  }, {
    id: 2,
    model: "i30 N",
    price: "10 000 - 32 000 Р",
    class: "premium",
    name: "Hyndai",
    number: "Л 235 ЛК 73",
    fuel: "85%"
  }, {
    id: 3,
    model: "CRETA",
    price: "12 000 - 25 000 Р",
    class: "premium",
    name: "Hyndai",
    number: "Р 359 ВО 73",
    fuel: "91%"
  }, {
    id: 4,
    model: "SONATA",
    price: "10 000 - 32 000 Р",
    class: "eco",
    name: "Hyndai",
    number: "А 193 МН 73",
    fuel: "3%"
  }, {
    id: 5,
    model: "ELANTRA",
    price: "12 000 - 15 000 Р",
    class: "premium",
    name: "Hyndai",
    number: "А 111 БВ 73",
    fuel: "100%"
  }, {
    id: 6,
    model: "i30 N",
    price: "10 000 - 32 000 Р",
    class: "premium",
    name: "Hyndai",
    number: "Б 222 ГД 73",
    fuel: "55%"
  }, {
    id: 7,
    model: "CRETA",
    price: "12 000 - 25 000 Р",
    class: "eco",
    name: "Hyndai",
    number: "Д 333 ЕК 73",
    fuel: "86%"
  }, {
    id: 8,
    model: "SONATA",
    price: "10 000 - 32 000 Р",
    class: "eco",
    name: "Hyndai",
    number: "Е 444 УК 73",
    fuel: "30%"
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      car = _useState2[0],
      setCar = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      select = _useState4[0],
      setSelect = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("all"),
      _useState6 = _slicedToArray(_useState5, 2),
      filter = _useState6[0],
      setFilter = _useState6[1];

  function handleMenuClick(name) {
    setFilter(name);
  }

  function handleItemClick(id, model, name, number, fuel) {
    setSelect(id);
    props.onMenuItemClick("value", model, 1);
    props.onMenuItemClick("name", name, 1);
    props.onMenuItemClick("number", number, 1);
    props.onMenuItemClick("fuel", fuel, 1);
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
    filter: filter,
    onMenuItemClick: handleItemClick,
    selectItem: select
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
  var car = _ref.car,
      onMenuItemClick = _ref.onMenuItemClick,
      selectItem = _ref.selectItem;
  var classes = ["body-main-model__item"];

  if (car.id === selectItem) {
    classes.push("body-main-model__item--active");
  }

  function modelItemClick() {
    onMenuItemClick(car.id, car.model, car.name, car.number, car.fuel);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.join(" "),
    onClick: modelItemClick
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
      key: item.id,
      onMenuItemClick: props.onMenuItemClick,
      selectItem: props.selectItem
    }) : null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModelItem_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      car: item,
      key: item.id,
      onMenuItemClick: props.onMenuItemClick,
      selectItem: props.selectItem
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

/***/ "./components/Options/Options.jsx":
/*!****************************************!*\
  !*** ./components/Options/Options.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Options; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OptionsColor_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OptionsColor.jsx */ "./components/Options/OptionsColor.jsx");
/* harmony import */ var _OptionsDate_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptionsDate.jsx */ "./components/Options/OptionsDate.jsx");
/* harmony import */ var _OptionsTariff_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OptionsTariff.jsx */ "./components/Options/OptionsTariff.jsx");
/* harmony import */ var _OptionsServices_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OptionsServices.jsx */ "./components/Options/OptionsServices.jsx");





function Options(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-options__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-options"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "body-main-options__subtitle"
  }, "\u0426\u0432\u0435\u0442"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OptionsColor_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    menuColorChange: props.onOrderChange
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "body-main-options__subtitle"
  }, "\u0414\u0430\u0442\u0430 \u0430\u0440\u0435\u043D\u0434\u044B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OptionsDate_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    inputDateChange: props.onInputDateChange,
    inputDateClick: props.onOrderChange,
    since: props.since,
    by: props.by
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "body-main-options__subtitle"
  }, "\u0422\u0430\u0440\u0438\u0444"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OptionsTariff_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuTariffChange: props.onOrderChange
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "body-main-options__subtitle"
  }, "\u0414\u043E\u043F \u0443\u0441\u043B\u0443\u0433\u0438"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OptionsServices_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    menuServicesChange: props.onOrderChange
  })));
}

/***/ }),

/***/ "./components/Options/OptionsColor.jsx":
/*!*********************************************!*\
  !*** ./components/Options/OptionsColor.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OptionsColor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function OptionsColor(props) {
  function handleInputChange(e) {
    props.menuColorChange("value", e.target.value, 2);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-options__group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "radio-section__container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "radio",
    name: "color",
    value: "\u041B\u044E\u0431\u043E\u0439",
    onChange: handleInputChange,
    className: "radio-section__input"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "radio-section__checkmark"
  }), "\u041B\u044E\u0431\u043E\u0439"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "radio-section__container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "radio",
    name: "color",
    value: "\u041A\u0440\u0430\u0441\u043D\u044B\u0439",
    onChange: handleInputChange,
    className: "radio-section__input"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "radio-section__checkmark"
  }), "\u041A\u0440\u0430\u0441\u043D\u044B\u0439"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "radio-section__container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "radio",
    name: "color",
    value: "\u0413\u043E\u043B\u0443\u0431\u043E\u0439",
    onChange: handleInputChange,
    className: "radio-section__input"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "radio-section__checkmark"
  }), "\u0413\u043E\u043B\u0443\u0431\u043E\u0439"));
}

/***/ }),

/***/ "./components/Options/OptionsDate.jsx":
/*!********************************************!*\
  !*** ./components/Options/OptionsDate.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OptionsDate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-input-mask */ "../node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_1__);


function OptionsDate(props) {
  function inputClick(e, index) {
    props.onOrderChange(e.target.name, "", index);
    props.onOrderChange("value", "", index);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form-section__container form-section__container--margin"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-section__group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-section__label"
  }, "\u0421"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_input_mask__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "form-section__input",
    type: "text",
    value: props.since,
    onChange: function onChange(e) {
      return props.inputDateChange(e, 3);
    },
    name: "since",
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F",
    mask: "99.99.9999 99:99",
    maskChar: "-"
  }), props.since && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./images/orderpage/form_icon_delete.svg",
    className: "form-section__delete",
    onClick: function onClick(e) {
      return inputClick(e, 3);
    },
    name: "since"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-section__group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-section__label"
  }, "\u041F\u043E"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_input_mask__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "form-section__input",
    type: "text",
    value: props.by,
    onChange: function onChange(e) {
      return props.inputDateChange(e, 3);
    },
    name: "by",
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F",
    mask: "99.99.9999 99:99",
    maskChar: "-"
  }), props.by && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./images/orderpage/form_icon_delete.svg",
    className: "form-section__delete",
    onClick: function onClick(e) {
      return inputClick(e, 3);
    },
    name: "by"
  })));
}

/***/ }),

/***/ "./components/Options/OptionsServices.jsx":
/*!************************************************!*\
  !*** ./components/Options/OptionsServices.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OptionsServices; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function OptionsServices(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      fuel = _useState2[0],
      setFuel = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      chair = _useState4[0],
      setChair = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      wheel = _useState6[0],
      setWheel = _useState6[1];

  function handleInputChange(e, index) {
    if (e.target.name === "fuel") {
      setFuel(e.target.checked);
    } else if (e.target.name === "chair") {
      setChair(e.target.checked);
    } else {
      setWheel(e.target.checked);
    }

    props.menuServicesChange("value", e.target.checked, index);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-options__group body-main-options__group--display"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "checkbox-section__container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    name: "fuel",
    checked: fuel,
    onChange: function onChange(e) {
      return handleInputChange(e, 5);
    },
    className: "checkbox-section__input"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "checkbox-section__checkmark"
  }), "\u041F\u043E\u043B\u043D\u044B\u0439 \u0431\u0430\u043A, 500\u0440"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "checkbox-section__container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    name: "chair",
    checked: chair,
    onChange: function onChange(e) {
      return handleInputChange(e, 6);
    },
    className: "checkbox-section__input"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "checkbox-section__checkmark"
  }), "\u0414\u0435\u0442\u0441\u043A\u043E\u0435 \u043A\u0440\u0435\u0441\u043B\u043E, 200\u0440"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "checkbox-section__container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    name: "wheel",
    checked: wheel,
    onChange: function onChange(e) {
      return handleInputChange(e, 7);
    },
    className: "checkbox-section__input"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "checkbox-section__checkmark"
  }), "\u041F\u0440\u0430\u0432\u044B\u0439 \u0440\u0443\u043B\u044C, 1600\u0440"));
}

/***/ }),

/***/ "./components/Options/OptionsTariff.jsx":
/*!**********************************************!*\
  !*** ./components/Options/OptionsTariff.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OptionsTariff; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function OptionsTariff(props) {
  function handleInputChange(e) {
    props.menuTariffChange("value", e.target.value, 4);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-options__group body-main-options__group--display"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "radio-section__container radio-section__container--margin"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "radio",
    name: "tariff",
    value: "\u041F\u043E\u043C\u0438\u043D\u0443\u0442\u043D\u043E",
    onChange: handleInputChange,
    className: "radio-section__input"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "radio-section__checkmark"
  }), "\u041F\u043E\u043C\u0438\u043D\u0443\u0442\u043D\u043E, 7\u20BD/\u043C\u0438\u043D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "radio-section__container radio-section__container--margin"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "radio",
    name: "tariff",
    value: "\u041D\u0430 \u0441\u0443\u0442\u043A\u0438",
    onChange: handleInputChange,
    className: "radio-section__input"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "radio-section__checkmark"
  }), "\u041D\u0430 \u0441\u0443\u0442\u043A\u0438, 1999 \u20BD/\u0441\u0443\u0442\u043A\u0438"));
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
  function OrderButton() {
    var button;

    switch (props.step) {
      case 1:
        button = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "button body-main-order__button",
          disabled: !props.order[0].city || !props.order[0].place,
          onClick: props.onButtonClick
        }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C");
        break;

      case 2:
        button = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "button body-main-order__button",
          disabled: !props.order[1].value,
          onClick: props.onButtonClick
        }, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E");
        break;

      case 3:
        button = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "button body-main-order__button",
          disabled: !props.order[3].value || !props.order[4].value,
          onClick: props.onButtonClick
        }, "\u0418\u0442\u043E\u0433\u043E");
        break;

      case 4:
        button = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "button body-main-order__button",
          onClick: props.onButtonClick
        }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C");
        break;
    }

    return button;
  }

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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0426\u0435\u043D\u0430: "), "\u043E\u0442 8 000 \u0434\u043E 12 000 \u20BD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderButton, null)));
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
  }, item.value === true ? "Да" : item.value);
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

/***/ "./components/Total/Total.jsx":
/*!************************************!*\
  !*** ./components/Total/Total.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Total; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Total(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-total__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-total"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-total__container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-total__descr"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-main-total__model"
  }, props.name, ", ", props.model), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-main-total__number"
  }, props.number.toUpperCase()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-main-total__fuel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0422\u043E\u043F\u043B\u0438\u0432\u043E "), props.isFull ? "100%" : props.fuel), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-main-total__since"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0441 "), props.since)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-total__img"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./images/orderpage/cars/".concat(props.model, ".jpg"),
    alt: "",
    className: "body-main-total__image"
  })))));
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