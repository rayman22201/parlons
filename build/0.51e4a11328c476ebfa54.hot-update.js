require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Error = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Error.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Error2 = _interopRequireDefault(_Error);
	
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
	  filename: '/Users/rayman22201/Documents/parlons/src/components/Error.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	const _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
	  filename: '/Users/rayman22201/Documents/parlons/src/components/Error.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _Error2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
	  };
	}
	
	const ErrorBox = _wrapComponent('ErrorBox')(class ErrorBox extends _react2.Component {
	  render() {
	    return _react3.default.createElement(
	      'box',
	      { label: '!!! ERROR !!!',
	        border: { type: 'line' },
	        style: { border: { fg: 'red' } } },
	      this.props.error.toString()
	    );
	  }
	});
	
	exports.default = ErrorBox;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

};
//# sourceMappingURL=0.51e4a11328c476ebfa54.hot-update.js.map