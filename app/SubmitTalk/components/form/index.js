import React, { Image, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Radio from 'react-native-simple-radio-button';
import SmartScrollView from 'react-native-smart-scroll-view';

import styles from './styles';
import logo from '../../../assets/logo.png';

const Form = props => {
  const radio_props = [
    {label: 'Developer', value: 'developer' },
    {label: 'Designer', value: 'designer' },
    {label: 'Developer and Designer', value: 'both' },
    {label: 'Other', value: 'other' }
  ];
  const buttonState = (props.talk.isLoading) ? styles.submitTalkDisabled : styles.submitTalk;

  return (
    <SmartScrollView scrollContainerStyle={[styles.container, styles.scrollView]} scrollPadding={15}>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logo}
          source={logo}/>
      </View>
      <Text style={[styles.whiteText, styles.centerText, styles.spaceBottom]}>
        All talks must be submitted here to be considered for review for Fullstack Nights. Once the talk is submitted the FSN team will review the topic, content, and visuals to see if its up to what the team considers to be FSN quality.
      </Text>
      <View style={styles.spaceBottom}>
        <Text style={[styles.whiteText, styles.boldText]}>
          What is your name?
        </Text>
        <TextInput
          style={styles.input}
          autoFocus={true}
          autoCapitalize="words"
          autoCorrect={false}
          onBlur={props.actions.handleAddName}
          smartScrollOptions={{
            moveToNext: true,
            type: 'text'
          }}
          />
      </View>
      <View style={styles.spaceBottom}>
        <Text style={[styles.whiteText, styles.boldText]}>
          What is your email address?
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onBlur={props.actions.handleAddEmail}
          smartScrollOptions={{
            moveToNext: true,
            type: 'text'
          }} />
      </View>
      <View style={styles.spaceBottom}>
        <Text style={[styles.whiteText, styles.boldText]}>
          Link to your online profile (e.g. @gcollazo)
        </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="words"
          onBlur={props.actions.handleAddOnlineProfile}
          smartScrollOptions={{
            moveToNext: true,
            type: 'text'
          }} />
      </View>
      <View style={styles.spaceBottom}>
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
            style={styles.radioSpacing} />
        </View>
        <View style={styles.spaceBottom}>
          <Text style={[styles.whiteText, styles.boldText]}>
            What is your proposed topic?
          </Text>
          <TextInput
            multiline={true}
            style={[styles.input, styles.textarea]}
            onBlur={props.actions.handleAddTopic}
            smartScrollOptions={{
              moveToNext: true,
              type: 'text'
            }} />
        </View>
        <View style={styles.spaceBottom}>
          <Text style={[styles.whiteText, styles.boldText]}>
            Why should this be presented in FSN?
          </Text>
          <TextInput
            multiline={true}
            style={[styles.input, styles.textarea]}
            onBlur={props.actions.handleAddImportance}
            smartScrollOptions={{
              moveToNext: true,
              type: 'text'
            }} />
        </View>
        <View>
          <Text style={[styles.whiteText, styles.boldText]}>
            Your questions or comments
          </Text>
          <TextInput
            multiline={true}
            style={[styles.input, styles.textarea]}
            onChangeText={props.actions.handleAddQuestionsComments}
            smartScrollOptions={{
              moveToNext: true,
              type: 'text'
            }} />
        </View>
      </View>
      <View style={styles.spaceBottom}>
        <TouchableOpacity onPress={props.actions.handleSubmit.bind(null, props.talk)}>
          <View style={[styles.button, buttonState]}>
            <Text style={styles.submitTalkText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SmartScrollView>
  )
}

export default Form;
