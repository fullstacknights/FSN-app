import React, {
  Component,
  StyleSheet,
  StatusBar,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';
import * as actions from './actions';
import { Header, Menu, PureRender } from '../components';
import { getComponentFromRoute } from '../utils';
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
    this.state = { drawerOpen: false };
  }
  componentWillMount() {
    this.props.staticDataActions.fetchJson();
  }
  toggleLeftDrawer = () => {
    if (this.state.drawerOpen) {
      this.refs.drawer.close();
    } else {
      this.refs.drawer.open();
    }
  };
  handleHideStatusBar = () => {
    StatusBar.setHidden(true, 'slide');
    this.setState({ drawerOpen: true });
  };
  handleShowStatusBar = () => {
    StatusBar.setHidden(false, 'slide');
    this.setState({ drawerOpen: false });
  };
  render() {
    const Component = getComponentFromRoute(this.props.name);
    return (
      <Drawer
        captureGestures={false}
        content={
          <Menu
            ticketsUrl={this.props.ticketsUrl}
            toggleLeftDrawer={this.toggleLeftDrawer}
            transitionTo={this.props.actions.transitionTo}
          />
        }
        onCloseStart={this.handleShowStatusBar}
        onOpenStart={this.handleHideStatusBar}
        openDrawerOffset={80}
        ref='drawer'
        side='left'
        tweenEasing='linear'
        tweenHandler={Drawer.tweenPresets.parallax}
        type='static'
      >
        <Header
          headerText={this.props.headerText}
          toggleLeftDrawer={this.toggleLeftDrawer}
        />
        <View style={styles.overlay}>
          <Component/>
        </View>
      </Drawer>
    );
  }
}

export default connect(state => ({
  headerText: state.router.headerText,
  name: state.router.name,
  ticketsUrl: state.staticData.ticketsUrl
}),
(dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
  staticDataActions: bindActionCreators(staticDataActions, dispatch)
})
)(PureRender(Router));
