import React, { Component, View, Text } from 'react-native';

import styles from './styles';
import helpers from '../../../utils/styleHelpers';

class Activity extends Component {
  renderDuration(duration) {
    if (duration) {
      return <Text style={[styles.lightGreyText, helpers.montserratText]}>{duration}</Text>;
    }
    return <View></View>;
  }

  render() {
    const styling = [styles.activityWrapper];

    if (this.props.addBorder) {
      styling.push(styles.borderBottom);
    }

    return (
      <View style={styling}>
        <Text
          style={[styles.darkBlueText, styles.activityTitle, helpers.montserratText, helpers.bolder]}
        >
          {this.props.title}
        </Text>
        {this.renderDuration(this.props.duration)}
      </View>
    );
  }
}

export default Activity;
