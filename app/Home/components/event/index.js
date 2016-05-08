import React, {
  Component,
  ScrollView,
  View,
  Image,
  Text
} from 'react-native';
import Spinner from 'react-native-spinkit';
import moment from 'moment';
import { PureRender } from '../../../components';
import styles from './styles';
import condado from '../../../assets/condado.png';
import logo from '../../../assets/logo.png';


class Event extends Component {
  render() {
    if (this.props.fetching) {
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
            <Text style={styles.eventVersion}>{this.props.event.title.split(' ')[1]}</Text>
            <Text style={styles.eventDate}>{moment(this.props.event.date).format('DD/MMM/YYYY')}</Text>
            <View style={styles.speakers}>
              {this.props.event.talks.map((talk, idx) => {
                return (
                  <View style={styles.speaker}>
                    <Image source={{ uri: talk.profileImg }} style={styles.speakerImg}/>
                    <Text style={styles.speakerName}>{talk.author}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </Image>
      </ScrollView>
    );
  }
}

export default PureRender(Event);
