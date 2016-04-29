import React, {
  Component,
  StyleSheet,
  StatusBar,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import PureRender from './components/pure-render';
import * as actions from './actions';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';
import { Header, Menu } from './components';
import { getComponent } from './utils';


const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'white'
  }
});

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { drawerOpen: false };
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
    const Component = this.props.component;
    return (
      <Drawer
        captureGestures={false}
        content={
          <Menu
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
  component: state.router.component
}),
(dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})
)(PureRender(Container));
