import React, {
  Component,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Clipboard,
  Linking
} from 'react-native';
import Spinner from 'react-native-spinkit';

import { PureRender } from '../../../components';
import styles from './styles';
import helpers from '../../../utils/styleHelpers';

class Info extends Component {
  handleCopyPassword = () => {
    Clipboard.setString(this.props.wifi.password);
  };
  handleSlackUrl = () => {
    if (this.props.slackUrl) {
      Linking.openURL(this.props.slackUrl);
    }
  };
  render() {
    if (this.props.fetching && this.props.faq.length === 0) {
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
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <Text style={[styles.title, helpers.montserratText]}>{this.props.faq[0].question}</Text>
          <Text style={[styles.answer, helpers.montserratText]}>{this.props.faq[0].answer}</Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.title, helpers.montserratText]}>Get Involved in the community</Text>
          <TouchableOpacity onPress={this.handleSlackUrl}>
            <Text style={[styles.answer, helpers.montserratText]}>{this.props.slackUrl}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={[styles.title, helpers.montserratText]}>WiFi</Text>
          <Text style={[styles.wifi, helpers.montserratText]}>WIFI: {this.props.wifi.name}</Text>
          <Text style={[styles.wifi, helpers.montserratText]}>Password: {this.props.wifi.password}</Text>
          <TouchableOpacity onPress={this.handleCopyPassword}>
            <View style={styles.copyPassword}>
              <Text style={[styles.copyPasswordText, helpers.montserratText]}>Copy Password</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[styles.title, helpers.montserratText]}>Code of Conduct</Text>
          {this.props.codeOfConduct.map((part, idx) => {
            return <Text key={idx} style={[styles.part, helpers.montserratText]}>{part}</Text>;
          })}
        </View>
      </ScrollView>
    );
  }
}

export default PureRender(Info);
