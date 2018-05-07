import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Clock extends PureComponent {

  constructor (props) {
    super(props);
    this.state = {
      time: new Date(),
      count: 0
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }

  addTree() {
    // this.setState({count: this.state.count + 1});
    // this.setState({count: this.state.count + 2});
    // this.setState({count: this.state.count + 3});
    this.setState(preState => ({count: preState.count + 1}));
    this.setState(preState => ({count: preState.count + 2}));
    this.setState(preState => ({count: preState.count + 3}));
  }

  render() {
    return (
      <div>
        <div>{this.state.time.toLocaleTimeString()}</div>
        <div>{this.state.count}次</div>
        <button onClick={() => this.addTree()}>setState 3 times</button>
      </div>
    );
  }

}

Clock.propTypes = {

};

export default Clock;