import * as actionTypes from './actionTypes';
import submit from '../api/postData';
import { handleDisplayAlert } from '../Alert/actions';

export function handleAddName(event) {
  return ({type: actionTypes.OPEN_MIC_NAME, name: event.nativeEvent.text});
}

export function handleAddTopic(topic) {
  return ({type: actionTypes.OPEN_MIC_TOPIC, topic});
}

export function handleIsLoading(isLoading) {
  return ({type: actionTypes.OPEN_MIC_IS_LOADING, isLoading});
}

export function handleClearState() {
  return ({type: actionTypes.CLEAR_OPEN_MIC});
}

export function handleSubmit(data) {
  return (dispatch => {
    dispatch(handleIsLoading(true));
    submit(data, 'classes/OpenMic')
      .then(res => {
        const alert = {
          style: 'success',
          messageLine1: 'Thank you for requesting a space in the open mic section!',
          messageLine2: '',
          header: 'Success!'
        };

        dispatch(handleDisplayAlert(alert));
        dispatch(handleIsLoading(false));
        dispatch(handleClearState());
      });
  });
}
