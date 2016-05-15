import React, {
  Component,
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import { PureRender } from '../../../components';
import helpers from '../../../utils/styleHelpers';

class Talk extends Component {
  constructor(props) {
    super(props);
    this.handleVideoPress = this.handleVideoPress.bind(this);
  }

  handleVideoPress() {
    Linking.openURL(this.props.videoUrl);
  }

  render() {
    const talkStyle = (this.props.length === this.props.index) ? styles.container : [styles.container, styles.borderBottom];

    return (
      <View style={talkStyle}>
        <TouchableOpacity onPress={this.handleVideoPress}>
          <View>
            <View style={styles.video}>
              <Image
                source={{ uri: this.props.thumbnailUrl }}
                style={styles.thumbnail}
              >
                <View style={styles.playButton}>
                  <Icon
                    color='#4A4A4A'
                    name='play-arrow'
                    size={45}
                    style={styles.icon}
                  />
                </View>
              </Image>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.infoWrap}>
          <Text style={[styles.title, helpers.montserratText]}>{this.props.title}</Text>
          <TouchableOpacity onPress={() => this.props.updateSpeaker(this.props.speaker)}>
            <Text style={[styles.speaker, helpers.montserratText]}>{this.props.speaker.fullname.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PureRender(Talk);
