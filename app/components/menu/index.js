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
import helpers from '../../utils/styleHelpers';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
    this.handleBuyTicketsPressed = this.handleBuyTicketsPressed.bind(this);
  }
  handlePress(route) {
    return () => {
      this.props.toggleLeftDrawer();
      const routes = this.props.navigator.getCurrentRoutes();
      if (routes[routes.length - 1].name !== route) {
        this.props.navigator.push({ name: route });
      }
    };
  }
  handleBuyTicketsPressed() {
    if (this.props.event.ticketsLink) {
      Linking.openURL(this.props.event.ticketsLink);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
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
              style={[styles.bannerText, styles.headerText, helpers.montserratText]}
            >
              Full Stack Nights
            </Text>
            <Text style={[styles.bannerText, helpers.montserratText]}>Every two months</Text>
          </View>
          <View style={styles.navAndTickets}>
            <View style={styles.nav}>
              <TouchableOpacity onPress={this.handlePress('home')}>
                <Text style={[styles.navLink, helpers.montserratText]}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handlePress('schedule')}>
                <Text style={[styles.navLink, helpers.montserratText]}>Schedule</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handlePress('venue')}>
                <Text style={[styles.navLink, helpers.montserratText]}>Venue</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handlePress('past-events')}>
                <Text style={[styles.navLink, helpers.montserratText]}>Past Events</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handlePress('information')}>
                <Text style={[styles.navLink, helpers.montserratText]}>Information</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handlePress('submit-talk')}>
                <Text style={[styles.navLink, helpers.montserratText]}>Submit Talk</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handlePress('open-mic')}>
                <Text style={[styles.navLink, helpers.montserratText]}>Request Open Mic</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity onPress={this.handleBuyTicketsPressed} style={styles.ticketsButton}>
          <Text style={[styles.ticketsText, helpers.montserratText]}>Buy Tickets</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PureRender(Menu);
