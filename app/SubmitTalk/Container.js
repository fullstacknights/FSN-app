import React, {
  Component,
  View,
  Text
} from 'react-native';
import { PureRender } from '../components';

class SubmitTalk extends Component {
  render() {
    return (
      <View>
        <Text>Submit Talk</Text>
      </View>
    );
  }
}

export default PureRender(SubmitTalk);
