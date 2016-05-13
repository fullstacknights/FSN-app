import React, {
  Component,
  Image,
  ListView,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Spinner from 'react-native-spinkit';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import { PureRender, SectionHeader } from '../../../components';
import Talk from '../talk';
import speakerModal from '../../../utils/speakerModal';


class Events extends Component {
  constructor(props) {
    super(props);

    this.renderEvents = this.renderEvents.bind(this);
  }

  renderEvents(rowData) {
    const header = rowData.event.title.split(' ')[1];
    return (
      <View>
        <SectionHeader header={`Talks ${header}`}/>
        <View>
        {rowData.talks.map((talk, idx) => {
          const index = talk.video.indexOf('v=') + 2;
          const videoId = talk.video.substring(index);
          const thumbnailUrl = `http://img.youtube.com/vi/${videoId}/0.jpg`;
          const length = rowData.talks.length - 1;
          return (
            <Talk
              key={idx}
              title={talk.title}
              speaker={talk.author}
              videoUrl={talk.video}
              thumbnailUrl={thumbnailUrl}
              index={idx}
              length={length}
              actions={this.props.actions}
              updateSpeaker={this.props.updateSpeaker}
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

export default PureRender(speakerModal(Events));
