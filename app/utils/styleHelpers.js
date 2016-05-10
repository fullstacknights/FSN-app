import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  montserratText: {
    fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'montserrat'
  }
})
