(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/containers/Home/messages.js":
/*!*****************************************!*\
  !*** ./src/containers/Home/messages.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.es.js\");\n/*\n * HomePage Messages\n *\n * This contains all the text for the HomePage component.\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_0__[\"defineMessages\"])({\n  home: {\n    id: 'common.home',\n    defaultMessage: 'Home'\n  }\n}));\n\n//# sourceURL=webpack:///./src/containers/Home/messages.js?");

/***/ }),

/***/ "./src/containers/Home/view.js":
/*!*************************************!*\
  !*** ./src/containers/Home/view.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! layouts */ \"./src/layouts/index.js\");\n/* harmony import */ var _LanguageProvider_components_LocaleToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LanguageProvider/components/LocaleToggle */ \"./src/containers/LanguageProvider/components/LocaleToggle/index.js\");\n/* harmony import */ var containers_LanguageProvider_IntlGlobalProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/LanguageProvider/IntlGlobalProvider */ \"./src/containers/LanguageProvider/IntlGlobalProvider.js\");\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ \"./src/containers/Home/messages.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(layouts__WEBPACK_IMPORTED_MODULE_1__[\"MainLayout\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, Object(containers_LanguageProvider_IntlGlobalProvider__WEBPACK_IMPORTED_MODULE_3__[\"trans\"])(_messages__WEBPACK_IMPORTED_MODULE_4__[\"default\"].home)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LanguageProvider_components_LocaleToggle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/containers/Home/view.js?");

/***/ }),

/***/ "./src/containers/LanguageProvider/actions/index.js":
/*!**********************************************************!*\
  !*** ./src/containers/LanguageProvider/actions/index.js ***!
  \**********************************************************/
/*! exports provided: changeLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeLocale\", function() { return changeLocale; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/containers/LanguageProvider/constants/index.js\");\n/*\n *\n * LanguageProvider actions\n *\n */\n\nfunction changeLocale(languageLocale) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_LOCALE\"],\n    locale: languageLocale\n  };\n}\n\n//# sourceURL=webpack:///./src/containers/LanguageProvider/actions/index.js?");

/***/ }),

/***/ "./src/containers/LanguageProvider/components/LocaleToggle/index.js":
/*!**************************************************************************!*\
  !*** ./src/containers/LanguageProvider/components/LocaleToggle/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reselect */ \"./node_modules/reselect/es/index.js\");\n/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Toggle */ \"./src/containers/LanguageProvider/components/Toggle/index.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../i18n */ \"./src/i18n.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions */ \"./src/containers/LanguageProvider/actions/index.js\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../selectors */ \"./src/containers/LanguageProvider/selectors/index.js\");\n/* harmony import */ var containers_LanguageProvider_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! containers/LanguageProvider/messages */ \"./src/containers/LanguageProvider/messages.js\");\n/*\n *\n * LanguageToggle\n *\n */\n\n\n\n\n\n\n\n\n\n\nvar LocaleToggle = function LocaleToggle(props) {\n  var locale = props.locale,\n      onLocaleToggle = props.onLocaleToggle;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Toggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    value: locale,\n    values: _i18n__WEBPACK_IMPORTED_MODULE_5__[\"appLocales\"],\n    messages: containers_LanguageProvider_messages__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    onToggle: onLocaleToggle\n  }));\n};\n\nLocaleToggle.propTypes = {\n  locale: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"],\n  onLocaleToggle: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"func\"]\n};\nvar mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_3__[\"createStructuredSelector\"])({\n  locale: Object(_selectors__WEBPACK_IMPORTED_MODULE_7__[\"makeSelectLocale\"])()\n});\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onLocaleToggle: function onLocaleToggle(evt) {\n      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__[\"changeLocale\"])(evt.target.value));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(LocaleToggle));\n\n//# sourceURL=webpack:///./src/containers/LanguageProvider/components/LocaleToggle/index.js?");

/***/ }),

/***/ "./src/containers/LanguageProvider/components/Toggle/index.js":
/*!********************************************************************!*\
  !*** ./src/containers/LanguageProvider/components/Toggle/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ToggleOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ToggleOption */ \"./src/containers/LanguageProvider/components/ToggleOption/index.js\");\n/**\n *\n * LocaleToggle\n *\n */\n\n\n\n\nfunction Toggle(props) {\n  var values = props.values,\n      value = props.value,\n      onToggle = props.onToggle,\n      messages = props.messages;\n  var content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"--\"); // If we have items, render them\n\n  if (values) {\n    content = values.map(function (v) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleOption__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        key: v,\n        value: v,\n        message: messages[v]\n      });\n    });\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    value: value,\n    onChange: onToggle\n  }, content);\n}\n\nToggle.propTypes = {\n  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,\n  messages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toggle);\n\n//# sourceURL=webpack:///./src/containers/LanguageProvider/components/Toggle/index.js?");

/***/ }),

/***/ "./src/containers/LanguageProvider/components/ToggleOption/index.js":
/*!**************************************************************************!*\
  !*** ./src/containers/LanguageProvider/components/ToggleOption/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.es.js\");\n/**\n *\n * ToggleOption\n *\n */\n\n\n\n\nvar ToggleOption = function ToggleOption(_ref) {\n  var value = _ref.value,\n      message = _ref.message,\n      intl = _ref.intl;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: value\n  }, message ? intl.formatMessage(message) : value);\n};\n\nToggleOption.propTypes = {\n  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  intl: react_intl__WEBPACK_IMPORTED_MODULE_2__[\"intlShape\"].isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"injectIntl\"])(ToggleOption));\n\n//# sourceURL=webpack:///./src/containers/LanguageProvider/components/ToggleOption/index.js?");

/***/ }),

/***/ "./src/containers/LanguageProvider/messages.js":
/*!*****************************************************!*\
  !*** ./src/containers/LanguageProvider/messages.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.es.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_0__[\"defineMessages\"])({\n  en: {\n    id: 'language.en',\n    defaultMessage: 'English'\n  },\n  ja: {\n    id: 'language.ja',\n    defaultMessage: 'Japan'\n  }\n}));\n\n//# sourceURL=webpack:///./src/containers/LanguageProvider/messages.js?");

/***/ }),

/***/ "./src/layouts/AuthLayout.js":
/*!***********************************!*\
  !*** ./src/layouts/AuthLayout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AuthLayout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! layouts */ \"./src/layouts/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar AuthLayout =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(AuthLayout, _Component);\n\n  function AuthLayout(props) {\n    _classCallCheck(this, AuthLayout);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(AuthLayout).call(this, props));\n  }\n\n  _createClass(AuthLayout, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(layouts__WEBPACK_IMPORTED_MODULE_2__[\"MasterLayout\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"AuthorContent\"\n      }, this.props.children));\n    }\n  }]);\n\n  return AuthLayout;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n_defineProperty(AuthLayout, \"propTypes\", {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"node\"]\n});\n\n\n\n//# sourceURL=webpack:///./src/layouts/AuthLayout.js?");

/***/ }),

/***/ "./src/layouts/MainLayout.js":
/*!***********************************!*\
  !*** ./src/layouts/MainLayout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainLayout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! layouts */ \"./src/layouts/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar MainLayout =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(MainLayout, _Component);\n\n  function MainLayout(props) {\n    _classCallCheck(this, MainLayout);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(MainLayout).call(this, props));\n  }\n\n  _createClass(MainLayout, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(layouts__WEBPACK_IMPORTED_MODULE_2__[\"MasterLayout\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"MainLayout\"\n      }, this.props.children));\n    }\n  }]);\n\n  return MainLayout;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n_defineProperty(MainLayout, \"propTypes\", {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node\n});\n\n\n\n//# sourceURL=webpack:///./src/layouts/MainLayout.js?");

/***/ }),

/***/ "./src/layouts/MasterLayout.js":
/*!*************************************!*\
  !*** ./src/layouts/MasterLayout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MasterLayout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar MasterLayout =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(MasterLayout, _Component);\n\n  function MasterLayout(props) {\n    _classCallCheck(this, MasterLayout);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(MasterLayout).call(this, props));\n  }\n\n  _createClass(MasterLayout, [{\n    key: \"render\",\n    value: function render() {\n      var children = this.props.children;\n      var childrenWithProps = react__WEBPACK_IMPORTED_MODULE_0__[\"Children\"].map(children, function (child) {\n        return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"cloneElement\"])(child, {});\n      }, {});\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        id: \"PageWrapper\"\n      }, childrenWithProps);\n    }\n  }]);\n\n  return MasterLayout;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n_defineProperty(MasterLayout, \"propTypes\", {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node\n});\n\n\n\n//# sourceURL=webpack:///./src/layouts/MasterLayout.js?");

/***/ }),

/***/ "./src/layouts/index.js":
/*!******************************!*\
  !*** ./src/layouts/index.js ***!
  \******************************/
/*! exports provided: MasterLayout, AuthLayout, MainLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MasterLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MasterLayout */ \"./src/layouts/MasterLayout.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MasterLayout\", function() { return _MasterLayout__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _AuthLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthLayout */ \"./src/layouts/AuthLayout.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AuthLayout\", function() { return _AuthLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainLayout */ \"./src/layouts/MainLayout.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MainLayout\", function() { return _MainLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/layouts/index.js?");

/***/ })

}]);