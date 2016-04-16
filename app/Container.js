import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from './components/counter';
import PureRender from './components/pure-render';
import * as actions from './actions';
import { connect } from 'react-redux';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Counter
        counter={state.count}
        {...actions}
      />
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(PureRender(Container));
