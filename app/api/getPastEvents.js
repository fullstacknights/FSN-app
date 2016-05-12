import { NetInfo } from 'react-native';
import config from '../config';
import axios from 'axios';
import uniqBy from 'lodash/uniqBy';

const headers = {
  'Content-Type': 'application/json',
  'X-Parse-Application-Id': config.appId
};

export default (dispatch, action) => {
  NetInfo.isConnected.fetch().then(isConnected => {
    if (isConnected) {
      let data = [];

      axios.get(`${config.apiUrl}/classes/Talk`, {
        headers: headers,
        params: {
          include: ['author', 'event']
        }
      })
      .then(res => {
        const events = uniqBy(
          (res.data.results
          .filter(talk => talk.event.past)
          .map(talk => talk.event)), 'title');

        events.forEach(event => {
          data = data.concat([{
            event,
            talks: res.data.results.filter(talk => talk.event.title === event.title)
          }]);
        });

        dispatch(action(data));
      });
    }
  });
};
