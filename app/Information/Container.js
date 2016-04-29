import React, {
  Component,
  View,
  Text
} from 'react-native';
import { PureRender } from '../components';

class Information extends Component {
  render() {
    return (
      <View>
        <Text>Information</Text>
      </View>
    );
  }
}

export default PureRender(Information);
