import React, {
  Component,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PureRender } from '../components';
import * as actions from './actions';
import { Events } from './components';
import * as SpeakerProfileActions from '../SpeakerProfile/actions';

class PastEvents extends Component {
  componentWillMount() {
    this.props.actions.fetchPastEvents();
  }
  render() {
    return (
      <Events
        events={this.props.events}
        displayProfile={this.props.displayProfile}
        actions={this.props.actions}
        speakerAction={this.props.speakerAction}
      />
    );
  }
}

export default connect(state => ({
    events: state.pastEvents.events,
    displayProfile: state.pastEvents.displayProfile
}),
(dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
  speakerActions: bindActionCreators(SpeakerProfileActions, dispatch)
})
)(PureRender(PastEvents));
