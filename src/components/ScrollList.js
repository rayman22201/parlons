import React, {Component} from 'react';
import {box, element} from 'react-blessed';

/*
 * Higher Order Component for providing a List of elements that scroll.
 *
 * The built in list is stateful, and the scroll and select is kind of wonky.
 * It doesn't play well with redux, so I will build my own.
*/
export class ScrollList extends Component {
  constructor(props) {
      super(props);
      this.state = { width : 0, height : 0, scrollIndex: 0 };
  }

  getContainerSize(){
    this.setState({ width: this.refs.container.width, height: this.refs.container.height });
  }

  componentDidMount() {
    this.getContainerSize();
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.width < 1 || this.state.height < 1) {
      return
    }
    // Scrolling algorithm.
    // Visible Height = Math.round((containerHeight * propsHeightasDecimal) - 2)
    const visibleHeight = Math.round((this.state.height * (parseInt((nextProps.height).slice(0,-1))/100) ) - 2);
    // Don't scroll past the end of the list, or before the begining of the list. Bounds check.
    const scrollStart = (this.state.scrollIndex < nextProps.children.length) ? ((this.state.scrollIndex > 0) ? this.state.scrollIndex : 0) : nextProps.children.length - 1;
    const scrollEnd = ((scrollStart + visibleHeight) < nextProps.children.length) ? (scrollStart + visibleHeight) : nextProps.children.length;
    // Auto-scroll the selectedIndex into view
    if(nextProps.selectedIndex > (scrollEnd - 1) ) {
      this.setState({ scrollIndex: (this.state.scrollIndex + (nextProps.selectedIndex - (scrollEnd - 1))) });
    } else if(nextProps.selectedIndex < scrollStart) {
      this.setState({ scrollIndex: (this.state.scrollIndex - (scrollStart - nextProps.selectedIndex)) });
    }
  }

  render() {
    if(this.state.width < 1 || this.state.height < 1) {
      return <element ref="container"></element>
    }

    // Scrolling algorithm.
    // Visible Height = Math.round((containerHeight * propsHeightasDecimal) - 2)
    const visibleHeight = Math.round((this.state.height * (parseInt((this.props.height).slice(0,-1))/100) ) - 2);
    // Don't scroll past the end of the list, or before the begining of the list. Bounds check.
    const scrollStart = (this.state.scrollIndex < this.props.children.length) ? ((this.state.scrollIndex > 0) ? this.state.scrollIndex : 0) : this.props.children.length - 1;
    const scrollEnd = ((scrollStart + visibleHeight) < this.props.children.length) ? (scrollStart + visibleHeight) : this.props.children.length;

    return (
      <box
        ref="container"
        width={this.props.width}
        height={this.props.height}
        top={this.props.top}
        left={this.props.left}
        border={this.props.border}
        style={this.props.style}>
        {
          React.Children.toArray(this.props.children).slice(scrollStart, scrollEnd).map((el, index) => {
            return <element key={index} top={index} >{ el }</element>;
          })
        }
      </box>
    );
  }
}
