import * as actionTypes from './actionTypes';
import submit from '../api/postData';

export function handleAddName(event) {
  return ({type: actionTypes.ADD_NAME, name: event.nativeEvent.text});
}

export function handleAddTopic(event) {
  return ({type: actionTypes.ADD_TOPIC, topic: event.nativeEvent.text});
}

export function handleIsLoading(isLoading) {
  return ({type: actionTypes.IS_LOADING, isLoading});
}

export function handleSubmit(data) {
  return (dispatch => {
    dispatch(handleIsLoading(true));
    submit(data, 'classes/OpenMic')
      .then(res => {
        dispatch(handleIsLoading(false));
        // TODO: Display a success message
      });
  });
}
