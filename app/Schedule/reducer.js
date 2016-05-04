import { POPULATE_SCHEDULE, IS_FETCHING } from './actionTypes';

const initialState = {
  isFetching: true,
  schedule: []
};

export default function schedule(state = initialState, action) {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.status
      };
    case POPULATE_SCHEDULE:
      return {
        ...state,
        schedule: action.data.schedule
      };
    default:
      return state;
  }
}
