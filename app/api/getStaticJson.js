import { NetInfo } from 'react-native';
import config from '../config';
import axios from 'axios';

export default (dispatch, action) => {
  NetInfo.isConnected.fetch().then(isConnected => {
    if (isConnected) {
      axios.get(config.jsonUrl)
      .then(res => {
        dispatch(action(res.data));
      });
    }
  });
};
