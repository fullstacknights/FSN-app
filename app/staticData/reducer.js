import * as types from './actionTypes';

const initialState = {
  fetching: true,
  faq: [],
  team: [],
  social: {},
  codeOfConduct: [],
  wifi: {},
  slackUrl: '',
  photos: [],
  ticketsUrl: ''
};

const staticData = (state = initialState, action = {}) => {
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
        slackUrl: action.json.slackUrl,
        photos: action.json.photos,
        ticketsUrl: action.json.ticketsUrl
      };
    default:
      return state;
  }
};


export default staticData;
