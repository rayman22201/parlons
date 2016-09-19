import React, {Component} from 'react';
import {list, element} from 'react-blessed';
import {ChatList} from './ChatList.js';
import {BufferList} from './BufferList.js';
import {MsgBox} from './MsgBox.js';

let testList = [];

for (var i = 0; i < 64; i++) {
  testList.push("a");
}

// testList.push("{red-bg}{bold}");
// for (var i = 0; i < 250; i++) {
//   testList.push("b");
// }
// testList.push("{/}{/}");

for (var i = 0; i < 100; i++) {
  testList.push("a");
}

let testLen2 = [];
for (var i = 0; i < 50; i++) {
  testLen2.push("b");
}

// let testChat = [{username : "me", text: "check out {green-fg}{bold}http://www.google.com/{/bold}{/}"}];
// for (var i = 0; i < 500; i++) {
//   testChat.push({username : "joe.schmoe", "text": testList.join('')});
// }

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedBuffer : 5, testChat : [] };
  }
  componentDidMount() {
      // setTimeout(() => {
      //   this.setState({ selectedBuffer: 65 })
      //   setTimeout(() => this.setState({ selectedBuffer: 0 }), 500);
      // }, 1000);
  }

  render() {
    return (
      <element>
        <BufferList
          width="20%"
          height="100%"
          border={{type: 'line'}}
          style={{border: {fg: 'blue'}, selected: {bg: 'blue'}}}
          buffers={testLen2}
          scrollIndex={0}
          selectedIndex={1} />
        <ChatList
            left="20%"
            width="80%"
            height="90%"
            border={{type: 'line'}}
            style={{border: {fg: 'green'}, selected: {bg: 'blue'}}}
            scrollIndex={this.state.scroll}
            selectedIndex={this.state.selectedBuffer}
            rows={this.state.testChat} />
        <MsgBox
          readInput={true}
          onSubmit={(text) => {
            this.state.testChat.push({
              username : "me",
              text
            });
            this.setState({ testChat : this.state.testChat });
          }}
        />
      </element>
    );
  }
}
