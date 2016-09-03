'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Error = require('./components/Error');

var _Error2 = _interopRequireDefault(_Error);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _components = {
  Error: {
    displayName: 'Error'
  }
};

const _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/components/Error.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

const _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/components/Error.js',
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