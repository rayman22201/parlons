'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatList = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBlessed = require('react-blessed');

var _ScrollList = require('./ScrollList.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//@TODO:
// - emoji support
// - gif support
class ChatList extends _react.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }

  componentDidMount() {
    //@TODO: get new width / height on window resize
    setTimeout(() => {
      this.setState({ width: this.refs.container.width, height: this.refs.container.height });
    }, 0);
  }

  render() {
    if (this.state.width < 1 || this.state.height < 1) {
      return _react2.default.createElement('element', { ref: 'container' });
    }

    // Text wrapping algorithm.
    // @TODO: duplicate tags to keep them consinstent across multiple lines
    // @TODO: handle username alignment in text instead of with seperate elements,
    // because I can't figure out the units of the relative sizing to keep the username
    // box size consinstent on responsive.
    const charLim = this.state.width;
    const chatLines = this.props.rows.reduce((lines, row, index) => {
      let wrappedText = [];
      for (let textIndex = 0; textIndex < row.text.length; textIndex += charLim) {
        wrappedText.push({
          selected: this.props.selectedIndex == index,
          text: row.text.substr(textIndex, charLim)
        });
      }
      wrappedText[0].username = row.username;
      return lines.concat(wrappedText);
    }, []);
    const selectedRow = chatLines.findIndex(row => row.selected);
    // Least squares fit to a log function to solve responsiveness lol.
    let userNameWidth = Math.round((883.39 + -141.53 * Math.log(this.state.width)) / 10);
    if (userNameWidth < 0) {
      userNameWidth = 0;
    }
    if (userNameWidth > this.state.width) {
      userNameWidth = this.state.width;
    }
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
        selectedIndex: selectedRow },
      chatLines.map((row, rowIndex) => {

        // I have to repeat the style b/c blessed doesn't elements don't inherit style from their parents, and the transparency option
        // acts more like an effect, and doesn't really do exactly what I want. at least on my machine.
        return _react2.default.createElement(
          'element',
          { key: rowIndex },
          typeof row.username != "undefined" && _react2.default.createElement(
            'box',
            { style: row.selected ? this.props.style.selected : { bg: -1, fg: -1 }, tags: true, width: userNameWidth + "%" },
            row.username + "{|}:"
          ),
          _react2.default.createElement(
            'box',
            { style: row.selected ? this.props.style.selected : { bg: -1, fg: -1 }, tags: true, left: userNameWidth + "%", padding: { left: 1 } },
            row.text
          )
        );
      })
    );
  }
}
exports.ChatList = ChatList;