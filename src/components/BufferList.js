import React, {Component} from 'react';
import {box, element} from 'react-blessed';

// The built in list is stateful, and the scroll and select is kind of wonky.
// It doesn't play well with redux, so I will build my own.
export class BufferList extends Component {
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

    // Scrolling algorithm.
    // Visible Height = Math.round((containerHeight * propsHeightasDecimal) - 2)
    const visibleHeight = Math.round((this.state.height * this.props.height) - 2);
    // Don't scroll past the end of the list, or before the begining of the list. Bounds check.
    const scrollStart = (this.props.scrollIndex < this.props.buffers.length) ? ((this.props.scrollIndex > 0) ? this.props.scrollIndex : 0) : this.props.buffers.length - 1;
    const scrollEnd = ((scrollStart + visibleHeight) < this.props.buffers.length) ? (scrollStart + visibleHeight) : this.props.buffers.length;
    const scrollSelected = (this.props.selectedIndex - scrollStart);
    console.log(scrollSelected);
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
          this.props.buffers.slice(scrollStart, scrollEnd).map((buffer, index) => {
            return (
              <box key={index} top={index} style={(index == scrollSelected) ? this.props.style.selected : { bg: -1, fg: -1 }} tags={true} >{ buffer }</box>
            )
          })
        }
      </box>
    );
  }
}
