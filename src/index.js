import React, {Component} from 'react';
import blessed from 'blessed';
import {render, list, textarea, box, element} from 'react-blessed';

// @TODO:
// - make tabIndex stateless

let testList = [];
for (var i = 0; i < 300; i++) {
  testList.push("a");
}

// There is a 2 character padding. So width - 2 = actual char. limit
// Height is also -2.
let testLen2 = [];
for (var i = 0; i < 50; i++) {
  testLen2.push("b");
}

let testChat = [{username : "me", text: "check out {green-fg}{bold}http://www.google.com/{/bold}{/}"}];
for (var i = 0; i < 500; i++) {
  testChat.push({username : "joe.schmoe", "text": "asdfasdlkfjlaskjf " + i});
}

// Creating our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'Parlons Chat!',
  debug: true
});
console.log = screen.debug.bind(screen);

//@TODO:
// - scrollable
// - select a row.
// - highlight urls / select urls / copy pasta urls
// url regex: /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b((\/)?[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/ig
// - Bonus: emoji support
// - Bonus 2: gif support
class ChatList extends Component {
  constructor(props) {
      super(props);
      this.state = { width : 0, height : 0 };
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ width: this.refs.container.width, height: this.refs.container.height }); }, 10);
  }

  render() {
    if(this.state.width < 1 || this.state.height < 1) {
      return <element ref="container"></element>
    }

    // Text wrapping algorithm.
    const chatLines = this.props.rows.reduce((lines, row) => {
      // char limit = Math.round((containerWidth * textBoxPercentWidthAsDecimal) - 2)
      const charLim = Math.round( (this.state.width * this.props.width) - 2);
      let rowLines = [];
      for (let textIndex = 0; textIndex < row.text.length; textIndex+=charLim) {
        rowLines.push([row.text.substr(textIndex, charLim)]);
      }
      rowLines[0].unshift(row.username);
      return lines.concat(rowLines);
    }, []);

    // Scrolling algorithm.
    // Visible Height = Math.round((containerHeight * propsHeightasDecimal) - 2)
    const visibleHeight = Math.round((this.state.height * this.props.height) - 2);
    // Don't scroll past the end of the list, or before the begining of the list. Bounds check.
    const scrollStart = (this.props.scrollIndex < chatLines.length) ? ((this.props.scrollIndex > 0) ? this.props.scrollIndex : 0) : chatLines.length - 1;
    const scrollEnd = ((scrollStart + visibleHeight) < chatLines.length) ? (scrollStart + visibleHeight) : chatLines.length;
    const scrollSelected = (this.props.selectedIndex - scrollStart);
    return (
      <box
        ref="container"
        width={(this.props.width * 100) + "%"}
        height={(this.props.height * 100) + "%"}
        top={this.props.top}
        left={this.props.left}
        border={this.props.border}
        style={this.props.style}>
        {
          chatLines.slice(scrollStart, scrollEnd).map((row, rowIndex) => {
            if(row.length > 1) {
              return (
                <element key={rowIndex} top={rowIndex}>
                  <box width="70" style={(rowIndex == scrollSelected) && this.props.style.selected}>{row[0]} :</box>
                  <box style={(rowIndex == scrollSelected) && this.props.style.selected} tags={true} width="90%" left="70">{row[1]}</box>
                </element>
                )
            } else {
              return (
                <element key={rowIndex} top={rowIndex}>
                  <box tags={true} width="90%" left="70">{row[0]}</box>
                </element>
              )
            }
          })
        }
      </box>
    )
  }
}
// Rendering a simple centered box
class App extends Component {
  render() {
    return (
      <element>
        <list
             ref="first"
             width="20%"
             height="100%"
             border={{type: 'line'}}
             style={{border: {fg: 'blue'}, selected: {fg: 'blue'}}}
             interactive={true}
             keys={true}
             items={[testLen2.join('') + 'c']} />
         <ChatList
              ref="second"
              left="20%"
              width={.8}
              height={.9}
              border={{type: 'line'}}
              style={{border: {fg: 'green'}, selected: {bg: 'blue'}}}
              scrollIndex={0}
              selectedIndex={0}
              rows={testChat} />
        <textarea
              ref="third"
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

//screen.on("resize", () => screen.debug("resized"));
// screen.on('keypress', function(ch, key){
//   console.log(JSON.stringify(key));
// });

// Adding a way to quit the program
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

screen.key(['tab'], function(ch, key) {
});

// Rendering the React app using our screen
const component = render(<App />, screen);
