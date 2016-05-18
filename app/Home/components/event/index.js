import React, {
  Component,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import Spinner from 'react-native-spinkit';
import moment from 'moment';

import { PureRender } from '../../../components';
import styles from './styles';
import condado from '../../../assets/condado.png';
import logo from '../../../assets/logo.png';
import helpers from '../../../utils/styleHelpers';
import speakerModal from '../../../utils/speakerModal';

class Event extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(route) {
    return () => {
      this.props.navigator.push({ name: route });
    };
  }
  render() {
    if (this.props.fetching && Object.keys(this.props.event).length === 0) {
      return (
        <View style={styles.loader}>
          <Spinner
            type='ThreeBounce'
            color='#50E3C2'
            size={80}
          />
        </View>
      );
    }
    return (
      <ScrollView>
        <Image source={condado} style={styles.eventBackground}>
          <View style={styles.container}>
            <View style={styles.logoWrap}>
              <Image source={logo} style={styles.logo}/>
            </View>
            <Text style={[styles.eventDate, helpers.montserratText]}>{moment(this.props.event.date.iso).format('DD/MMM/YYYY')}</Text>
          </View>
        </Image>
        <View style={styles.talksTitle}>
          <Text style={[styles.talksTitleText, helpers.montserratText]}>Talks</Text>
        </View>
        <View style={styles.speakers}>
          {this.props.event.talks.map((talk, idx) => {
            return (
              <TouchableOpacity key={idx} onPress={() => this.props.updateSpeaker(talk.author)}>
                <View style={styles.speaker}>
                  <Image source={{ uri: talk.author.profileImg }} style={styles.speakerImg}/>
                  <View style={styles.talkInfo}>
                    <Text style={[styles.talkTitle, helpers.montserratText]}>{talk.title}</Text>
                      <Text style={[styles.speakerName, helpers.montserratText]}>{talk.author.fullname.toUpperCase()}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.openMicWrapper}>
          <TouchableOpacity onPress={this.handlePress('open-mic')}>
            <View style={styles.openMicButton}>
              <Text style={[styles.openMicText, helpers.montserratText]}>Request Open Mic</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default PureRender(speakerModal(Event));
