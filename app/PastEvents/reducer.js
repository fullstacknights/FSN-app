import { SET_PAST_EVENTS } from './actionTypes';

const initialState = {
  events: []
};

export default function pastEvents(state = initialState, action) {
  switch (action.type) {
    case SET_PAST_EVENTS:
      return {
        events: action.data.sort((curr, next) =>
          parseInt(next.event.title.split(' ')[1].substring(1), 10) -
          parseInt(curr.event.title.split(' ')[1].substring(1), 10) )
      };
    default:
      return state;
  }
}
