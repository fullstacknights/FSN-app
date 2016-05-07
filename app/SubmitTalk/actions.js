import * as actionTypes from './actionTypes';

export function handleAddName(event) {
  return ({type: actionTypes.ADD_NAME, name: event.nativeEvent.text});
}

export function handleAddEmail(event) {
  return ({type: actionTypes.ADD_EMAIL, email: event.nativeEvent.text});
}

export function handleAddOnlineProfile(event) {
  return ({type: actionTypes.ADD_ONLINE_PROFILE, onlineProfile: event.nativeEvent.text});
}

export function handleAddProfession(profession) {
  return ({type: actionTypes.ADD_PROFESSION, profession});
}

export function handleAddTopic(event) {
  return ({type: actionTypes.ADD_TOPIC, topic: event.nativeEvent.text});
}

export function handleAddImportance(event) {
  return ({type: actionTypes.ADD_IMPORTANCE, importance: event.nativeEvent.text});
}

export function handleAddQuestionsComments(event) {
  return ({type: actionTypes.ADD_QUESTIONS_COMMENTS, questionsComments: event.nativeEvent.text});
}

// TODO: Make POST to Parse
export function handleSubmit(data) {
  console.log(data);
  return ({type: 'yo quiero cantar'});
}
