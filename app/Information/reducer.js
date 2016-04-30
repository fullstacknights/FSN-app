import * as types from './actionTypes';

const initialState = {
  fetching: true,
  faq: [],
  team: [],
  social: {},
  codeOfConduct: [],
  wifi: {},
  slackUrl: ''
};

const information = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_FETCHING:
      return {
        ...state,
        fetching: true
      };
    case types.SET_JSON:
      return {
        ...state,
        fetching: false,
        faq: action.json.faq,
        team: action.json.team,
        social: action.json.social,
        codeOfConduct: action.json.codeOfConduct,
        wifi: action.json.wifi,
        slackUrl: action.json.slackUrl
      };
    default:
      return state;
  }
};


export default information;
