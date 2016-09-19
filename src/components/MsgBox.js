import React, {Component} from 'react';
import {list, textarea, element} from 'react-blessed';

export class MsgBox extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(this.props.readInput) {
      this.refs.element.readInput(() => {
        this.props.onSubmit(this.refs.element.value);
        this.refs.element.clearValue();
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.readInput) {
      this.refs.element.readInput(() => {
        this.props.onSubmit(this.refs.element.value);
        this.refs.element.clearValue();
      });
    }
  }

  render() {
    return (
      <textarea
            ref="element"
            width="80%"
            height="10%"
            top="90%"
            left="20%"
            border={{type: 'line'}}
            style={{border: {fg: 'green'}}} />
    );
  }
}
