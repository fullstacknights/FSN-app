import { SET_PAST_EVENTS } from './actionTypes';

const initialState = {
  events: []
};

export default function pastEvents(state = initialState, action) {
  switch (action.type) {
    case SET_PAST_EVENTS:
      return {
        events: action.data
      };
    default:
      return (initialState);
  }
}
