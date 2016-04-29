import React, {
  Component,
  View,
  Text
} from 'react-native';
import { PureRender } from '../components';

class OpenMic extends Component {
  render() {
    return (
      <View>
        <Text>Open Mic</Text>
      </View>
    );
  }
}

export default PureRender(OpenMic);
