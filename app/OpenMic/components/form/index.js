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
import SmartScrollView from 'react-native-smart-scroll-view';

import styles from './styles';
import logo from '../../../assets/logo.png';
import helpers from '../../../utils/styleHelpers';

export default class Form extends Component {
  renderForm() {
    console.log(this.props);
    const buttonState = (this.props.openMic.isLoading) ? styles.openMicDisabled : styles.openMic;

    return (
      <SmartScrollView scrollContainerStyle={[styles.container, styles.scrollView]} scrollPadding={15}>
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logo}
            source={logo}/>
        </View>
        <Text style={[styles.whiteText, styles.centerText, styles.spaceBottom, helpers.montserratText]}>
          Open Mics have a limited time of 5 minutes. Slides are not allowed in the presentation. You may anounce or speak of whatever you like.  Please be respectful.
        </Text>
        <View style={styles.spaceBottom}>
          <Text style={[styles.whiteText, styles.boldText, helpers.montserratText]}>
            What is your name?
          </Text>
          <TextInput
            style={styles.input}
            autoCapitalize="words"
            autoFocus={true}
            autoCorrect={false}
            onBlur={this.props.actions.handleAddName}
            smartScrollOptions={{
              moveToNext: true,
              type: 'text'
            }} />
        </View>
        <View style={styles.spaceBottom}>
          <Text style={[styles.whiteText, styles.boldText, helpers.montserratText]}>
            What is the topic?
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={this.props.actions.handleAddTopic}
            smartScrollOptions={{
              type: 'text'
            }} />
        </View>
        <View style={styles.spaceBottom}>
          <TouchableOpacity disabled={this.props.openMic.isLoading} onPress={this.props.actions.handleSubmit.bind(null, this.props.openMic)}>
            <View style={[styles.button, buttonState]}>
              <Text style={[styles.openMicText, helpers.montserratText]}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SmartScrollView>
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
