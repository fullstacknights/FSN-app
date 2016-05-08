import React, {
  Component,
  Image,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Spinner from 'react-native-spinkit';

import styles from './styles';
import logo from '../../../assets/logo.png';

export default class Form extends Component {
  renderForm() {
    return (
      <ScrollView style={[styles.container, styles.scrollView]}>
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logo}
            source={logo}/>
        </View>
        <Text style={[styles.whiteText, styles.centerText, styles.spaceBottom]}>
          Open Mics have a limited time of 5 minutes. Slides are not allowed in the presentation. You may anounce or speak of whatever you like.  Please be respectful.
        </Text>
        <View style={styles.spaceBottom}>
          <Text style={[styles.whiteText, styles.boldText]}>
            What is your name?
          </Text>
          <TextInput style={styles.input} autoCapitalize="words" autoFocus={true} autoCorrect={false} onEndEditing={this.props.actions.handleAddName} />
        </View>
        <View style={styles.spaceBottom}>
          <Text style={[styles.whiteText, styles.boldText]}>
            What is the topic?
          </Text>
          <TextInput style={styles.input} onEndEditing={this.props.actions.handleAddTopic} />
        </View>
        <View style={styles.spaceBottom}>
          <TouchableOpacity onPress={this.props.actions.handleSubmit.bind(null, this.props.openMic)}>
            <View style={styles.openMicButton}>
              <Text style={styles.openMicText}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  render() {
    if (this.props.openMic.isLoading) {
      return (
        <View style={styles.loader}>
          <Spinner
            type='ThreeBounce'
            color='#50E3C2'
            size={80}
          />
        </View>
      )
    }

    return this.renderForm();
  }
}
