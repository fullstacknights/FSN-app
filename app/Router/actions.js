import * as types from './actionTypes';

export function transitionTo(name) {
  return {
    type: types.TRANSITION_TO,
    name
  };
}
