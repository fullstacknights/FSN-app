import React, {
  Component,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import PureRender from '../pure-render';
import styles from './styles';
import banner from '../../assets/banner.png';
import logo from '../../assets/logo.png';

class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
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
            <TouchableOpacity>
              <Text style={styles.navLink}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.navLink}>Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.navLink}>Venue</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.navLink}>Past Events</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.navLink}>Information</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.navLink}>Submit Talk</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.navLink}>Request Open Mic</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View style={styles.ticketsButton}>
              <Text style={styles.ticketsText}>Buy Tickets</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PureRender(Menu);
