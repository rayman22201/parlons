import React, {Component} from 'react';
import {list, textarea, element} from 'react-blessed';
import {ChatList} from './ChatList.js';
import {BufferList} from './BufferList.js';

let testList = [];
for (var i = 0; i < 300; i++) {
  testList.push("a");
}

// Blessed adds a 2 character padding that I can't control. So width - 2 = actual char. limit
// Height is also -2.
let testLen2 = [];
for (var i = 0; i < 50; i++) {
  testLen2.push("b");
}

let testChat = [{username : "me", text: "check out {green-fg}{bold}http://www.google.com/{/bold}{/}"}];
for (var i = 0; i < 500; i++) {
  testChat.push({username : "joe.schmoe", "text": "asdfasdlkfjlaskjf " + i});
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedBuffer : 5, scroll : 0 };
  }
  componentDidMount() {
      //setTimeout(() => this.setState({ selectedBuffer: 20, scroll: 1 }), 1000);
      //setTimeout(() => this.setState({ selectedBuffer: 10 }), 2000);
  }

  render() {
    return (
      <element>
        <BufferList
          width={.2}
          height={1}
          border={{type: 'line'}}
          style={{border: {fg: 'blue'}, selected: {bg: 'blue'}}}
          buffers={testLen2}
          scrollIndex={0}
          selectedIndex={this.state.selectedBuffer} />
        <ChatList
            left="20%"
            width={.8}
            height={.9}
            border={{type: 'line'}}
            style={{border: {fg: 'green'}, selected: {bg: 'blue'}}}
            scrollIndex={this.state.scroll}
            selectedIndex={this.state.selectedBuffer}
            rows={testChat} />
        <textarea
              width="80%"
              height="10%"
              top="90%"
              left="20%"
              inputOnFocus={true}
              border={{type: 'line'}}
              style={{border: {fg: 'green'}}}/>
      </element>
    );
  }
}
