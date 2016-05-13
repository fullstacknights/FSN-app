import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    padding: 20,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  eventBackground: {
    width: Dimensions.get('window').width,
    height: 300
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
    fontSize: 20,
    marginTop: 30
  },
  speakers: {
    flex: 1
  },
  speaker: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(151, 151, 151, 0.3)'
  },
  speakerImg: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  speakerName: {
    marginTop: 5,
    fontSize: 12,
    color: '#979797',
    fontWeight: '400'
  },
  talkTitle: {
    fontSize: 14,
    color: '#6B6B6B',
    fontWeight: 'bold'
  },
  talkInfo: {
    flex: 1,
    marginLeft: 20
  },
  talksTitle: {
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'rgba(100, 100, 100, 0.2)'
  },
  talksTitleWrap: {
    fontSize: 16,
    color: 'rgba(30, 30, 30, 0.8)'
  },
  openMicWrapper: {
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2'
  },
  openMicButton: {
    backgroundColor: '#233140',
    borderRadius: 3,
    margin: 12,
    padding: 15
  },
  openMicText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }
});
