import React, {
  Component
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PureRender } from '../components';
import * as actions from './actions';
import { Events } from './components';

class PastEvents extends Component {
  componentDidMount() {
    this.props.actions.fetchPastEvents();
  }
  render() {
    return (
      <Events events={this.props.events} />
    );
  }
}

export default connect(state => ({
  events: state.pastEvents.events
}),
(dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})
)(PureRender(PastEvents));
