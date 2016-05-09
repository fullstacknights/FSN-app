import { NetInfo } from 'react-native';
import config from '../config';

const headers = {
  'Content-Type': 'application/json',
  'X-Parse-Application-Id': config.appId
};

export default (dispatch, action) => {
  NetInfo.isConnected.fetch().then(isConnected => {
    if (isConnected) {
      let data = [];
      const where = 'where={"past": true}&order=-date';
      fetch(`${config.apiUrl}/classes/Event?${where}`, {
        headers: headers
      })
      .then(res => res.json())
      .then(res => {
        res.results.forEach(event => {
          const talkWhere = `where={"event": {"__type": "Pointer", "className": "Event", "objectId": "${event.objectId}"}}`;
          fetch(`${config.apiUrl}/classes/Talk?${talkWhere}`, {
            headers: headers
          })
          .then(res => res.json())
          .then(res => {
            data = data.concat([{
              event,
              talks: res.results
            }]);
            dispatch(action(data));
          });
        });
      });
    }
  });
};
