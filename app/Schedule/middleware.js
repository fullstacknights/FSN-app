import { populateSchedule, isFetching } from './actions';

export function fetchSchedule(dispatch) {
  fetch('https://s3-us-west-2.amazonaws.com/campodata-frontend/json/fsn-schedule.json')
    .then(res => {
      return res.json();
    })
    .then(json => {
      dispatch(populateSchedule(json));
      dispatch(isFetching(false));
    });
}
