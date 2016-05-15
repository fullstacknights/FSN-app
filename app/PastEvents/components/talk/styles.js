import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#979797'
  },
  infoWrap: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10
  },
  title: {
    color: '#233140',
    fontWeight: 'bold',
    marginBottom: 5
  },
  speaker: {
    color: '#9B9B9B'
  },
  video: {
    width: 100,
    height: 70,
    backgroundColor: '#9B9B9B'
  },
  playButton: {
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  },
  thumbnail: {
    backgroundColor: 'transparent',
    width: 100,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    backgroundColor: 'transparent'
  }
});
