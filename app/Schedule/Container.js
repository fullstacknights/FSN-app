import React, {
  Component,
  View,
  Text
} from 'react-native';
import { PureRender } from '../components';

class Schedule extends Component {
  render() {
    return (
      <View>
        <Text>Schedule</Text>
      </View>
    );
  }
}

export default PureRender(Schedule);
