import React from 'react-native';
import shallowEqual from 'shallowequal';

export default (Component) => class PureRender extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps);
  }
  render() {
    return <Component {...this.props}/>;
  }
};
