import React, {
  Component,
  Image,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  DeviceEventEmitter,
  Dimensions,
  Platform
} from 'react-native';
import Spinner from 'react-native-spinkit';

import styles from './styles';
import logo from '../../../assets/logo.png';
import helpers from '../../../utils/styleHelpers';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: '',
      visibleHeight: Dimensions.get('window').height,
      keyboardShowing: false
    };
    this.scrollTo = this.scrollTo.bind(this);
  }
  componentWillMount() {
    DeviceEventEmitter.addListener(Platform.OS == 'IOS' ? 'keyboardWillShow' : 'keyboardDidShow', this.keyboardWillShow.bind(this))
    DeviceEventEmitter.addListener(Platform.OS == 'IOS' ? 'keyboardWillHide' : 'keyboardDidHide', this.keyboardWillHide.bind(this))
  }
  keyboardWillShow (e) {
    const newSize = Dimensions.get('window').height - e.endCoordinates.height;
    this.setState({ visibleHeight: newSize, keyboardShowing: true });
  }

  keyboardWillHide (e) {
    this.setState({ visibleHeight: Dimensions.get('window').height, keyboardShowing: false });
  }

  scrollTo(input) {
    return () => {
      this.refs[input].focus();
      setTimeout(() => {
        if (this.state.focusedInput !== input) {
          this.refs[input].measure((ox, oy) => {
            this._scrollView.scrollTo({ x: 0, y: oy - 30, animation: true });
          });
          this.setState({ focusedInput: input });
        }
      });
    };
  }
  renderForm() {
    const buttonState = (this.props.openMic.isLoading) ? styles.openMicDisabled : styles.openMic;
    const scrollViewContent = {
      paddingBottom: this.state.keyboardShowing ? this.state.visibleHeight - 150 : 0
    };
    return (
      <ScrollView
        ref={(sv) => this._scrollView = sv}
        style={[styles.container, styles.scrollView]}
        contentContainerStyle={scrollViewContent}
      >
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logo}
            source={logo}
          />
        </View>
        <Text style={[styles.whiteText, styles.centerText, styles.spaceBottom, helpers.montserratText]}>
          Open Mics have a limited time of 5 minutes. Slides are not allowed in the presentation. You may anounce or speak of whatever you like.  Please be respectful.
        </Text>
        <Text style={[styles.whiteText, styles.boldText, helpers.montserratText]}>
          What is your name?
        </Text>
        <TextInput
          defaultValue={this.props.openMic.name}
          ref='name'
          style={styles.input}
          autoCapitalize="words"
          autoCorrect={false}
          onFocus={this.scrollTo('name')}
          onSubmitEditing={this.scrollTo('topic')}
          onBlur={this.props.actions.handleAddName}
          />
        <View style={styles.spaceBottom}/>
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
        <View style={styles.spaceBottom}/>
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
