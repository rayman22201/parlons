import React, {Component} from 'react';
import {box, element} from 'react-blessed';
import {ScrollList} from './ScrollList.js';

export class BufferList extends Component {
  render() {
    return (
      <ScrollList
        ref="container"
        width={this.props.width}
        height={this.props.height}
        top={this.props.top}
        left={this.props.left}
        border={this.props.border}
        style={this.props.style}
        selectedIndex={this.props.selectedIndex}>
        {
          this.props.buffers.map((buffer, index) => {
            return (
              <box key={index} style={(index == this.props.selectedIndex) ? this.props.style.selected : { bg: -1, fg: -1 }} tags={true} >{ buffer }</box>
            )
          })
        }
      </ScrollList>
    );
  }
}
