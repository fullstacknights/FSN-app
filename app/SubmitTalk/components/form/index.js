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
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';

import styles from './styles';
import logo from '../../../assets/logo.png';
import helpers from '../../../utils/styleHelpers';
import Loader from '../../../components/loader/index';
import validator from '../../../utils/validator';

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
  componentDidMount() {
    this.props.setFields([{
      name: 'name',
      validations: ['required']
    }, {
      name: 'email',
      validations: ['required', 'email']
    }, {
      name: 'onlineProfile',
      validations: ['required']
    }, {
      name: 'topic',
      validations: ['required']
    }, {
      name: 'importance',
      validations: ['required']
    }]);
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
          this.refs[input].measureLayout(
            React.findNodeHandle(this._scrollView),
            (ox, oy) => {
            this._scrollView.scrollTo({ x: 0, y: oy - 30, animation: true });
          });
          this.setState({ focusedInput: input });
        }
      });
    };
  }
  handleSubmit = () => {
    this.props.validate();
    if (this.props.isValid) {
      this.props.actions.handleSubmit(this.props.talk);
    }
  };
  renderForm(props, scrollViewContent) {
    const buttonState = (this.props.isConnected || props.talk.isLoading) ? styles.submitTalkDisabled : styles.submitTalk;
    const radio_props = [
      {label: 'Developer', value: 'developer' },
      {label: 'Designer', value: 'designer' },
      {label: 'Developer and Designer', value: 'both' },
      {label: 'Other', value: 'other' }
    ];

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
        <Text style={[styles.whiteText, styles.centerText, styles.spaceBottom, helpers.montserratText]}>
          All talks must be submitted here to be considered for review for Fullstack Nights. Once the talk is submitted the FSN team will review the topic, content, and visuals to see if its up to what the team considers to be FSN quality.
        </Text>
        <Text style={[styles.whiteText, styles.boldText, helpers.montserratText]}>
          What is your name?
        </Text>
        <TextInput
          value={props.talk.name}
          ref='name'
          onFocus={this.scrollTo('name')}
          style={styles.input}
          autoCapitalize="words"
          autoCorrect={false}
          onSubmitEditing={this.scrollTo('email')}
          onChangeText={props.actions.handleAddName}
        />
        {this.props.hasError('name') ?
          <View>
            {this.props.getErrors('name').map((err, idx) => {
              return <Text key={idx} style={[styles.error, helpers.montserratText]}>{err}</Text>
            })}
          </View> :
          null
        }
        <View style={styles.spaceBottom}/>
        <Text style={[styles.whiteText, styles.boldText, helpers.montserratText]}>
          What is your email address?
        </Text>
        <TextInput
          value={props.talk.email}
          ref='email'
          onFocus={this.scrollTo('email')}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={this.scrollTo('onlineProfile')}
          onChangeText={props.actions.handleAddEmail}
        />
        {this.props.hasError('email') ?
          <View>
            {this.props.getErrors('email').map((err, idx) => {
              return <Text key={idx} style={[styles.error, helpers.montserratText]}>{err}</Text>
            })}
          </View> :
          null
        }
        <View style={styles.spaceBottom}/>
        <Text style={[styles.whiteText, styles.boldText, helpers.montserratText]}>
          Link to your online profile (e.g. @gcollazo)
        </Text>
        <TextInput
          value={props.talk.onlineProfile}
          ref='onlineProfile'
          onFocus={this.scrollTo('onlineProfile')}
          style={styles.input}
          autoCapitalize="words"
          onSubmitEditing={this.scrollTo('topic')}
          onChangeText={props.actions.handleAddOnlineProfile}
        />
        {this.props.hasError('onlineProfile') ?
          <View>
            {this.props.getErrors('onlineProfile').map((err, idx) => {
              return <Text key={idx} style={[styles.error, helpers.montserratText]}>{err}</Text>
            })}
          </View> :
          null
        }
        <View style={styles.spaceBottom}/>
        <Text style={[styles.whiteText, styles.boldText, helpers.montserratText]}>
          I am ...
        </Text>
        <View style={styles.radio}>
          <RadioForm
            initial={0}
            buttonColor={'#50C900'}
            labelColor={'white'}
            onPress={props.actions.handleAddProfession}
            style={[styles.radioSpacing, helpers.montserratText]}
          >
            {radio_props.map((obj, idx) => {
              return (
                <RadioButton labelHorizontal={true} key={idx} >
                  <RadioButtonInput
                    obj={obj}
                    index={idx}
                    isSelected={props.profession === obj.value}
                    onPress={props.actions.handleAddProfession}
                    buttonInnerColor={'#2196f3'}
                    buttonOuterColor={'#2196f3'}
                    buttonSize={25}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={idx}
                    labelHorizontal={true}
                    onPress={props.actions.handleAddProfession}
                    labelStyle={[styles.radioLabel, helpers.montserratText]}
                  />
                </RadioButton>
              );
            })}
          </RadioForm>
        </View>
        <View style={styles.spaceBottom}/>
        <Text style={[styles.whiteText, styles.boldText, helpers.montserratText]}>
          What is your proposed topic?
        </Text>
        <TextInput
          value={props.talk.topic}
          ref='topic'
          onFocus={this.scrollTo('topic')}
          multiline={true}
          style={[styles.input, styles.textarea]}
          onChangeText={props.actions.handleAddTopic}
        />
        {this.props.hasError('topic') ?
          <View>
            {this.props.getErrors('topic').map((err, idx) => {
              return <Text key={idx} style={[styles.error, helpers.montserratText]}>{err}</Text>
            })}
          </View> :
          null
        }
        <View style={styles.spaceBottom}/>
        <Text style={[styles.whiteText, styles.boldText, helpers.montserratText]}>
          Why should this be presented in FSN?
        </Text>
        <TextInput
          value={props.talk.importance}
          ref='importance'
          onFocus={this.scrollTo('importance')}
          multiline={true}
          style={[styles.input, styles.textarea]}
          onChangeText={props.actions.handleAddImportance}
        />
        {this.props.hasError('importance') ?
          <View>
            {this.props.getErrors('importance').map((err, idx) => {
              return <Text key={idx} style={[styles.error, helpers.montserratText]}>{err}</Text>
            })}
          </View> :
          null
        }
        <View style={styles.spaceBottom}/>
        <Text style={[styles.whiteText, styles.boldText, helpers.montserratText]}>
          Your questions or comments
        </Text>
        <TextInput
          value={props.talk.questionsComments}
          ref='questionsComments'
          onFocus={this.scrollTo('questionsComments')}
          multiline={true}
          style={[styles.input, styles.textarea]}
          onChangeText={props.actions.handleAddQuestionsComments}
        />
        {this.props.hasError('questionsComments') ?
          <View>
            {this.props.getErrors('questionsComments').map((err, idx) => {
              return <Text key={idx} style={[styles.error, helpers.montserratText]}>{err}</Text>
            })}
          </View> :
          null
        }
        {this.props.isConnected && !this.props.talk.isLoading ?
          <TouchableOpacity onPress={this.handleSubmit}>
            <View style={[styles.button, styles.submitTalk]}>
              <Text style={[styles.submitTalkText, helpers.montserratText]}>Submit</Text>
            </View>
          </TouchableOpacity> :
          <View style={[styles.button, styles.submitTalkDisabled]}>
            <Text style={[styles.submitTalkTextDisabled, helpers.montserratText]}>Submit</Text>
          </View>
        }
      </ScrollView>
    );
  }

  render() {
    const props = this.props;

    if (props.talk.isLoading) {
      return (<Loader />);
    }

    const scrollViewContent = {
      paddingBottom: this.state.keyboardShowing ? this.state.visibleHeight - 150 : 0
    };

    return (this.renderForm(props, scrollViewContent));
  }
}

export default validator(Form);
