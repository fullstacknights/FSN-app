import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 350,
    padding: 20,
    backgroundColor: 'transparent'
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  eventBackground: {
    width: Dimensions.get('window').width,
    height: 350
  },
  logo: {
    width: 100,
    height: 100
  },
  logoWrap: {
    alignItems: 'center'
  },
  eventVersion: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20
  },
  eventDate: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20
  },
  speakers: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
  },
  speaker: {
    flex: 1,
    alignItems: 'center'
  },
  speakerImg: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  speakerName: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
