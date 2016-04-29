import React, {
  Component,
  View,
  Text
} from 'react-native';
import { PureRender } from '../components';

class Venue extends Component {
  render() {
    return (
      <View>
        <Text>Venue</Text>
      </View>
    );
  }
}

export default PureRender(Venue);
