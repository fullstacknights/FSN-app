import { SET_PAST_EVENTS } from './actionTypes';
import { getPastEvents } from '../api';

export function setPastEvents(data) {
  return { type: SET_PAST_EVENTS, data };
}

export function fetchPastEvents() {
  return dispatch => {
    getPastEvents(dispatch, setPastEvents);
  };
}
