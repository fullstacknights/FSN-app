import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { PureRender } from '../components';
import Form from './components/form/index';
import * as TalkActions from './actions';
import * as AlertActions from '../Alert/actions';

class SubmitTalk extends Component {
  render() {
    return (
      <Form
        talk={this.props.submitTalk}
        actions={this.props.talkActions}
        alert={this.props.alert}
        alertActions={this.props.alertActions} />
    );
  }
}

function setupState(state) {
  return ({
    submitTalk: state.submitTalk,
    alert: state.alert
  });
}

function setupActions(dispatch) {
  return ({
    talkActions: bindActionCreators(TalkActions, dispatch),
    alertActions: bindActionCreators(AlertActions, dispatch)
  });
}

export default connect(setupState, setupActions)(PureRender(SubmitTalk));
