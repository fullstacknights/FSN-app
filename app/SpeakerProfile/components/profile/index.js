import React, { Component, Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import helpers from '../../../utils/styleHelpers';
import styles from './styles';

class Profile extends Component {
  handleDismissProfile = () => {
    this.props.dismiss();
  };

  handleIconPress(url) {
    Linking.openURL(url);
  }

  renderIcon(url, icon) {
    if (url) {
      return (
        <View style={styles.modalIcon}>
          <TouchableOpacity onPress={this.handleIconPress.bind(null, url)}>
            <View style={styles.modalIconCircle}>
              <Ionicons
                color="#50E3C2"
                name={icon}
                size={22}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }

  render() {
    const backdropContent = (
      <TouchableOpacity onPress={this.handleDismissProfile}>
        <Icon
          color="white"
          name="clear"
          size={25}
          style={styles.modalClose} />
      </TouchableOpacity>
    );

    return (
      <Modal
        isOpen={this.props.displayProfile}
        style={styles.modal}
        onClosed={this.handleDismissProfile}
        backdropContent={backdropContent}
        position={"center"}
        backdropOpacity={0.6}
      >
        <View style={styles.modalTop}>
          <Image source={{ uri: this.props.profileImg }} style={styles.speakerImg}/>
          <Text style={[helpers.montserratText, styles.modalTopText]}>{this.props.fullname}</Text>
        </View>
        <View style={styles.modalBottom}>
          <View style={styles.modalBottomContent}>
            <Text style={[styles.modalBottomText, helpers.montserratText]}>
              {this.props.about}
            </Text>
          </View>
          <View style={styles.modalIcons}>
            {this.renderIcon(this.props.twitter, "social-twitter")}
            {this.renderIcon(this.props.github, "social-github")}
            {this.renderIcon(this.props.dribbble, "social-dribbble-outline")}
          </View>
        </View>
      </Modal>
    );
  }
}

export default Profile;
