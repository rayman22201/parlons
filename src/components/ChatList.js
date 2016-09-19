import React, {Component} from 'react';
import {box, element} from 'react-blessed';
import {ScrollList} from './ScrollList.js';

//@TODO:
// - emoji support
// - gif support
export class ChatList extends Component {
  constructor(props) {
      super(props);
      this.state = { width : 0, height : 0 };
  }

  getContainerSize(){
    this.setState({ width: this.refs.container.width, height: this.refs.container.height });
  }

  componentDidMount() {
    this.getContainerSize();
  }

  render() {
    if(this.state.width < 1 || this.state.height < 1) {
      return <element ref="container"></element>
    }

    // Least squares fit to a log function to solve responsiveness lol.
    // @see css_regression.js
    let userNameWidth = Math.round( (883.39 + (-141.53 * Math.log(this.state.width)))/10 );
    if(userNameWidth < 0) { userNameWidth = 0; }
    if(userNameWidth > this.state.width) { userNameWidth = this.state.width; }

    // Text wrapping algorithm, including, accounting for tags.
    // @see css_regression.js
    // I rounded b, and increased it by 2 to give a little extra padding, just in case.
    const charLim = Math.round((0.78 * this.state.width) - 20);
    const tagRe = /({[\w-{}]+})((.(?!{\/))+.)({\/[\w-{}\/]*})/g;
    const chatLines = this.props.rows.reduce((lines, row, index) => {
      // gather all the tag matches, and clear them from the text.
      // they will be re-insterted after line wrapping.
      const tags = [];
      const text = row.text.replace(tagRe, (match, open, content, p3, close, index) => {
        tags.push({
          open,
          close,
          start: index,
          end: index + content.length
        });
        return content;
      });

      // wrap the text and reinsert tags.
      let wrappedText = [];
      for (let textIndex = 0; textIndex < text.length; textIndex+=charLim) {
        let curLine = text.substr(textIndex, charLim);
        tags.forEach((tag) => {
            let relativeStart = tag.start - textIndex;
            let relativeEnd = tag.end - textIndex;
            // the tag starts on this line.
            if(tag.start >= textIndex && tag.start < (textIndex + charLim)) {
              curLine = curLine.slice(0, relativeStart) + tag.open + curLine.slice(relativeStart, curLine.length);
              // this is tag is wrapped, so we must end it here, and duplicate it for each line.
              if(tag.end > (textIndex + charLim)) {
                curLine += tag.close;
              }
              // if the end is on the same line as the start,
              // the end has to take into account the length of the opening tags, because
              // the opening tag will be place back in the string before the closing tags,
              // and thus affect the string length.
              if(tag.end < (textIndex + charLim)) {
                relativeEnd += tag.open.length;
              }
            }
            // the tag ends on this line.
            if(tag.end >= textIndex && tag.end < (textIndex + charLim)) {
              curLine = curLine.slice(0, relativeEnd) + tag.close + curLine.slice(relativeEnd, curLine.length);
              // the tag started on a previous line, so we have to prepend the
              // opening tag to the begining to keep the wrapping consistent.
              if(tag.start < textIndex) {
                curLine = tag.open + curLine;
              }
            }
            // the tag started before this line, and ends after this line.
            // to keep wrapping intact, apply the tag to the whole line.
            if(tag.start < textIndex && tag.end > (textIndex + charLim)) {
              curLine = tag.open + curLine + tag.close;
            }
        });
        wrappedText.push({
          selected: (this.props.selectedIndex == index),
          text: curLine
        });
      }

      // add the username
      if(wrappedText.length > 0) {
        wrappedText[0].username = (typeof row.username != "undefined") ? row.username : "";
      }
      return lines.concat(wrappedText);
    }, []);
    const selectedRow = chatLines.findIndex(row => row.selected);
    return (
      <ScrollList
        ref="container"
        width={this.props.width}
        height={this.props.height}
        top={this.props.top}
        left={this.props.left}
        border={this.props.border}
        style={this.props.style}
        selectedIndex={selectedRow}>
        {
          chatLines.map((row, rowIndex) => {
            // I have to repeat the style b/c blessed doesn't elements don't inherit style from their parents, and the transparency option
            // acts more like an effect, and doesn't really do exactly what I want. at least on my machine.
            return (
              <element key={rowIndex}>
                {(typeof row.username != "undefined") &&
                <box style={(row.selected) ? this.props.style.selected : { bg: -1, fg: -1 }} tags={true} width={userNameWidth + "%"} >{row.username + "{|}:"}</box>}
                <box style={(row.selected) ? this.props.style.selected : { bg: -1, fg: -1 }} tags={true} left={userNameWidth + "%"} padding={{left:1}} >{row.text}</box>
              </element>
            )
          })
        }
      </ScrollList>
    )
  }
}
