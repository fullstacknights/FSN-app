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
      axios.get(`${config.apiUrl}/classes/Event`, {
        headers: headers,
        params: {
          where: {
            past: false
          }
        }
      })
      .then(res => {
        const event = res.data.results[0];
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
        .then(resp => {
          dispatch(action({
            ...event,
            talks: resp.data.results
          }));
        });
      });
    }
  });
};
