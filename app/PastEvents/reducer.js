import * as actionTypes from './actionTypes';

const initialState = {
  events: [],
  displayProfile: false
};

export default function pastEvents(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_PAST_EVENTS:
      return ({
        ...state,
        events: action.data.sort((curr, next) =>
          parseInt(next.event.title.split(' ')[1].substring(1), 10) -
          parseInt(curr.event.title.split(' ')[1].substring(1), 10) )
      });
    case actionTypes.DISPLAY_PROFILE:
      return (Object.assign({}, state, {displayProfile: true}));
    case actionTypes.DISMISS_PROFILE:
      return (Object.assign({}, state, {displayProfile: false}))
    default:
      return state;
  }
}
