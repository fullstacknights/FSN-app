import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { PureRender } from '../components';
import Form from './components/form/index';
import * as OpenMicActions from './actions';

class OpenMic extends Component {
  render() {
    return (<Form openMic={this.props.openMic} actions={this.props.openMicActions}/>);
  }
}

function setupState(state) {
  return ({
    openMic: state.openMic
  });
}

function setupActions(dispatch) {
  return ({
    openMicActions: bindActionCreators(OpenMicActions, dispatch)
  });
}

export default connect(setupState, setupActions)(PureRender(OpenMic));
