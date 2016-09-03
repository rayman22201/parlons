require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _Error = __webpack_require__(8);
	
	var _Error2 = _interopRequireDefault(_Error);
	
	var _reactTransformCatchErrors3 = __webpack_require__(2);
	
	var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);
	
	var _react2 = __webpack_require__(3);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(4);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _blessed = __webpack_require__(5);
	
	var _blessed2 = _interopRequireDefault(_blessed);
	
	var _reactBlessed = __webpack_require__(6);
	
	__webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const _components = {
	  App: {
	    displayName: 'App'
	  }
	};
	
	const _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/Users/rayman22201/Documents/parlons/src/index.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	const _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
	  filename: '/Users/rayman22201/Documents/parlons/src/index.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _Error2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
	  };
	}
	
	// Rendering a simple centered box
	const App = _wrapComponent('App')(class App extends _react2.Component {
	  render() {
	    return _react3.default.createElement(
	      'box',
	      { top: 'center',
	        left: 'center',
	        width: '50%',
	        height: '50%',
	        border: { type: 'line' },
	        style: { border: { fg: 'blue' } } },
	      'Hello World!'
	    );
	  }
	});
	
	// Creating our screen
	
	
	const screen = _blessed2.default.screen({
	  autoPadding: true,
	  smartCSR: true,
	  title: 'react-blessed hello world'
	});
	
	// Adding a way to quit the program
	screen.key(['escape', 'q', 'C-c'], function (ch, key) {
	  return process.exit(0);
	});
	
	// Rendering the React app using our screen
	const component = (0, _reactBlessed.render)(_react3.default.createElement(App, null), screen);
	
	//--------------- Hot Reloading and Webpack transform stuff ------------------------//
	// Shamelessly taken from: https://github.com/gaearon/react-blessed-hot-motion
	// Thank you Mr. Abramov
	// Don't overwrite the screen
	console.log = function () {};
	console.warn = function () {};
	console.error = function () {};
	console.info = function () {};
	console.debug = function () {};
	
	// Listen to SIGUSR2 indicating hot updates:
	
	
	// This is dumb but I don't understand how else to prevent process from exiting.
	// If it exits, it will get restarted by nodemon, but then hot reloading won't work.
	setInterval(() => {}, 1000);
	//----------------------------------------------------------------------------------//
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Error = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Error\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Error2 = _interopRequireDefault(_Error);
	
	var _reactTransformCatchErrors3 = __webpack_require__(2);
	
	var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);
	
	var _react2 = __webpack_require__(3);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(4);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const _components = {
	  Error: {
	    displayName: 'Error'
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
	
	const Error = _wrapComponent('Error')(class Error extends _react2.Component {
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
	
	exports.default = Error;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

};
//# sourceMappingURL=0.9d2b73266bc3c75b1b2b.hot-update.js.map