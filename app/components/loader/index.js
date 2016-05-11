import React, { View } from 'react-native';
import Spinner from 'react-native-spinkit';

import styles from './styles';

const Loader = () => {
  return (
    <View style={styles.loader}>
      <Spinner
        type='ThreeBounce'
        color='#50E3C2'
        size={80}
      />
    </View>
  );
}

export default Loader;
