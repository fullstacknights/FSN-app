import React, {
  Component,
  View,
  ScrollView,
  Linking,
  TouchableOpacity,
  Text,
  MapView,
  Platform,
  StyleSheet
} from 'react-native';
import { PureRender } from '../components';

const styles = StyleSheet.create({
  locationButton: {
    backgroundColor: '#2C3E50',
    padding: 15,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5
  },
  locationText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

class Venue extends Component {
  handleGetLocation = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('http://maps.apple.com/?q=Puerto+Rico+Science+Technology+and+Research+Trust&sll=18.39009,-66.06802&z=20&t=s');
    } else {
      Linking.openURL('http://maps.google.com/maps?hl=en&q=Puerto+Rico+Science+Technology+and+Research+Trust');
    }
  };
  render() {
    const region = {
      latitude: 18.39009,
      longitude: -66.06782,
      latitudeDelta: 0.0022,
      longitudeDelta: 0.0021
    };
    const annotations = [{
      latitude: 18.39015,
      longitude: -66.06802
    }];
    return (
      <ScrollView>
        <MapView
          style={{ height: 250 }}
          region={region}
          annotations={annotations}
        />
        <TouchableOpacity onPress={this.handleGetLocation}>
          <View style={styles.locationButton}>
            <Text style={styles.locationText}>Get Location</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default PureRender(Venue);
