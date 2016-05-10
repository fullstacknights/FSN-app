import React, { View, Text } from 'react-native';

import styles from './styles';
import helpers from '../../utils/styleHelpers';

const SectionHeader = props => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={[styles.darkGreyText, helpers.montserratText]}>{props.header}</Text>
    </View>
  );
};

export default SectionHeader;
