import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <div>我要用prop里面的名字：{this.props.name}</div>
        <div>我岁{this.props.age}啦</div>
        <div>我喜欢{this.props.interests}</div>
        <div>我住在{this.props.address.province}省{this.props.address.city}市</div>
      </div>
    );
  }
}

HelloWorld.defaultProps = {
  name: '啦啦啦我是默认名字'
};

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HelloWorld;