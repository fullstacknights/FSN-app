import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { PureRender } from '../components';
import Form from './components/form/index';
import * as TalkActions from './actions';

class SubmitTalk extends Component {
  render() {
    return (<Form talk={this.props.submitTalk} actions={this.props.talkActions} />);
  }
}

function setupState(state) {
  return ({
    submitTalk: state.submitTalk
  });
}

function setupActions(dispatch) {
  return ({
    talkActions: bindActionCreators(TalkActions, dispatch)
  });
}

export default connect(setupState, setupActions)(PureRender(SubmitTalk));
