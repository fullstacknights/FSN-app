import * as actionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  name: '',
  email: '',
  onlineProfile: '',
  profession: 'developer',
  topic: '',
  importance: '',
  questionsComments: ''
};

export default function openMic(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TALK_NAME:
      return (Object.assign({}, state, {name: action.name}));
    case actionTypes.TALK_EMAIL:
      return (Object.assign({}, state, {email: action.email}));
    case actionTypes.TALK_ONLINE_PROFILE:
      return (Object.assign({}, state, {onlineProfile: action.onlineProfile}));
    case actionTypes.TALK_PROFESSION:
      return (Object.assign({}, state, {profession: action.profession}));
    case actionTypes.TALK_TOPIC:
      return (Object.assign({}, state, {topic: action.topic}));
    case actionTypes.TALK_IMPORTANCE:
      return (Object.assign({}, state, {importance: action.importance}));
    case actionTypes.TALK_QUESTIONS_COMMENTS:
      return (Object.assign({}, state, {questionsComments: action.questionsComments}));
    case actionTypes.TALK_IS_LOADING:
      return (Object.assign({}, state, {isLoading: action.isLoading}));
    case actionTypes.CLEAR_SUBMIT_TALK:
      return (Object.assign({}, state, initialState));
    default:
      return (state);
  }
}
