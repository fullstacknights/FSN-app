import * as actionTypes from './actionTypes';

const initialState = {
  display: false,
  style: '',
  messageLine1: '',
  messageLine2: '',
  header: ''
};

export default function alert(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DISPLAY_ALERT:
      return (Object.assign({}, state, {
        display: true,
        style: action.style,
        messageLine1: action.messageLine1,
        messageLine2: action.messageLine2,
        header: action.header
      }));
    case actionTypes.CLEAR_ALERT:
      return (Object.assign({}, state, initialState));
    default:
      return (state);
  }
}
