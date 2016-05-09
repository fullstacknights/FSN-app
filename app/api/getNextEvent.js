import { NetInfo } from 'react-native';
import config from '../config';

const headers = {
  'Content-Type': 'application/json',
  'X-Parse-Application-Id': config.appId
};

export default (dispatch, action) => {
  NetInfo.isConnected.fetch().then(isConnected => {
    if (isConnected) {
      const where = 'where={"past": false}';
      fetch(`${config.apiUrl}/classes/Event?${where}`, {
        headers: headers
      })
      .then(res => res.json())
      .then(res => {
        const event = res.results[0];
        const talkWhere = `where={"event": {"__type": "Pointer", "className": "Event", "objectId": "${event.objectId}"}}`;
        fetch(`${config.apiUrl}/classes/Talk?${talkWhere}`, {
          headers: headers
        })
        .then(resp => resp.json())
        .then(resp => {
          dispatch(action({
            ...event,
            talks: resp.results
          }));
        });
      });
    }
  });
};
