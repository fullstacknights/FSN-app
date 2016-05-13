import * as actionTypes from './actionTypes';
import { getPastEvents } from '../api';

export function setPastEvents(data) {
  return { type: actionTypes.SET_PAST_EVENTS, data };
}

export function fetchPastEvents() {
  return dispatch => {
    getPastEvents(dispatch, setPastEvents);
  };
}

export function handleDisplayProfile() {
  return ({type: actionTypes.DISPLAY_PROFILE});
}

export function handleDismissProfile() {
  return ({type: actionTypes.DISMISS_PROFILE});
}
