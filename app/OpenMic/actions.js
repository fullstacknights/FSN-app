import * as actionTypes from './actionTypes';
import submit from '../api/postData';

export function handleAddName(event) {
  return ({type: actionTypes.ADD_NAME, name: event.nativeEvent.text});
}

export function handleAddTopic(topic) {
  return ({type: actionTypes.ADD_TOPIC, topic});
}

export function handleIsLoading(isLoading) {
  return ({type: actionTypes.IS_LOADING, isLoading});
}

export function handleClearState() {
  return ({type: actionTypes.CLEAR_STATE});
}

export function handleSubmit(data) {
  return (dispatch => {
    dispatch(handleIsLoading(true));
    submit(data, 'classes/OpenMic')
      .then(res => {
        dispatch(handleClearState());
        // TODO: Display a success message
      });
  });
}
