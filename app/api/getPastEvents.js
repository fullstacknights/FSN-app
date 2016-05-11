import { NetInfo } from 'react-native';
import config from '../config';
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  'X-Parse-Application-Id': config.appId
};

export default (dispatch, action) => {
  NetInfo.isConnected.fetch().then(isConnected => {
    if (isConnected) {
      let data = [];
      axios.get(`${config.apiUrl}/classes/Event`, {
        headers: headers,
        params: {
          where: {
            past: true
          },
          order: '-date'
        }
      })
      .then(res => {
        res.data.results.forEach(event => {
          axios.get(`${config.apiUrl}/classes/Talk`, {
            headers: headers,
            params: {
              where: {
                event: {
                  __type: 'Pointer',
                  className: 'Event',
                  objectId: event.objectId
                }
              }
            }
          })
          .then(res => {
            data = data.concat([{
              event,
              talks: res.data.results
            }]);
            dispatch(action(data));
          });
        });
      });
    }
  });
};
