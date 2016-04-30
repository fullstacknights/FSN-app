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
  wrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  member: {
    alignItems: 'center',
    marginBottom: 30
  },
  name: {
    color: '#2C3E50',
    fontWeight: 'bold'
  }
});
