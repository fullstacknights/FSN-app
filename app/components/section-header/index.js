import React, { View, Text } from 'react-native';

import styles from './styles';

const SectionHeader = props => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.darkGreyText}>{props.header}</Text>
    </View>
  );
}

export default SectionHeader;
