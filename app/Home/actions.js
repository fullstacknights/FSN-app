import * as actionTypes from './actionTypes';
import { getNextEvent } from '../api';

export function setNextEvent(event) {
  return {
    type: actionTypes.SET_NEXT_EVENT,
    event
  };
}

export function setFetching() {
  return {
    type: actionTypes.SET_FETCHING
  };
}

export function fetchNextEvent() {
  return dispatch => {
    dispatch(setFetching());
    getNextEvent(dispatch, setNextEvent);
  };
}
