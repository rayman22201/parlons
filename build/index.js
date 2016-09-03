'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _blessed = require('blessed');

var _blessed2 = _interopRequireDefault(_blessed);

var _reactBlessed = require('react-blessed');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Rendering a simple centered box
class App extends _react.Component {
  render() {
    return _react2.default.createElement(
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
}

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
const component = (0, _reactBlessed.render)(_react2.default.createElement(App, null), screen);