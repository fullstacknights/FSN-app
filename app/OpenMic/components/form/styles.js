import React, { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    padding: 12
  },
  scrollView: {
    backgroundColor: '#233140',
    height: 300
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  logo: {
    width: 90,
    height: 90
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#979797',
    borderRadius: 3,
    borderWidth: 1,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10
  },
  whiteText: {
    color: 'white'
  },
  centerText: {
    textAlign: 'center'
  },
  boldText: {
    fontWeight: 'bold'
  },
  spaceBottom: {
    marginBottom: 20
  },
  openMicButton: {
    backgroundColor: '#50E3C2',
    borderRadius: 3,
    marginBottom: 20,
    padding: 15
  },
  openMicText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }
});
