import React, { Image, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import logo from '../../../assets/logo.png';

const Form = props => {
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
        <TextInput style={styles.input}/>
      </View>
      <View style={styles.spaceBottom}>
        <Text style={[styles.whiteText, styles.boldText]}>
          What is the topic?
        </Text>
        <TextInput style={styles.input}/>
      </View>
      <View style={styles.spaceBottom}>
        <TouchableOpacity>
          <View style={styles.openMicButton}>
            <Text style={styles.openMicText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Form;
