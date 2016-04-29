import React, {
  Component,
  View,
  Text
} from 'react-native';
import { PureRender } from '../components';

class PastEvents extends Component {
  render() {
    return (
      <View>
        <Text>Past Events</Text>
      </View>
    );
  }
}

export default PureRender(PastEvents);
