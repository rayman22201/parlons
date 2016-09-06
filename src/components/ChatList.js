import React, {Component} from 'react';
import {box, element} from 'react-blessed';

//@TODO:
// - emoji support
// - gif support
export class ChatList extends Component {
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
