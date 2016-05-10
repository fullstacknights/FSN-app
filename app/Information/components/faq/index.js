import React, {
  Component,
  ScrollView,
  View,
  Text
} from 'react-native';
import Spinner from 'react-native-spinkit';
import Accordion from 'react-native-collapsible/Accordion';

import { PureRender } from '../../../components';
import styles from './styles';
import helpers from '../../../utils/styleHelpers';

class Faq extends Component {
  _renderHeader = (section) => {
    return (
      <View style={styles.header}>
        <Text style={[styles.title, helpers.montserratText]}>{section.question}</Text>
      </View>
    );
  };
  _renderContent = (section) => {
    return (
      <View>
        <Text style={[styles.answer, helpers.montserratText]}>{section.answer}</Text>
      </View>
    );
  };
  render() {
    if (this.props.fetching && this.props.faq.length === 0) {
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
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Accordion
          sections={this.props.faq}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          underlayColor='transparent'
        />
      </ScrollView>
    );
  }
}

export default PureRender(Faq);
