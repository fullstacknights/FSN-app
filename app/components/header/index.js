import React, {
  Component,
  View,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PureRender from '../pure-render';
import styles from './styles';
import helpers from '../../utils/styleHelpers';

class Header extends Component {
  render() {
    return (
      <View>
        {Platform.OS === 'ios' ?
          <View style={styles.statusBar}/> :
          null
        }
        <View style={styles.bar}>
          <View style={styles.wrap}>
            <TouchableOpacity onPress={this.props.toggleLeftDrawer}>
              <Icon
                color='white'
                name='menu'
                size={25}
              />
            </TouchableOpacity>
            <Text style={[styles.text, helpers.montserratText]}>{this.props.headerText}</Text>
          </View>
        </View>
      </View>
    );
  }
}

Header.propTypes = {
  headerText: React.PropTypes.string,
  toggleLeftDrawer: React.PropTypes.func
};

export default PureRender(Header);
