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
import helpers from '../../../utils/styleHelpers';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
  }
  scrollTo(input) {
    setTimeout(() => {
      this.refs[input].measure((ox, oy, width, height, px, py) => {
        this._scrollView.scrollTo({ x: ox, y: oy, animation: true });
      });
    })
  }
  renderForm() {
    const buttonState = (this.props.openMic.isLoading) ? styles.openMicDisabled : styles.openMic;
    return (
      <ScrollView
        ref={(sv) => this._scrollView = sv}
        contentContainerStyle={[styles.container, styles.scrollView]}
      >
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
            defaultValue={this.props.openMic.name}
            ref='name'
            style={styles.input}
            autoCapitalize="words"
            autoFocus={true}
            autoCorrect={false}
            onFocus={this.scrollTo('name')}
            onBlur={this.props.actions.handleAddName}
            />
        </View>
        <View style={styles.spaceBottom}>
          <Text style={[styles.whiteText, styles.boldText, helpers.montserratText]}>
            What is the topic?
          </Text>
          <TextInput
            defaultValue={this.props.openMic.topic}
            ref='topic'
            style={styles.input}
            onFocus={this.scrollTo('topic')}
            onChangeText={this.props.actions.handleAddTopic}
          />
        </View>
        <View style={styles.spaceBottom}>
          <TouchableOpacity disabled={this.props.openMic.isLoading} onPress={this.props.actions.handleSubmit.bind(null, this.props.openMic)}>
            <View style={[styles.button, buttonState]}>
              <Text style={[styles.openMicText, helpers.montserratText]}>Submit</Text>
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
      );
    }

    return this.renderForm();
  }
}
