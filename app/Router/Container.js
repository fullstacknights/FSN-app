import React, {
  Component,
  StyleSheet,
  StatusBar,
  View,
  Navigator,
  BackAndroid,
  Platform,
  NetInfo
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import { Header, Menu, PureRender } from '../components';
import { getComponentFromRoute, getRoute } from '../utils';
import * as staticDataActions from '../staticData/actions';


const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'white'
  }
});

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      isConnected: false
    };
  }
  componentWillMount() {
    this.props.staticDataActions.fetchJson();
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
        this.navigator.pop();
        return true;
      }
      return false;
    });
    NetInfo.isConnected.addEventListener(
      'change',
      this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().done(
      (isConnected) => {
        this.setState({ isConnected });
      }
    );
  }
  componentWillUnMount() {
    BackAndroid.removeEventListener('hardwareBackPress');
    NetInfo.isConnected.removeEventListener(
      'change',
      this._handleConnectivityChange
    );
  }
  _handleConnectivityChange = (isConnected) => {
    this.setState({ isConnected });
  }
  toggleLeftDrawer = () => {
    if (this.state.drawerOpen) {
      this.drawer.close();
    } else {
      this.drawer.open();
    }
  };
  handleHideStatusBar = () => {
    if (Platform.OS === 'ios') {
      StatusBar.setHidden(true, 'slide');
    }
    dismissKeyboard();
    this.setState({ drawerOpen: true });
  };
  handleShowStatusBar = () => {
    if (Platform.OS === 'ios') {
      StatusBar.setHidden(false, 'slide');
    }
    this.setState({ drawerOpen: false });
  };
  renderScene = (route, navigator) => {
    const Route = getComponentFromRoute(route.name);
    const headerText = getRoute(route.name).headerText;
    return (
      <Drawer
        tapToClose={true}
        panOpenMask={30}
        captureGestures={false}
        content={
          <Menu
            event={this.props.currentEvent}
            toggleLeftDrawer={this.toggleLeftDrawer}
            navigator={navigator}
          />
        }
        onCloseStart={this.handleShowStatusBar}
        onOpenStart={this.handleHideStatusBar}
        openDrawerOffset={80}
        ref={(c) => this.drawer = c}
        side='left'
        tweenEasing='linear'
        tweenHandler={Drawer.tweenPresets.parallax}
        type='static'
      >
        <Header
          headerText={headerText}
          toggleLeftDrawer={this.toggleLeftDrawer}
        />
        <View style={styles.overlay}>
          <Route navigator={navigator} isConnected={this.state.isConnected}/>
        </View>
      </Drawer>
    );
  };
  _customSceneConfig = () => {
    const config = Navigator.SceneConfigs.HorizontalSwipeJump;
    return {
      ...config,
      gestures: null,
      defaultTransitionVelocity: 0,
      springFriction: 0,
      springTension: 0,
    };
  };
  render() {
    return (
      <Navigator
        ref={(nav) => this.navigator = nav}
        configureScene={this._customSceneConfig}
        initialRoute={{ name: 'home' }}
        renderScene={this.renderScene}
      />
    );
  }
}

export default connect(state => ({
  currentEvent: state.home.event
}),
(dispatch) => ({
  staticDataActions: bindActionCreators(staticDataActions, dispatch)
})
)(PureRender(Router));
