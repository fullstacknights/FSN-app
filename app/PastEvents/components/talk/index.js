import React, {
  Component,
  Text,
  Image,
  View,
  TouchableOpacity,
  Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { PureRender } from '../../../components';

class Talk extends Component {
  constructor(props) {
    super(props);
    this.handleVideoPress = this.handleVideoPress.bind(this);
  }

  handleVideoPress() {
    Linking.openURL(this.props.videoUrl);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleVideoPress}>
          <View>
            <View style={styles.video}/>
            <Image
              source={{ uri: this.props.thumbnailUrl }}
              style={styles.thumbnail}
            />
            <View style={styles.playButton}>
              <Icon
                color='#4A4A4A'
                name='play-arrow'
                size={45}
                style={styles.icon}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.infoWrap}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.speaker}>{this.props.speaker}</Text>
        </View>
      </View>
    );
  }
}

export default PureRender(Talk);
