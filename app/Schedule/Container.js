import React, { Component } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ScheduleActions from './actions';
import Activities from './components/activities/index.js';
import { PureRender } from '../components';

class Schedule extends Component {
  componentDidMount() {
    this.props.scheduleActions.getSchedule();
  }
  render() {
    return (
      <Activities
        {...this.props}
      />
    );
  }
}

function setupState(state) {
  return ({
    data: state.schedule
  });
}

function setupActions(dispatch) {
  return ({
    scheduleActions: bindActionCreators(ScheduleActions, dispatch)
  });
}

export default connect(setupState, setupActions)(PureRender(Schedule));
