import React, {
  Component,
  ListView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Spinner from 'react-native-spinkit';

import styles from './styles';
import Activity from '../activity/index';
import PureRender from '../../../components/pure-render/index';
import SectionHeader from '../../../components/section-header/index';

class Activities extends Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
  }

  handlePress(route) {
    return (() => {
      this.props.routerActions.transitionTo(route)
    });
  }

  renderActivities(rowData) {
    return (
      <View>
        <SectionHeader header={rowData.startingAt} />
        {rowData.activities.map((activity, index) => {
          const addBorder = ((rowData.activities.length - 1) === index) ? false : true;
            return (
              <Activity addBorder={addBorder} {...activity} />
            );
          }
        )}
      </View>
    );
  }

  renderFooter() {
    return (
      <View style={styles.submitTalkWrapper}>
        <TouchableOpacity onPress={this.handlePress('submit-talk')}>
          <View style={styles.submitTalkButton}>
            <Text style={styles.submitTalkText}>Submit a Talk</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    if (this.props.data.isFetching) {
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

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(this.props.data.schedule);
    return (
      <ListView
        dataSource={dataSource}
        renderFooter={this.renderFooter}
        renderRow={rowData => this.renderActivities(rowData)} />
    );
  }
}

export default PureRender(Activities)
