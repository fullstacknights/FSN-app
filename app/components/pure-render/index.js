import React, { Component } from 'react-native';
import shallowEqual from 'shallowequal';

export default (Component) => class PureRender extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps);
  }
  render() {
    return <Component {...this.props}/>
  }
}
