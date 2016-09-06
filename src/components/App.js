import React, {Component} from 'react';
import {list, textarea, element} from 'react-blessed';
import {ChatList} from './ChatList.js';

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
  render() {
    return (
      <element>
        <list
             width="20%"
             height="100%"
             border={{type: 'line'}}
             style={{border: {fg: 'blue'}, selected: {fg: 'blue'}}}
             items={[testLen2.join('') + 'c']} />
         <ChatList
              left="20%"
              width={.8}
              height={.9}
              border={{type: 'line'}}
              style={{border: {fg: 'green'}, selected: {bg: 'blue'}}}
              scrollIndex={0}
              selectedIndex={0}
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
