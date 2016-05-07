import * as actionTypes from './actionTypes';

const initialState = {
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
    case actionTypes.ADD_NAME:
      return (Object.assign({}, state, {name: action.name}));
    case actionTypes.ADD_EMAIL:
      return (Object.assign({}, state, {email: action.email}));
    case actionTypes.ADD_ONLINE_PROFILE:
      return (Object.assign({}, state, {onlineProfile: action.onlineProfile}));
    case actionTypes.ADD_PROFESSION:
      return (Object.assign({}, state, {profession: action.profession}));
    case actionTypes.ADD_TOPIC:
      return (Object.assign({}, state, {topic: action.topic}));
    case actionTypes.ADD_IMPORTANCE:
      return (Object.assign({}, state, {importance: action.importance}))
    case actionTypes.ADD_QUESTIONS_COMMENTS:
      return (Object.assign({}, state, {questionsComments: action.questionsComments}))
    default:
      return (state);
  }
}
