import React, { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/MaterialIcons';

import helpers from '../../../utils/styleHelpers';
import styles from './styles';

const Alert = props => {
  return (
    <Modal style={[styles.modalContainer, styles.modalSuccess]} isOpen={props.display} onClosed={props.actions.handleClearAlert}>
      <View style={styles.modalTop}>
        <TouchableOpacity onPress={props.actions.handleClearAlert}>
          <Icon
            color="white"
            name="clear"
            size={25}
            style={styles.modalClose} />
        </TouchableOpacity>
          <View style={styles.modalTopContent}>
            <View style={styles.modalIconWrapper}>
              <View style={styles.modalIcon}>
                <Icon
                color="white"
                name="done"
                size={50}/>
              </View>
            </View>
            <View style={styles.modalHeaderWrapper}>
              <Text style={[styles.modalHeader, helpers.montserratText]}>{props.header}</Text>
            </View>
          </View>
      </View>
      <View style={styles.modalBottom}>
        <View style={styles.modalMessageWrapper}>
          <Text style={[styles.modalMessage, helpers.montserratText]}>{props.messageLine1}</Text>
          <Text style={[styles.modalMessage, helpers.montserratText]}>{props.messageLine2}</Text>
        </View>
      </View>
    </Modal>
  );
}

export default Alert;
