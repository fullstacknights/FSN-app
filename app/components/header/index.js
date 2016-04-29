import React, {
  Component,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PureRender from '../pure-render';
import styles from './styles';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <TouchableOpacity onPress={this.props.toggleLeftDrawer}>
            <Icon
              color='white'
              name='menu'
              size={25}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{this.props.headerText}</Text>
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
