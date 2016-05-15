import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    padding: 12
  },
  scrollView: {
    backgroundColor: '#233140',
    flex: 1
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
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
  button: {
    borderRadius: 3,
    marginBottom: 20,
    padding: 15
  },
  openMic: {
    backgroundColor: '#50E3C2'
  },
  openMicDisabled: {
    backgroundColor: 'rgba(80, 227, 194, 0.5)'
  },
  openMicText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  openMicTextDisabled: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  error: {
    color: 'tomato',
    fontWeight: 'bold'
  }
});
