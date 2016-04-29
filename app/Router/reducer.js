import * as types from './actionTypes';
import { getRoute } from '../utils';

const home = getRoute('home');

const initialState = {
  name: home.name,
  headerText: home.headerText
};

const router = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.TRANSITION_TO:
      return {
        ...state,
        ...getRoute(action.name)
      };
    default:
      return state;
  }
};


export default router;
