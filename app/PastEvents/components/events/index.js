import React, {
  Component,
  ListView,
  View
} from 'react-native';
import Spinner from 'react-native-spinkit';

import styles from './styles';
import { PureRender, SectionHeader } from '../../../components';
import Talk from '../talk';

class Events extends Component {
  renderEvents(rowData) {
    const header = rowData.event.title.split(' ')[1];
    return (
      <View>
        <SectionHeader header={`Talks ${header}`}/>
        <View style={{ paddingTop: 10 }}>
        {rowData.talks.map(talk => {
          const index = talk.video.indexOf('v=') + 2;
          const videoId = talk.video.substring(index);
          const thumbnailUrl = `http://img.youtube.com/vi/${videoId}/0.jpg`;
          return (
            <Talk
              title={talk.title}
              speaker={talk.author}
              videoUrl={talk.video}
              thumbnailUrl={thumbnailUrl}
            />
          );
        })}
        </View>
      </View>
    );
  }

  render() {
    if (this.props.events.length === 0) {
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

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const dataSource = ds.cloneWithRows(this.props.events);
    return (
      <ListView
        dataSource={dataSource}
        renderRow={this.renderEvents}
      />
    );
  }
}

export default PureRender(Events);
