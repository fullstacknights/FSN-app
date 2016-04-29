import * as types from './actionTypes';
import { getComponent } from './utils';

const initialState = getComponent('home');

const router = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.TRANSITION_TO:
      return {
        ...state,
        ...getComponent(action.name)
      };
    default:
      return state;
  }
};


export {
  router
};
