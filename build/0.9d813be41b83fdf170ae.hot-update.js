require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ErrorBox = undefined;
	
	var _ErrorBox = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/ErrorBox\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _ErrorBox2 = _interopRequireDefault(_ErrorBox);
	
	var _reactTransformCatchErrors3 = __webpack_require__(2);
	
	var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);
	
	var _react2 = __webpack_require__(3);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(4);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const _components = {
	  ErrorBox: {
	    displayName: 'ErrorBox'
	  }
	};
	
	const _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/Users/rayman22201/Documents/parlons/src/components/ErrorBox.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	const _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
	  filename: '/Users/rayman22201/Documents/parlons/src/components/ErrorBox.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _ErrorBox2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
	  };
	}
	
	const ErrorBox = exports.ErrorBox = _wrapComponent('ErrorBox')(class ErrorBox extends _react2.Component {
	  render() {
	    return _react3.default.createElement(
	      'box',
	      { label: '!!! ERROR !!!', border: { type: 'line' }, style: { border: { fg: 'red' } } },
	      this.props.error.toString()
	    );
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

};
//# sourceMappingURL=0.9d813be41b83fdf170ae.hot-update.js.map