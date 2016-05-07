import * as actionTypes from './actionTypes';
import postOpenMic from '../api/postOpenMic';

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
    postOpenMic(data)
      .then(res => {
        dispatch(handleIsLoading(false));
        // TODO: Display a success message
      });
  });
}
