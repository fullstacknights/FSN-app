import React, {
  Component,
  View,
  Text
} from 'react-native';
import { PureRender } from '../components';

class Speaker extends Component {
  render() {
    return (
      <View>
        <Text>Speaker</Text>
      </View>
    );
  }
}

export default PureRender(Speaker);
