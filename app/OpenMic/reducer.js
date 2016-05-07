import * as actionTypes from './actionTypes';

const initialState = {
  name: '',
  topic: ''
}

export default function openMic(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NAME:
      return (Object.assign({}, state, {name: action.name}));
    case actionTypes.ADD_TOPIC:
      return (Object.assign({}, state, {topic: action.topic}));
    default:
      return (state);
  }
}
