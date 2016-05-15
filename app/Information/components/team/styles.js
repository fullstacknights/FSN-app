import { StyleSheet, Dimensions } from 'react-native';

const memberWidth = (Dimensions.get('window').width - 100) / 2;

export default StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
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
    flexWrap: 'wrap'
  },
  image: {
    width: memberWidth - 40,
    height: memberWidth - 40,
    borderRadius: (memberWidth - 40) / 2,
    marginBottom: 20
  },
  member: {
    width: memberWidth,
    alignItems: 'center',
    marginBottom: 30,
    marginLeft: 20
  },
  name: {
    color: '#2C3E50',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
