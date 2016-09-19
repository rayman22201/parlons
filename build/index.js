'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _blessed = require('blessed');

var _blessed2 = _interopRequireDefault(_blessed);

var _reactBlessed = require('react-blessed');

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRedux = require('react-redux');

var _App = require('./components/App.js');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Default store that does nothing.
const store = (0, _redux.applyMiddleware)(_reduxThunk2.default)(_redux.createStore)(_reducers2.default);

// @TODO:
// - make tabIndex stateless
// - highlight urls / select urls / copy pasta urls
// url regex: /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b((\/)?[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/ig
// 
// abstract out my custom redux friendly list component from ChatList and BufferList

// Creating our screen
const screen = _blessed2.default.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'Parlons Chat!',
  debug: true
});
console.log = screen.debug.bind(screen);

//screen.on("resize", () => screen.debug("resized"));
// screen.on('keypress', function(ch, key){
//   console.log(JSON.stringify(key));
// });

// Adding a way to quit the program
screen.key(['escape', 'q', 'C-c'], function (ch, key) {
  return process.exit(0);
});

screen.key(['tab'], function (ch, key) {});

// Rendering the React app using our screen
const component = (0, _reactBlessed.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_App.App, null)
), screen);