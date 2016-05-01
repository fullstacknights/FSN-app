import { POPULATE_SCHEDULE, IS_FETCHING } from './actionTypes';
import { fetchSchedule } from './middleware';

export function isFetching(status) {
  return { type: IS_FETCHING, status };
}

export function populateSchedule(data) {
  return { type: POPULATE_SCHEDULE, data };
}

export function getSchedule() {
  return dispatch => {
    fetchSchedule(dispatch);
  }
}
