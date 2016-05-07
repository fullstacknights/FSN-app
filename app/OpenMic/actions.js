import * as actionTypes from './actionTypes';

export function handleAddName(event) {
  return ({type: actionTypes.ADD_NAME, name: event.nativeEvent.text});
}

export function handleAddTopic(event) {
  return ({type: actionTypes.ADD_TOPIC, topic: event.nativeEvent.text});
}

// TODO: Make request to Parse
export function handleSubmit(data) {
  console.log(data);

  return ({type: 'something'});
}
