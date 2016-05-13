import React, {
  Component
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { PureRender } from '../components';
import { Info, Team, Faq } from './components';
import * as staticDataActions from '../staticData/actions';

import helpers from '../utils/styleHelpers';

class Information extends Component {
  componentWillMount() {
    this.props.staticDataActions.fetchJson();
  }
  render() {
    return (
      <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='#2C3E50'
        tabBarActiveTextColor='#50E3C2'
        tabBarUnderlineColor='#50E3C2'
        tabBarInactiveTextColor='white'
        style={helpers.montserratText}
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
  fetching: state.staticData.fetching,
  faq: state.staticData.faq,
  team: state.staticData.team,
  social: state.staticData.social,
  codeOfConduct: state.staticData.codeOfConduct,
  wifi: state.staticData.wifi,
  slackUrl: state.staticData.slackUrl
}), (dispatch) => ({
  staticDataActions: bindActionCreators(staticDataActions, dispatch)
})
)(PureRender(Information));
