import React, {
  Component,
  View,
  ScrollView,
  Linking,
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-spinkit';
import MapView from 'react-native-maps';
import { PureRender } from '../components';
import { Photos } from './components';
import helpers from '../utils/styleHelpers';

const styles = StyleSheet.create({
  locationButton: {
    backgroundColor: '#2C3E50',
    padding: 15,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 3
  },
  locationText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  map: {
    flex: 1,
    height: 250
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
      latitudeDelta: 0.0010,
      longitudeDelta: 0.0019
    };
    const marker = {
      latitude: 18.39015,
      longitude: -66.06802
    };
    return (
      <ScrollView>
        <MapView
          style={styles.map}
          initialRegion={region}
        >
          <MapView.Marker
            coordinate={marker}
            title='Puerto Rico Science, Technology, and Research Trust'
          />
        </MapView>
        <TouchableOpacity onPress={this.handleGetLocation}>
          <View style={styles.locationButton}>
            <Text style={[styles.locationText, helpers.montserratText]}>Get Location</Text>
          </View>
        </TouchableOpacity>
        {this.props.fetching && this.props.photos.length === 0 ?
          <View style={styles.loader}>
            <Spinner
              type='ThreeBounce'
              color='#50E3C2'
              size={80}
            />
          </View> :
          <Photos {...this.props}/>
        }
      </ScrollView>
    );
  }
}

export default connect(state => ({
  fetching: state.staticData.fetching,
  photos: state.staticData.photos
}))(PureRender(Venue));
