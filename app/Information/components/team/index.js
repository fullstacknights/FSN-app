import React, {
  Component,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';
import Spinner from 'react-native-spinkit';

import { PureRender } from '../../../components';
import styles from './styles';
import helpers from '../../../utils/styleHelpers';

class Team extends Component {
  handleTwitterLink = (twitterHandle) => {
    return () => {
      if (twitterHandle) {
        Linking.openURL(`https://twitter.com/${twitterHandle}`);
      }
    };
  };
  render() {
    if (this.props.fetching && this.props.faq.length === 0) {
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
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.wrap}>
          {this.props.team.map((member, idx) => {
            return (
              <TouchableOpacity key={idx} onPress={this.handleTwitterLink(member.twitter)}>
                <View style={styles.member}>
                  <View style={styles.image}>
                    <Image
                      style={styles.image}
                      source={{ uri: member.image }}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.name, helpers.montserratText]}>{member.name}</Text>
                    <Text style={[styles.name, helpers.montserratText]}>{member.twitter}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

export default PureRender(Team);
