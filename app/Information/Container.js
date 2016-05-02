import React, {
  Component
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import * as actions from './actions';
import { PureRender } from '../components';
import { Info, Team, Faq } from './components';

class Information extends Component {
  componentDidMount() {
    this.props.actions.fetchJson();
  }
  render() {
    return (
      <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='#2C3E50'
        tabBarActiveTextColor='#50E3C2'
        tabBarUnderlineColor='#50E3C2'
        tabBarInactiveTextColor='white'
      >
        <Info
          tabLabel='INFO'
          {...this.props}
        />
        <Team
          tabLabel='TEAM'
          {...this.props}
        />
        <Faq
          tabLabel='FAQ'
          {...this.props}
        />
      </ScrollableTabView>
    );
  }
}

export default connect(state => ({
  fetching: state.information.fetching,
  faq: state.information.faq,
  team: state.information.team,
  social: state.information.social,
  codeOfConduct: state.information.codeOfConduct,
  wifi: state.information.wifi,
  slackUrl: state.information.slackUrl
}),
(dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})
)(PureRender(Information));
