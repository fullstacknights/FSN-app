import React, { Component, View, Text } from 'react-native';

import styles from './styles';

class Activity extends Component {
  renderDuration(duration) {
    if (duration) {
      return (<Text style={styles.lightGreyText}>{duration}</Text>);
    }
  }

  render() {
    let styling = [styles.activityWrapper];

    if (this.props.addBorder) {
      styling.push(styles.borderBottom);
    }

    return (
      <View style={styling}>
        <Text style={[styles.darkBlueText, styles.activityTitle]}>{this.props.title}</Text>
        {this.renderDuration(this.props.duration)}
      </View>
    );
  }
}

export default Activity;
