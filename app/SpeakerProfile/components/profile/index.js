import React, { Component, Image, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import helpers from '../../../utils/styleHelpers';
import styles from './styles';

class Profile extends Component {
  handleDismissProfile = () => {
    this.props.dismiss();
  };
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem iste maxime maiores amet perferendis quibusdam nobis tempore non, architecto. Accusantium quaerat molestias ipsa sunt dignissimos corrupti tempore ea adipisci facilis.
            </Text>
          </View>
          <View style={styles.modalIcons}>
            <View style={styles.modalIcon}>
              <View style={styles.modalIconCircle}>
                <Ionicons
                  color="#50E3C2"
                  name="social-twitter"
                  size={20}
                />
              </View>
            </View>
            <View style={styles.modalIcon}>
              <View style={styles.modalIconCircle}>
                <Ionicons
                  color="#50E3C2"
                  name="social-github"
                  size={22}
                />
              </View>
            </View>
            <View style={styles.modalIcon}>
              <View style={styles.modalIconCircle}>
                <Ionicons
                  color="#50E3C2"
                  name="social-dribbble-outline"
                  size={20}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default Profile;
