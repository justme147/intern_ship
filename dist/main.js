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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Location_Location_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location/Location.jsx */ "./components/Location/Location.jsx");
/* harmony import */ var _Model_Model_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Model/Model.jsx */ "./components/Model/Model.jsx");
/* harmony import */ var _Options_Options_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Options/Options.jsx */ "./components/Options/Options.jsx");
/* harmony import */ var _Total_Total_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Total/Total.jsx */ "./components/Total/Total.jsx");
/* harmony import */ var _Pages_MainPage_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages/MainPage.jsx */ "./components/Pages/MainPage.jsx");
/* harmony import */ var _layouts_OrderLayout_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/OrderLayout.jsx */ "./components/layouts/OrderLayout.jsx");
/* harmony import */ var _Pages_AdminPanel_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pages/AdminPanel.jsx */ "./components/Pages/AdminPanel.jsx");
/* harmony import */ var _Pages_AdminAuth_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pages/AdminAuth.jsx */ "./components/Pages/AdminAuth.jsx");
/* harmony import */ var _layouts_AdminLayout_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/AdminLayout.jsx */ "./components/layouts/AdminLayout.jsx");
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
      // const order = this.state.order;
      var history = _this.state.history;
      var current = history[history.length - 1];
      var order = current.order;

      _this.setState({
        isActive: _this.state.isActive < 4 ? _this.state.isActive + 1 : 4,
        isModal: _this.state.isActive === 4 ? true : false,
        history: _this.state.history.concat({
          order: order
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOrderChange", function (name, value, index) {
      var history = _this.state.history;
      var current = history[history.length - 1];
      var newOrder = current.order.slice(); // const newOrder = this.state.order.slice();

      newOrder[index][name] = value;
      history[history.length - 1].order = newOrder; // console.log(history);

      _this.setState({
        history: history
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleModelClick", function (value) {
      _this.setState({
        colorsCar: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDateInputChange", function (e, index) {
      _this.handleOrderChange(e.target.name, e.target.value, index);

      var history = _this.state.history;
      var current = history[history.length - 1];
      var order = current.order; // const since = this.state.order[index].since;
      // const by = this.state.order[index].by;

      var since = order[index].since;
      var by = order[index].by;
      var from = new Date(since.replace(/(\d+).(\d+).(\d+)/, "$3.$2.$1"));
      var to = new Date(by.replace(/(\d+).(\d+).(\d+)/, "$3.$2.$1"));
      var time = new Date(to - from);
      var month = time.getMonth();
      var day = time.getDate() - 1;
      var hours = time.getHours() + time.getTimezoneOffset() / 60;
      hours = hours < 0 ? 24 + hours : hours;
      var minutes = time.getMinutes();
      var datetime = [];
      month ? datetime.push(month + "м") : null;
      day ? datetime.push(day + "д") : null;
      hours ? datetime.push(hours + "ч") : null;
      minutes ? datetime.push(minutes + "мин") : null;

      _this.handleOrderChange("value", datetime.join(" "), index);
    });

    _this.state = {
      history: [{
        order: [{
          city: "",
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
        }]
      }],
      isActive: 1,
      isModal: false,
      orderId: "RU".concat(Date.now()),
      colorsCar: [] // order: [
      //   {
      //     city: "",
      //     place: "",
      //     title: "Пункт выдачи",
      //   },
      //   {
      //     name: "",
      //     number: "",
      //     value: "",
      //     fuel: "",
      //     title: "Модель",
      //   },
      //   {
      //     value: "",
      //     title: "Цвет",
      //   },
      //   {
      //     value: "",
      //     title: "Длительность аренды",
      //     since: new Date().toLocaleString().slice(0, -3).replace(",", ""),
      //     by: "",
      //   },
      //   {
      //     value: "",
      //     title: "Тариф",
      //   },
      //   {
      //     value: false,
      //     title: "Полный бак",
      //   },
      //   {
      //     value: false,
      //     title: "Детское кресло",
      //   },
      //   {
      //     value: false,
      //     title: "Правый руль",
      //   },
      // ],

    };
    _this.handleMenuClick = _this.handleMenuClick.bind(_assertThisInitialized(_this));
    _this.handleButtonClick = _this.handleButtonClick.bind(_assertThisInitialized(_this));
    _this.handleOrderChange = _this.handleOrderChange.bind(_assertThisInitialized(_this));
    _this.handleDateInputChange = _this.handleDateInputChange.bind(_assertThisInitialized(_this));
    _this.handleButtonDeclineClick = _this.handleButtonDeclineClick.bind(_assertThisInitialized(_this));
    _this.handleModelClick = _this.handleModelClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var isActive = this.state.isActive;
      var history = this.state.history;
      var current = history[history.length - 1];
      var order = current.order;
      var renderStep;

      switch (this.state.isActive) {
        case 1:
          renderStep = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Location_Location_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
            city: order[0].city,
            place: order[0].place // city={this.state.order[0].city}
            // place={this.state.order[0].place}
            ,
            onInputChange: this.handleOrderChange
          });
          break;

        case 2:
          renderStep = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Model_Model_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            onMenuItemClick: this.handleOrderChange,
            onModelClick: this.handleModelClick
          });
          break;

        case 3:
          renderStep = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Options_Options_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
            since: order[3].since,
            by: order[3].by // since={this.state.order[3].since}
            // by={this.state.order[3].by}
            ,
            onOrderChange: this.handleOrderChange,
            onInputDateChange: this.handleDateInputChange,
            colors: this.state.colorsCar
          });
          break;

        case 4:
          renderStep = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Total_Total_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
            since: order[3].since,
            name: order[1].name,
            model: order[1].value,
            number: order[1].number,
            fuel: order[1].fuel,
            isFull: order[5].value // since={this.state.order[3].since}
            // name={this.state.order[1].name}
            // model={this.state.order[1].value}
            // number={this.state.order[1].number}
            // fuel={this.state.order[1].fuel}
            // isFull={this.state.order[5].value}

          });
          break;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/",
        exact: true,
        component: _Pages_MainPage_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/order"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_OrderLayout_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        isActive: isActive,
        handleMenuClick: this.handleMenuClick,
        renderStep: renderStep // order={this.state.order}
        ,
        order: order,
        handleButtonClick: this.handleButtonClick,
        isModal: this.state.isModal,
        handleButtonDeclineClick: this.handleButtonDeclineClick,
        orderId: this.state.orderId
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/admin",
        exact: true,
        component: _layouts_AdminLayout_jsx__WEBPACK_IMPORTED_MODULE_10__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/admin/login",
        component: _Pages_AdminAuth_jsx__WEBPACK_IMPORTED_MODULE_9__["default"]
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/CarCard/CarCard.jsx":
/*!****************************************!*\
  !*** ./components/CarCard/CarCard.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CarCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function CarCard() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/orderpage/cars/i30 N.jpg",
    alt: "",
    className: "body-main__image"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "body-main__model"
  }, "Hyndai, i30 N"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-main__type"
  }, "\u041A\u043E\u043C\u043F\u0430\u043A\u0442-\u043A\u0430\u0440"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "body-main__file"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "body-main__choose"
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "body-main__overview"
  }, "\u041E\u0431\u0437\u043E\u0440"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__fuel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__filled"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "body-main__label"
  }, "\u0417\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-main__percent"
  }, "74%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__progress"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__current"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__description"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "body-main__label body-main__label--bold"
  }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-main__text"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae quod dolorum sint alias, possimus illum assumenda eligendi cumque?")));
}

/***/ }),

/***/ "./components/CarCard/CarSetting.jsx":
/*!*******************************************!*\
  !*** ./components/CarCard/CarSetting.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CarSetting; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Checkbox_AdminCheckbox_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Checkbox/AdminCheckbox.jsx */ "./components/Checkbox/AdminCheckbox.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function CarSetting() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: 1,
    color: "Красный"
  }, {
    id: 2,
    color: "Белый"
  }, {
    id: 3,
    color: "Черный"
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      colors = _useState2[0],
      setColors = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__settings"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "body-main__subtitle"
  }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__wrap body-main__wrap--nowrap body-main__wrap--margin"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "body-main__group"
  }, "\u041C\u043E\u0434\u0435\u043B\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "body-main__input",
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043C\u043E\u0434\u0435\u043B\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "body-main__group body-main__group--red"
  }, "\u0422\u0438\u043F \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "body-main__input",
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0438\u043F \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "body-main__error"
  }, "\u041F\u0440\u0438\u043C\u0435\u0440 \u043E\u0448\u0438\u0431\u043A\u0438"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__wrap body-main__wrap--end"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "body-main__group body-main__group--margin"
  }, "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "body-main__input",
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0432\u0435\u0442 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "body-main__create"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__checkbox-group body-main__checkbox-group--margin"
  }, colors.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Checkbox_AdminCheckbox_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      text: item.color,
      key: item.id,
      blue: true
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__wrap body-main__wrap--between"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__edit"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "body-main__button body-main__button--blue"
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "body-main__button body-main__button--gray"
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__delete"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "body-main__button body-main__button--red"
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))));
}

/***/ }),

/***/ "./components/Checkbox/AdminCheckbox.jsx":
/*!***********************************************!*\
  !*** ./components/Checkbox/AdminCheckbox.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminCheckbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function AdminCheckbox(props) {
  var spanClasses = ["checkbox-section__checkmark"];

  if (props.blue) {
    spanClasses.push("checkbox-section__checkmark--blue");
  }

  if (props.border) {
    spanClasses.push("checkbox-section__checkmark--border");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "checkbox-section__container checkbox-section__container--color"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "checkbox-section__input"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: spanClasses.join(" ")
  }), props.text);
}

/***/ }),

/***/ "./components/Footer/Admin/Footer.jsx":
/*!********************************************!*\
  !*** ./components/Footer/Admin/Footer.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Footer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: 1,
    title: "Главная страница",
    url: "/"
  }, {
    id: 2,
    title: "Ссылка",
    url: "/admin"
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      menuItem = _useState2[0],
      setMenuItem = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "body-footer body-footer--flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "body-footer__ul"
  }, menuItem.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: item.id,
      className: "body-footer__li"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: item.url
    }, item.title));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-footer__copyright"
  }, "Copyright \xA9 2020 Simbirsoft"));
}

/***/ }),

/***/ "./components/Header/Admin/Header.jsx":
/*!********************************************!*\
  !*** ./components/Header/Admin/Header.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeaderSearch_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderSearch.jsx */ "./components/Header/Admin/HeaderSearch.jsx");
/* harmony import */ var _HeaderNotification_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderNotification.jsx */ "./components/Header/Admin/HeaderNotification.jsx");
/* harmony import */ var _HeaderUser_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderUser.jsx */ "./components/Header/Admin/HeaderUser.jsx");




function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "body-header body-header--flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderSearch_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-header__wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderNotification_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderUser_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}

/***/ }),

/***/ "./components/Header/Admin/HeaderNotification.jsx":
/*!********************************************************!*\
  !*** ./components/Header/Admin/HeaderNotification.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderNotification; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function HeaderNotification() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-header__notification"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/adminpanel/notifications_icon.svg",
    alt: "",
    className: "body-header__icon body-header__icon--width"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "body-header__count"
  }, "2"));
}

/***/ }),

/***/ "./components/Header/Admin/HeaderSearch.jsx":
/*!**************************************************!*\
  !*** ./components/Header/Admin/HeaderSearch.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function HeaderSearch() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-header__search"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "body-header__label"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/adminpanel/search_icon.svg",
    alt: "",
    className: "body-header_icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "body-header__input",
    placeholder: "\u041F\u043E\u0438\u0441\u043A ..."
  })));
}

/***/ }),

/***/ "./components/Header/Admin/HeaderUser.jsx":
/*!************************************************!*\
  !*** ./components/Header/Admin/HeaderUser.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function HeaderUser() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-header__user"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/adminpanel/avatar.jpg",
    alt: "",
    className: "body-header__avatar"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-header__name"
  }, "Admin"), "\u25BC");
}

/***/ }),

/***/ "./components/Header/Header.jsx":
/*!**************************************!*\
  !*** ./components/Header/Header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");


function Header(props) {
  var classes = ["body-header__inner"];

  if (props.padding) {
    classes.push("body-header__inner--padding");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.join(" ")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    className: "body-header__logo"
  }, "Need for drive"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-header__location"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/startscreen/icon_map_marker.svg",
    alt: "map_marker",
    className: "body-header__icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-header__text"
  }, "\u0423\u043B\u044C\u044F\u043D\u043E\u0432\u0441\u043A")));
}

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
    name: "city",
    placeholder: "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0432\u0432\u043E\u0434\u0438\u0442\u044C \u0433\u043E\u0440\u043E\u0434 \u0432\u044B\u0434\u0430\u0447\u0438"
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");


function Modal(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal__content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "modal__title"
  }, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/order/".concat(props.orderId)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button button__accept",
    onClick: props.onButtonDeclineClick
  }, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
    fuel: "36%",
    color: ["Красный", "Белый", "Коричневый"]
  }, {
    id: 2,
    model: "i30 N",
    price: "10 000 - 32 000 Р",
    class: "premium",
    name: "Hyndai",
    number: "Л 235 ЛК 73",
    fuel: "85%",
    color: ["Зеленый", "Красный", "Синий"]
  }, {
    id: 3,
    model: "CRETA",
    price: "12 000 - 25 000 Р",
    class: "premium",
    name: "Hyndai",
    number: "Р 359 ВО 73",
    fuel: "91%",
    color: ["Желтый", "Белый", "Красный"]
  }, {
    id: 4,
    model: "SONATA",
    price: "10 000 - 32 000 Р",
    class: "eco",
    name: "Hyndai",
    number: "А 193 МН 73",
    fuel: "3%",
    color: ["Черный", "Красный", "Голубой"]
  }, {
    id: 5,
    model: "ELANTRA",
    price: "12 000 - 15 000 Р",
    class: "premium",
    name: "Hyndai",
    number: "А 111 БВ 73",
    fuel: "100%",
    color: ["Красный", "Оранжевый", "Зеленый"]
  }, {
    id: 6,
    model: "i30 N",
    price: "10 000 - 32 000 Р",
    class: "premium",
    name: "Hyndai",
    number: "Б 222 ГД 73",
    fuel: "55%",
    color: ["Белый", "Красный", "Серый"]
  }, {
    id: 7,
    model: "CRETA",
    price: "12 000 - 25 000 Р",
    class: "eco",
    name: "Hyndai",
    number: "Д 333 ЕК 73",
    fuel: "86%",
    color: ["Красный", "Оранжевый", "Белый"]
  }, {
    id: 8,
    model: "SONATA",
    price: "10 000 - 32 000 Р",
    class: "eco",
    name: "Hyndai",
    number: "Е 444 УК 73",
    fuel: "30%",
    color: ["Красный", "Черный", "Белый"]
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

  function handleItemClick(id, model, name, number, fuel, colors) {
    var color = ["Любой"];
    setSelect(id);
    props.onMenuItemClick("value", model, 1);
    props.onMenuItemClick("name", name, 1);
    props.onMenuItemClick("number", number, 1);
    props.onMenuItemClick("fuel", fuel, 1);
    props.onModelClick(color.concat(colors));
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
    onMenuItemClick(car.id, car.model, car.name, car.number, car.fuel, car.color);
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

/***/ "./components/Navbar/Admin/Navbar.jsx":
/*!********************************************!*\
  !*** ./components/Navbar/Admin/Navbar.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavbarHeader_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarHeader.jsx */ "./components/Navbar/Admin/NavbarHeader.jsx");
/* harmony import */ var _NavbarMenu_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavbarMenu.jsx */ "./components/Navbar/Admin/NavbarMenu.jsx");



function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "sidebar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar__container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "sidebar__menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarHeader_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarMenu_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
}

/***/ }),

/***/ "./components/Navbar/Admin/NavbarHeader.jsx":
/*!**************************************************!*\
  !*** ./components/Navbar/Admin/NavbarHeader.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavbarHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");


function NavbarHeader() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "sidebar__header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/adminpanel/logo.svg",
    alt: "",
    className: "sidebar__image"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    className: "sidebar__title"
  }, "Need for drive"));
}

/***/ }),

/***/ "./components/Navbar/Admin/NavbarMenu.jsx":
/*!************************************************!*\
  !*** ./components/Navbar/Admin/NavbarMenu.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavbarMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavbarMenuItem_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarMenuItem.jsx */ "./components/Navbar/Admin/NavbarMenuItem.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function NavbarMenu() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: 1,
    title: "Карточка автомобиля",
    url: "/car-setting"
  }, {
    id: 2,
    title: "Список авто",
    url: "/car-list"
  }, {
    id: 3,
    title: "Заказы",
    url: "/order-list"
  }, {
    id: 4,
    title: "Menu 4",
    url: ""
  }, {
    id: 5,
    title: "Menu 5",
    url: ""
  }, {
    id: 6,
    title: "Menu 6",
    url: ""
  }, {
    id: 7,
    title: "Menu 7",
    url: ""
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      menuItem = _useState2[0],
      setMenuItem = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      active = _useState4[0],
      setActive = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "sidebar__list"
  }, menuItem.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarMenuItem_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: item.id,
      item: item,
      active: active,
      onItemClick: function onItemClick() {
        return setActive(item.id);
      }
    });
  }));
}

/***/ }),

/***/ "./components/Navbar/Admin/NavbarMenuItem.jsx":
/*!****************************************************!*\
  !*** ./components/Navbar/Admin/NavbarMenuItem.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavbarMenuItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");


function NavbarMenuItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: props.onItemClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/admin".concat(props.item.url),
    className: props.active !== props.item.id ? "sidebar__item" : "sidebar__item active"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/adminpanel/menu_item_".concat(props.item.id, ".svg"),
    alt: "",
    className: "sidebar__icon"
  }), props.item.title));
}

/***/ }),

/***/ "./components/Navbar/BurgerMenu.jsx":
/*!******************************************!*\
  !*** ./components/Navbar/BurgerMenu.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BurgerMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function BurgerMenu(props) {
  var burgerClasses = ["burger"];
  var innerClasses = ["burger__inner"];
  var itemClasses = ["burger__item"];

  if (props.burger) {
    burgerClasses.push("body-header-burger");
  }

  if (props.padding) {
    innerClasses.push("burger__inner--padding_t");
  }

  if (props.border) {
    itemClasses.push("burger__item--border_bcg");
  }

  if (props.close) {
    itemClasses.push("burger__item--close");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: burgerClasses.join(" ")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: innerClasses.join(" ")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: itemClasses.join(" ")
  })));
}

/***/ }),

/***/ "./components/Navbar/LangSwitch.jsx":
/*!******************************************!*\
  !*** ./components/Navbar/LangSwitch.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LangSwitch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function LangSwitch(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      isEng = _useState2[0],
      setIsEng = _useState2[1];

  var classes = ["sidebar-lang-switch"];

  if (props.display) {
    classes.push("sidebar-lang-switch__display");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.join(" ")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "sidebar-lang-switch__button",
    onClick: function onClick() {
      return setIsEng(!isEng);
    }
  }, isEng ? "Eng" : "Рус"));
}

/***/ }),

/***/ "./components/Navbar/MenuItem.jsx":
/*!****************************************!*\
  !*** ./components/Navbar/MenuItem.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function MenuItem(props) {
  var classes = ["list__item"];

  if (props.social) {
    classes.push("list__item--social");
  }

  function socialItem() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      className: "list__link"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./images/startscreen/icon_".concat(props.icon, ".svg"),
      alt: props.icon,
      className: "list__image"
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: classes.join(" ")
  }, !props.social ? props.text : socialItem());
}

/***/ }),

/***/ "./components/Navbar/MenuList.jsx":
/*!****************************************!*\
  !*** ./components/Navbar/MenuList.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuItem_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem.jsx */ "./components/Navbar/MenuItem.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function MenuList() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: 1,
    text: "Парковка"
  }, {
    id: 2,
    text: "Страховка"
  }, {
    id: 3,
    text: "Бензин"
  }, {
    id: 4,
    text: "Обслуживание"
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: 1,
    icon: "telegram"
  }, {
    id: 2,
    icon: "facebook"
  }, {
    id: 3,
    icon: "instagram"
  }]),
      _useState4 = _slicedToArray(_useState3, 2),
      social = _useState4[0],
      setSocial = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "list__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list"
  }, list.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: item.id,
      text: item.text
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list list--flex"
  }, social.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: item.id,
      icon: item.icon,
      social: true
    });
  })));
}

/***/ }),

/***/ "./components/Navbar/Navbar.jsx":
/*!**************************************!*\
  !*** ./components/Navbar/Navbar.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LangSwitch_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LangSwitch.jsx */ "./components/Navbar/LangSwitch.jsx");
/* harmony import */ var _BurgerMenu_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BurgerMenu.jsx */ "./components/Navbar/BurgerMenu.jsx");



function Navbar(props) {
  var classes = ["sidebar"];

  if (props.fixed) {
    classes.push("sidebar--fixed");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: classes.join(" ")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BurgerMenu_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    padding: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LangSwitch_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
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
    menuColorChange: props.onOrderChange,
    colors: props.colors
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
/* harmony import */ var _RadioButton_RadioButton_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../RadioButton/RadioButton.jsx */ "./components/RadioButton/RadioButton.jsx");


function OptionsColor(props) {
  function handleInputChange(e) {
    props.menuColorChange("value", e.target.value, 2);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-options__group"
  }, props.colors.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RadioButton_RadioButton_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "color",
      value: item,
      inputChange: handleInputChange,
      key: item
    });
  }));
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
/* harmony import */ var _RadioButton_RadioButton_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../RadioButton/RadioButton.jsx */ "./components/RadioButton/RadioButton.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function OptionsTariff(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: 1,
    value: "Поминутно",
    title: "Поминутно, 7₽/мин"
  }, {
    id: 2,
    value: "На сутки",
    title: "На сутки, 1999 ₽/сутки"
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  function handleInputChange(e) {
    props.menuTariffChange("value", e.target.value, 4);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main-options__group body-main-options__group--display"
  }, value.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RadioButton_RadioButton_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "tariff",
      value: item.value,
      title: item.title,
      inputChange: handleInputChange,
      key: item.id,
      labelClass: "radio-section__container--margin"
    });
  }));
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

/***/ "./components/Pages/AdminAuth.jsx":
/*!****************************************!*\
  !*** ./components/Pages/AdminAuth.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");

 // import EmptyAdminLayout from "../layouts/EmptyAdminLayout.jsx";

function AdminAuth() {
  return (// <EmptyAdminLayout>
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container__content container__content--gray container__content--center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "auth"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "auth__row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/images/adminpanel/logo.svg",
      alt: "logo",
      className: "auth__logo"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "auth__title"
    }, "Need for drive")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "auth__content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "auth__subtitle"
    }, "\u0412\u0445\u043E\u0434"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "auth__form"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "auth__label"
    }, "\u041F\u043E\u0447\u0442\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "email",
      className: "auth__input"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "auth__label"
    }, "\u041F\u0430\u0440\u043E\u043B\u044C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "password",
      className: "auth__input"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "auth__row auth__row--between"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "auth__link"
    }, "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/admin"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "button auth__button"
    }, "\u0412\u043E\u0439\u0442\u0438"))))))))) // </EmptyAdminLayout>

  );
}

/***/ }),

/***/ "./components/Pages/AdminCarList.jsx":
/*!*******************************************!*\
  !*** ./components/Pages/AdminCarList.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminCarList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_AdminBodyLayout_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/AdminBodyLayout.jsx */ "./components/layouts/AdminBodyLayout.jsx");


function AdminCarList() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_AdminBodyLayout_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "\u0421\u043F\u0438\u0441\u043E\u043A \u0430\u0432\u0442\u043E"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__order"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__options"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__select-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__arrows"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "",
    id: "",
    className: "body-main__select"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Field"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Field"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Field"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Field"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__select-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__arrows"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "",
    id: "",
    className: "body-main__select"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Field"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Field"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Field"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Field"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__select-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__arrows"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "",
    id: "",
    className: "body-main__select"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Field"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Field"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Field"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Field"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__select-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__arrows"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "",
    id: "",
    className: "body-main__select"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Field"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Field"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Field"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Field")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__options"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "body-main__button body-main__button--red body-main__button--width"
  }, "Reset"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "body-main__button body-main__button--blue body-main__button--width body-main__button--marginL"
  }, "Apply"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__list body-main__list--padding"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "body-main__table"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Header"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Header"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Header"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Header"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Header"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Header"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Header"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Value"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Value"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Value"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Value"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Value"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Value"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Value"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "19,291"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__footer"
  })));
}

/***/ }),

/***/ "./components/Pages/AdminCarSetting.jsx":
/*!**********************************************!*\
  !*** ./components/Pages/AdminCarSetting.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminCarSetting; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_AdminBodyLayout_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/AdminBodyLayout.jsx */ "./components/layouts/AdminBodyLayout.jsx");
/* harmony import */ var _CarCard_CarCard_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CarCard/CarCard.jsx */ "./components/CarCard/CarCard.jsx");
/* harmony import */ var _CarCard_CarSetting_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CarCard/CarSetting.jsx */ "./components/CarCard/CarSetting.jsx");




function AdminCarSetting() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_AdminBodyLayout_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CarCard_CarCard_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CarCard_CarSetting_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}

/***/ }),

/***/ "./components/Pages/AdminError.jsx":
/*!*****************************************!*\
  !*** ./components/Pages/AdminError.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function AdminError() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "body-main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__container body-main__container--center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "body-main__title body-main__title--gray"
  }, "500"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "body-main__subtitle body-main__subtitle--size"
  }, "\u0427\u0442\u043E \u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-main__text body-main__text--size"
  }, "\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "body-main__button body-main__button--blue body-main__button--width body-main__button--margin"
  }, "\u041D\u0430\u0437\u0430\u0434")));
}

/***/ }),

/***/ "./components/Pages/AdminOrderList.jsx":
/*!*********************************************!*\
  !*** ./components/Pages/AdminOrderList.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminOrderList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_AdminBodyLayout_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/AdminBodyLayout.jsx */ "./components/layouts/AdminBodyLayout.jsx");
/* harmony import */ var _Checkbox_AdminCheckbox_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Checkbox/AdminCheckbox.jsx */ "./components/Checkbox/AdminCheckbox.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function AdminOrderList() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: 1,
    text: "Полный бак"
  }, {
    id: 2,
    text: "Детское кресло"
  }, {
    id: 3,
    text: "Правый руль"
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_AdminBodyLayout_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "\u0417\u0430\u043A\u0430\u0437\u044B"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__order"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__header body-main__header--border"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__options"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__select-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__arrows"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "",
    id: "",
    className: "body-main__select"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "\u0417\u0430 \u0433\u043E\u0434"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "\u0417\u0430 \u043C\u0435\u0441\u044F\u0446"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "\u0417\u0430 \u043D\u0435\u0434\u0435\u043B\u044E"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "\u0417\u0430 \u0434\u0435\u043D\u044C"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__select-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__arrows"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "",
    id: "",
    className: "body-main__select"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Sonata"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Elantra"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "i30 N"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Creta"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__select-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__arrows"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "",
    id: "",
    className: "body-main__select"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "\u0423\u043B\u044C\u044F\u043D\u043E\u0432\u0441\u043A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "\u041C\u043E\u0441\u043A\u0432\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "\u0421\u0430\u043C\u0430\u0440\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "\u041A\u0430\u0437\u0430\u043D\u044C"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__select-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__arrows"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "",
    id: "",
    className: "body-main__select"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "\u041D\u0435 \u043D\u0430\u0447\u0430\u0442\u043E"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "body-main__button body-main__button--blue body-main__button--width"
  }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__car"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/orderpage/cars/ELANTRA.jpg",
    alt: "",
    className: "body-main__image body-main__image--width"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__descr"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-main__text body-main__text--light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("font", null, "ELANTRA"), " \u0432 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("font", null, "\u0423\u043B\u044C\u044F\u043D\u043E\u0432\u0441\u043A"), ", \u041D\u0430\u0440\u0438\u043C\u0430\u043D\u043E\u0432\u0430 42"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-main__text body-main__text--light"
  }, "12.06.2019 12:00 \u2014 13.06.2019 12:00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-main__text body-main__text--light"
  }, "\u0426\u0432\u0435\u0442: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("font", null, "\u0413\u043E\u043B\u0443\u0431\u043E\u0439")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__checkbox-group"
  }, options.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Checkbox_AdminCheckbox_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: item.text,
      key: item.id,
      border: true
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__price"
  }, "4 300 \u20BD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__btn-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "body-main__action body-main__action--accept"
  }, "\u0413\u043E\u0442\u043E\u0432\u043E"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "body-main__action body-main__action--decline"
  }, "\u041E\u0442\u043C\u0435\u043D\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "body-main__action body-main__action--change"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__footer body-main__footer--border"
  })));
}

/***/ }),

/***/ "./components/Pages/AdminPanel.jsx":
/*!*****************************************!*\
  !*** ./components/Pages/AdminPanel.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _AdminAuth_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminAuth.jsx */ "./components/Pages/AdminAuth.jsx");
/* harmony import */ var _layouts_AdminLayout_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/AdminLayout.jsx */ "./components/layouts/AdminLayout.jsx");




function AdminPanel() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/admin",
    exact: true,
    component: _layouts_AdminLayout_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/admin/login",
    component: _AdminAuth_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]
  }))));
}

/***/ }),

/***/ "./components/Pages/MainPage.jsx":
/*!***************************************!*\
  !*** ./components/Pages/MainPage.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Navbar_Navbar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navbar/Navbar.jsx */ "./components/Navbar/Navbar.jsx");
/* harmony import */ var _Navbar_LangSwitch_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navbar/LangSwitch.jsx */ "./components/Navbar/LangSwitch.jsx");
/* harmony import */ var _Header_Header_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header/Header.jsx */ "./components/Header/Header.jsx");
/* harmony import */ var _Navbar_BurgerMenu_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Navbar/BurgerMenu.jsx */ "./components/Navbar/BurgerMenu.jsx");
/* harmony import */ var _Slider_Slider_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Slider/Slider.jsx */ "./components/Slider/Slider.jsx");
/* harmony import */ var _Navbar_MenuList_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Navbar/MenuList.jsx */ "./components/Navbar/MenuList.jsx");








function MainPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container__content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_Navbar_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "body-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-header__containerXS"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_BurgerMenu_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    burger: true,
    border: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-content__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "body-content__title"
  }, "\u041A\u0430\u0440\u0448\u0435\u0440\u0438\u043D\u0433"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "body-content__subtitle"
  }, "Need for drive"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-content__text"
  }, "\u041F\u043E\u043C\u0438\u043D\u0443\u0442\u043D\u0430\u044F \u0430\u0440\u0435\u043D\u0434\u0430 \u0430\u0432\u0442\u043E \u0442\u0432\u043E\u0435\u0433\u043E \u0433\u043E\u0440\u043E\u0434\u0430")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/order"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button body-content__button"
  }, "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "body-footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-footer__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-footer__copy"
  }, "\xA9 2016-2019 \xABNeed for drive\xBB"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel:84952342244",
    className: "body-footer__phone"
  }, "8 (495) 234-22-44"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slider_Slider_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container__menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_BurgerMenu_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    padding: true,
    close: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_MenuList_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_LangSwitch_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    display: true
  }))))));
}

/***/ }),

/***/ "./components/Pages/OrderPage.jsx":
/*!****************************************!*\
  !*** ./components/Pages/OrderPage.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_Navbar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navbar/Navbar.jsx */ "./components/Navbar/Navbar.jsx");
/* harmony import */ var _Header_Header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/Header.jsx */ "./components/Header/Header.jsx");
/* harmony import */ var _Navigation_NavigationList_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navigation/NavigationList.jsx */ "./components/Navigation/NavigationList.jsx");
/* harmony import */ var _Order_Order_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Order/Order.jsx */ "./components/Order/Order.jsx");
/* harmony import */ var _Modal_Modal_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Modal/Modal.jsx */ "./components/Modal/Modal.jsx");






function OrderPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_NavigationList_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    active: props.isActive,
    menuClick: props.handleMenuClick
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__content"
  }, props.renderStep, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Order_Order_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    order: props.order,
    onButtonClick: props.handleButtonClick,
    step: props.isActive
  })), props.isModal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_Modal_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onButtonDeclineClick: props.handleButtonDeclineClick,
    orderId: props.orderId
  }) : ""));
}

/***/ }),

/***/ "./components/Pages/WatchPage.jsx":
/*!****************************************!*\
  !*** ./components/Pages/WatchPage.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation_NavigationList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navigation/NavigationList.jsx */ "./components/Navigation/NavigationList.jsx");
/* harmony import */ var _Order_Order_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Order/Order.jsx */ "./components/Order/Order.jsx");
/* harmony import */ var _Total_Total_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Total/Total.jsx */ "./components/Total/Total.jsx");




function OrderPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-list__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "body-list__orderId"
  }, "\u0417\u0430\u043A\u0430\u0437 \u043D\u043E\u043C\u0435\u0440 ", props.orderId)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Total_Total_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    since: props.since,
    name: props.name,
    model: props.model,
    number: props.number,
    fuel: props.fuel,
    isFull: props.isFull
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Order_Order_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    order: props.order,
    onButtonClick: props.handleButtonClick,
    step: props.isActive
  }))));
}

/***/ }),

/***/ "./components/RadioButton/RadioButton.jsx":
/*!************************************************!*\
  !*** ./components/RadioButton/RadioButton.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RadioButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function RadioButton(props) {
  var labelClasses = ["radio-section__container"];
  props.labelClass ? labelClasses.push(props.labelClass) : null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: labelClasses.join(" ")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "radio",
    name: props.name,
    value: props.value,
    onChange: props.inputChange,
    className: "radio-section__input"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "radio-section__checkmark"
  }), props.title ? props.title : props.value);
}

/***/ }),

/***/ "./components/Slider/Slider.jsx":
/*!**************************************!*\
  !*** ./components/Slider/Slider.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scripts/slider.js */ "./scripts/slider.js");
/* harmony import */ var _SliderItem_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SliderItem.jsx */ "./components/Slider/SliderItem.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Slider() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: 1,
    title: "Бесплатная парковка",
    text: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах."
  }, {
    id: 2,
    title: "Страховка",
    text: "Полная страховка страховка автомобиля"
  }, {
    id: 3,
    title: "Бензин",
    text: "Полный бак на любой заправке города за наш счёт"
  }, {
    id: 4,
    title: "Обслуживание",
    text: "Автомобиль проходит еженедельное ТО"
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      sliderList = _useState2[0],
      setSliderList = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_scripts_slider_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "slider"
  }, sliderList.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SliderItem_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: item,
      key: item.id
    });
  }));
}

/***/ }),

/***/ "./components/Slider/SliderItem.jsx":
/*!******************************************!*\
  !*** ./components/Slider/SliderItem.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function SliderItem(props) {
  var item = props.item;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slider__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slider__image slider__image--slide".concat(item.id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slider__bcg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slider-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slider-content__top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "slider-content__title"
  }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "slider-content__text"
  }, item.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button slider-content__button slider-content__button--bcg".concat(item.id)
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"))))));
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
    src: "/images/orderpage/cars/".concat(props.model, ".jpg"),
    alt: "",
    className: "body-main-total__image"
  })))));
}

/***/ }),

/***/ "./components/layouts/AdminBodyLayout.jsx":
/*!************************************************!*\
  !*** ./components/layouts/AdminBodyLayout.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminBodyLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function AdminBodyLayout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "body-main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-main__container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "body-main__title"
  }, props.title), props.children));
}

/***/ }),

/***/ "./components/layouts/AdminLayout.jsx":
/*!********************************************!*\
  !*** ./components/layouts/AdminLayout.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Navbar_Admin_Navbar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navbar/Admin/Navbar.jsx */ "./components/Navbar/Admin/Navbar.jsx");
/* harmony import */ var _Header_Admin_Header_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header/Admin/Header.jsx */ "./components/Header/Admin/Header.jsx");
/* harmony import */ var _Pages_AdminCarSetting_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Pages/AdminCarSetting.jsx */ "./components/Pages/AdminCarSetting.jsx");
/* harmony import */ var _Pages_AdminCarList_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Pages/AdminCarList.jsx */ "./components/Pages/AdminCarList.jsx");
/* harmony import */ var _Pages_AdminOrderList_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Pages/AdminOrderList.jsx */ "./components/Pages/AdminOrderList.jsx");
/* harmony import */ var _Pages_AdminError_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Pages/AdminError.jsx */ "./components/Pages/AdminError.jsx");
/* harmony import */ var _Footer_Admin_Footer_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Footer/Admin/Footer.jsx */ "./components/Footer/Admin/Footer.jsx");









function AdminLayout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container__content container__content--gray"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_Admin_Navbar_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body__container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Admin_Header_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/admin/car-setting",
    component: _Pages_AdminCarSetting_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/admin/car-list",
    component: _Pages_AdminCarList_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/admin/order-list",
    component: _Pages_AdminOrderList_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Admin_Footer_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null)))))));
}

/***/ }),

/***/ "./components/layouts/OrderLayout.jsx":
/*!********************************************!*\
  !*** ./components/layouts/OrderLayout.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Navbar_Navbar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navbar/Navbar.jsx */ "./components/Navbar/Navbar.jsx");
/* harmony import */ var _Header_Header_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header/Header.jsx */ "./components/Header/Header.jsx");
/* harmony import */ var _Pages_OrderPage_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Pages/OrderPage.jsx */ "./components/Pages/OrderPage.jsx");
/* harmony import */ var _Pages_WatchPage_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Pages/WatchPage.jsx */ "./components/Pages/WatchPage.jsx");






function OrderLayout(props) {
  return (// <BrowserRouter>
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container__content container__content--order"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_Navbar_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fixed: true
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "body--order"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: "body-header"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      padding: true
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/order",
      exact: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_OrderPage_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isActive: props.isActive,
      handleMenuClick: props.handleMenuClick,
      renderStep: props.renderStep,
      order: props.order,
      handleButtonClick: props.handleButtonClick,
      isModal: props.isModal,
      handleButtonDeclineClick: props.handleButtonDeclineClick,
      orderId: props.orderId
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/order/".concat(props.orderId)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_WatchPage_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      order: props.order,
      handleButtonClick: props.handleButtonClick,
      isActive: props.isActive,
      orderId: props.orderId,
      since: props.order[3].since,
      name: props.order[1].name,
      model: props.order[1].value,
      number: props.order[1].number,
      fuel: props.order[1].fuel,
      isFull: props.order[5].value
    }))))))) // </BrowserRouter>

  );
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







react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_App_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null), document.getElementById("app"));

/***/ }),

/***/ "./scripts/slider.js":
/*!***************************!*\
  !*** ./scripts/slider.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slick; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel_slick_slick_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel/slick/slick.min.js */ "../node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel_slick_slick_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_min_js__WEBPACK_IMPORTED_MODULE_1__);


function slick() {
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
}

/***/ }),

/***/ "./scripts/startscreenmenu.js":
/*!************************************!*\
  !*** ./scripts/startscreenmenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toggleMenu; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
 // $(document).ready(function() {

function toggleMenu() {
  jquery__WEBPACK_IMPORTED_MODULE_0__(".burger").on("click", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0__(".container__menu").fadeToggle(200);
  });
} // });

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
  jquery__WEBPACK_IMPORTED_MODULE_0__("img.sidebar__icon").each(function () {
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