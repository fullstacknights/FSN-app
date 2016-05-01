import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitTalkWrapper: {
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
  },
  submitTalkButton: {
    backgroundColor: '#233140',
    borderRadius: 3,
    margin: 12,
    padding: 15
  },
  submitTalkText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }
});
