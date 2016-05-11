import * as actionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  name: '',
  topic: ''
}

export default function openMic(state = initialState, action) {
  switch (action.type) {
    case actionTypes.OPEN_MIC_NAME:
      return (Object.assign({}, state, {name: action.name}));
    case actionTypes.OPEN_MIC_TOPIC:
      return (Object.assign({}, state, {topic: action.topic}));
    case actionTypes.OPEN_MIC_IS_LOADING:
      return (Object.assign({}, state, {isLoading: action.isLoading}));
    case actionTypes.CLEAR_OPEN_MIC:
      return (Object.assign({}, state, initialState));
    default:
      return (state);
  }
}
