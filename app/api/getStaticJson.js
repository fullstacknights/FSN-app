import { NetInfo } from 'react-native';
import config from '../config';

export default (dispatch, action) => {
  NetInfo.isConnected.fetch().then(isConnected => {
    if (isConnected) {
      fetch(config.jsonUrl)
      .then(response => response.json())
      .then(res => {
        dispatch(action(res));
      });
    }
  });
};
