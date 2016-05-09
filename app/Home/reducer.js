import * as actionTypes from './actionTypes';

const initialState = {
  fetching: true,
  event: {}
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_NEXT_EVENT:
      return {
        fetching: false,
        event: action.event
      };
    case actionTypes.SET_FETCHING:
      return {
        ...state,
        fetching: true
      };
    default:
      return state;
  }
}
