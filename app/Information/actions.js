import * as types from './actionTypes';
import { getStaticJson } from '../api';

export function setJson(json) {
  return {
    type: types.SET_JSON,
    json
  };
}

export function setFetching() {
  return {
    type: types.SET_FETCHING
  };
}

export function fetchJson() {
  return (dispatch) => {
    dispatch(setFetching());
    getStaticJson()
      .then((json) => dispatch(setJson(json)))
      .catch((err) => console.log(err));
  };
}
