import React, {
  Component,
  ScrollView,
  View,
  Text
} from 'react-native';
import Spinner from 'react-native-spinkit';
import { PureRender } from '../../../components';
import styles from './styles';

class Info extends Component {
  render() {
    if (this.props.fetching) {
      return (
        <View style={styles.loader}>
          <Spinner
            type='ThreeBounce'
            color='#50E3C2'
            size={80}
          />
        </View>
      );
    }
    return (
      <ScrollView>
        <Text>info</Text>
      </ScrollView>
    );
  }
}

export default PureRender(Info);
