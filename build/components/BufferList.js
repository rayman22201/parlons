'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BufferList = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBlessed = require('react-blessed');

var _ScrollList = require('./ScrollList.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BufferList extends _react.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return _react2.default.createElement(
      _ScrollList.ScrollList,
      {
        ref: 'container',
        width: this.props.width,
        height: this.props.height,
        top: this.props.top,
        left: this.props.left,
        border: this.props.border,
        style: this.props.style,
        selectedIndex: this.props.selectedIndex },
      this.props.buffers.map((buffer, index) => {
        return _react2.default.createElement(
          'box',
          { key: index, style: index == this.props.selectedIndex ? this.props.style.selected : { bg: -1, fg: -1 }, tags: true },
          buffer
        );
      })
    );
  }
}
exports.BufferList = BufferList;