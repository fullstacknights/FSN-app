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
import Radio from 'react-native-simple-radio-button';

import styles from './styles';
import logo from '../../../assets/logo.png';
import helpers from '../../../utils/styleHelpers';

class Form extends Component {
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
  render() {
    const props = this.props;
    const radio_props = [
      {label: 'Developer', value: 'developer' },
      {label: 'Designer', value: 'designer' },
      {label: 'Developer and Designer', value: 'both' },
      {label: 'Other', value: 'other' }
    ];
    const buttonState = (props.talk.isLoading) ? styles.submitTalkDisabled : styles.submitTalk;
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
            source={logo}/>
        </View>
        <Text style={[styles.whiteText, styles.centerText, styles.spaceBottom]}>
          All talks must be submitted here to be considered for review for Fullstack Nights. Once the talk is submitted the FSN team will review the topic, content, and visuals to see if its up to what the team considers to be FSN quality.
        </Text>
        <Text style={[styles.whiteText, styles.boldText]}>
          What is your name?
        </Text>
        <TextInput
          defaultValue={props.talk.name}
          ref='name'
          onFocus={this.scrollTo('name')}
          style={styles.input}
          autoCapitalize="words"
          autoCorrect={false}
          onSubmitEditing={this.scrollTo('email')}
          onBlur={props.actions.handleAddName}
        />
        <View style={styles.spaceBottom}/>
        <Text style={[styles.whiteText, styles.boldText]}>
          What is your email address?
        </Text>
        <TextInput
          defaultValue={props.talk.email}
          ref='email'
          onFocus={this.scrollTo('email')}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={this.scrollTo('profile')}
          onBlur={props.actions.handleAddEmail}
        />
        <View style={styles.spaceBottom}/>
        <Text style={[styles.whiteText, styles.boldText]}>
          Link to your online profile (e.g. @gcollazo)
        </Text>
        <TextInput
          defaultValue={props.talk.onlineProfile}
          ref='profile'
          onFocus={this.scrollTo('profile')}
          style={styles.input}
          autoCapitalize="words"
          onSubmitEditing={this.scrollTo('topic')}
          onBlur={props.actions.handleAddOnlineProfile}
        />
        <View style={styles.spaceBottom}/>
        <Text style={[styles.whiteText, styles.boldText]}>
          I am ...
        </Text>
        <View style={styles.radio}>
          <Radio
            radio_props={radio_props}
            initial={0}
            buttonColor={'#50C900'}
            labelColor={'white'}
            onPress={props.actions.handleAddProfession}
            style={styles.radioSpacing}
          />
        </View>
        <View style={styles.spaceBottom}/>
        <Text style={[styles.whiteText, styles.boldText]}>
          What is your proposed topic?
        </Text>
        <TextInput
          defaultValue={props.talk.topic}
          ref='topic'
          onFocus={this.scrollTo('topic')}
          multiline={true}
          style={[styles.input, styles.textarea]}
          onEndEditing={props.actions.handleAddTopic}
        />
        <View style={styles.spaceBottom}/>
        <Text style={[styles.whiteText, styles.boldText]}>
          Why should this be presented in FSN?
        </Text>
        <TextInput
          defaultValue={props.talk.importance}
          ref='presented'
          onFocus={this.scrollTo('presented')}
          multiline={true}
          style={[styles.input, styles.textarea]}
          onEndEditing={props.actions.handleAddImportance}
        />
        <View style={styles.spaceBottom}/>
        <Text style={[styles.whiteText, styles.boldText]}>
          Your questions or comments
        </Text>
        <TextInput
          defaultValue={props.talk.questionsComments}
          ref='questions'
          onFocus={this.scrollTo('questions')}
          multiline={true}
          style={[styles.input, styles.textarea]}
          onChangeText={props.actions.handleAddQuestionsComments}
        />
        <TouchableOpacity onPress={props.actions.handleSubmit.bind(null, props.talk)}>
          <View style={[styles.button, buttonState]}>
            <Text style={[styles.submitTalkText, helpers.montserratText]}>Submit</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default Form;
