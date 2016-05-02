import React, {
  Component,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';
import PureRender from '../pure-render';
import styles from './styles';
import banner from '../../assets/banner.png';
import logo from '../../assets/logo.png';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
    this.handleBuyTicketsPressed = this.handleBuyTicketsPressed.bind(this);
  }
  handlePress(route) {
    return () => {
      this.props.toggleLeftDrawer();
      this.props.transitionTo(route);
    };
  }
  handleBuyTicketsPressed() {
    if (this.props.ticketsUrl !== '') {
      Linking.openURL(this.props.ticketsUrl);
    }
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.banner}>
          <Image
            style={styles.backImage}
            source={banner}
          />
          <Image
            style={styles.logo}
            source={logo}
          />
          <Text
            style={[styles.bannerText, styles.headerText]}
          >
            Full Stack Nights
          </Text>
          <Text style={styles.bannerText}>Every two months</Text>
        </View>
        <View style={styles.navAndTickets}>
          <View style={styles.nav}>
            <TouchableOpacity onPress={this.handlePress('home')}>
              <Text style={styles.navLink}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handlePress('schedule')}>
              <Text style={styles.navLink}>Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handlePress('venue')}>
              <Text style={styles.navLink}>Venue</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handlePress('past-events')}>
              <Text style={styles.navLink}>Past Events</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handlePress('information')}>
              <Text style={styles.navLink}>Information</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handlePress('submit-talk')}>
              <Text style={styles.navLink}>Submit Talk</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handlePress('open-mic')}>
              <Text style={styles.navLink}>Request Open Mic</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={this.handleBuyTicketsPressed}>
            <View style={styles.ticketsButton}>
              <Text style={styles.ticketsText}>Buy Tickets</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default PureRender(Menu);
