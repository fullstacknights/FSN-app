import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { PureRender } from '../components';
import Form from './components/form/index';
import * as OpenMicActions from './actions';
import * as AlertActions from '../Alert/actions';
import Alert from '../Alert/components/alert/index';

class OpenMic extends Component {
  render() {
    if (this.props.alert.display) {
      return (
        <Alert {...this.props.alert} actions={this.props.alertActions} />
      );
    }

    return (
      <Form
        openMic={this.props.openMic}
        name={this.props.openMic.name}
        topic={this.props.openMic.topic}
        actions={this.props.openMicActions}
        alert={this.props.alert}
        alertActions={this.props.alertActions} />
    );
  }
}

function setupState(state) {
  return ({
    openMic: state.openMic,
    alert: state.alert
  });
}

function setupActions(dispatch) {
  return ({
    openMicActions: bindActionCreators(OpenMicActions, dispatch),
    alertActions: bindActionCreators(AlertActions, dispatch)
  });
}

export default connect(setupState, setupActions)(PureRender(OpenMic));
