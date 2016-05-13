import * as actionTypes from './actionTypes';

const initialState = {
  fetching: true,
  event: {},
  displayProfile: false
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
    case actionTypes.HOME_DISPLAY_PROFILE:
      return ({...state, displayProfile: true});
    case actionTypes.HOME_DISMISS_PROFILE:
      return ({...state, displayProfile: false});
    default:
      return state;
  }
}
