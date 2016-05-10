import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
  textarea: {
    height: 100,
    fontSize: 16
  },
  radio: {
    paddingTop: 15,
    paddingLeft: 20,
    alignItems: 'flex-start'
  },
  radioSpacing: {
    marginBottom: 10,
    alignItems: 'flex-start'
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
  button: {
    borderRadius: 3,
    marginBottom: 20,
    padding: 15
  },
  submitTalk: {
    backgroundColor: '#50E3C2',
  },
  submitTalkDisabled: {
    backgroundColor: 'rgba(80,227,194,0.90)'
  },
  spaceBottom: {
    marginBottom: 20
  },
  submitTalkText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }
})
