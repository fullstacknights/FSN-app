import React, {
  Component,
  View,
  Text
} from 'react-native';
import { PureRender } from '../components';

import Form from './components/form/index';

class SubmitTalk extends Component {
  render() {
    return (<Form />);
  }
}

export default PureRender(SubmitTalk);
