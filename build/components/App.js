'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBlessed = require('react-blessed');

var _ChatList = require('./ChatList.js');

var _BufferList = require('./BufferList.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let testList = [];
for (var i = 0; i < 271; i++) {
  testList.push("a");
}

// Blessed adds a 2 character padding that I can't control. So width - 2 = actual char. limit
// Height is also -2.
let testLen2 = [];
for (var i = 0; i < 50; i++) {
  testLen2.push("b");
}

let testChat = [{ username: "me", text: "check out {green-fg}{bold}http://www.google.com/{/bold}{/}" }];
for (var i = 0; i < 500; i++) {
  testChat.push({ username: "joe.schmoe", "text": testList.join('') });
}

class App extends _react.Component {
  constructor(props) {
    super(props);
    this.state = { selectedBuffer: 5 };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ selectedBuffer: 65 });
      setTimeout(() => this.setState({ selectedBuffer: 0 }), 500);
    }, 1000);
  }

  render() {
    return _react2.default.createElement(
      'element',
      null,
      _react2.default.createElement(_BufferList.BufferList, {
        width: '20%',
        height: '100%',
        border: { type: 'line' },
        style: { border: { fg: 'blue' }, selected: { bg: 'blue' } },
        buffers: testLen2,
        scrollIndex: 0,
        selectedIndex: 1 }),
      _react2.default.createElement(_ChatList.ChatList, {
        left: '20%',
        width: '80%',
        height: '90%',
        border: { type: 'line' },
        style: { border: { fg: 'green' }, selected: { bg: 'blue' } },
        scrollIndex: this.state.scroll,
        selectedIndex: this.state.selectedBuffer,
        rows: testChat }),
      _react2.default.createElement('textarea', {
        width: '80%',
        height: '10%',
        top: '90%',
        left: '20%',
        inputOnFocus: true,
        border: { type: 'line' },
        style: { border: { fg: 'green' } } })
    );
  }
}
exports.App = App;