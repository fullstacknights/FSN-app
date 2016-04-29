import React, {
  Component,
  StyleSheet,
  StatusBar,
  View
} from 'react-native';
// import { bindActionCreators } from 'redux';
import PureRender from './components/pure-render';
// import * as actions from './actions';
// import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';
import { Header, Menu } from './components';


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
    return (
      <Drawer
        captureGestures={false}
        content={<Menu/>}
        onCloseStart={this.handleShowStatusBar}
        onOpenStart={this.handleHideStatusBar}
        openDrawerOffset={80}
        ref='drawer'
        side='left'
        tweenEasing='linear'
        tweenHandler={Drawer.tweenPresets.parallax}
        type='static'
      >
        <Header toggleLeftDrawer={this.toggleLeftDrawer}/>
        <View style={styles.overlay}></View>
      </Drawer>
    );
  }
}

export default PureRender(Container);
