import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 40,
    paddingRight: 40
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  section: {
    marginBottom: 30
  },
  title: {
    color: '#2C3E50',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  answer: {
    textAlign: 'center',
    color: '#9B9B9B',
    fontWeight: 'bold'
  },
  wifi: {
    textAlign: 'center',
    fontSize: 16,
    color: '#9B9B9B'
  },
  copyPassword: {
    flex: 1,
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#696565'
  },
  copyPasswordText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  part: {
    color: '#9B9B9B',
    marginBottom: 10,
    fontWeight: 'bold'
  }
});
