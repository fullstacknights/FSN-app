import {
  Dimensions,
  StyleSheet
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-between'
  },
  image: {
    width: (WINDOW_WIDTH / 2) - 30,
    height: 150,
    marginBottom: 10
  }
});
