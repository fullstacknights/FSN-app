import React, {
  Component
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';
import { PureRender } from '../components';
import Event from './components/event';

class Home extends Component {
  componentWillMount() {
    this.props.actions.fetchNextEvent();
  }
  render() {
    return <Event {...this.props}/>;
  }
}

export default connect(state => ({
  fetching: state.home.fetching,
  event: state.home.event
}),
(dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})
)(PureRender(Home));
