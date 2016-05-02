import React, {
  Component,
  Image,
  Dimensions,
  View
} from 'react-native';
import styles from './styles';
import Lightbox from 'react-native-lightbox';

const WINDOW_WIDTH = Dimensions.get('window').width;
const activeProps = {
  width: WINDOW_WIDTH,
  height: 300,
  resizeMode: 'contain'
};

class Photos extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.photos.map((url, idx) => {
          return (
            <Lightbox
              key={idx}
              underlayColor='transparent'
              activeProps={activeProps}
            >
              <Image
                key={idx}
                style={styles.image}
                resizeMode='cover'
                source={{ uri: url }}
              />
            </Lightbox>
          );
        })}
      </View>
    );
  }
}

export default Photos;
