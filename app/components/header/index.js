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
              size={30}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Home</Text>
        </View>
      </View>
    );
  }
}

export default PureRender(Header);
