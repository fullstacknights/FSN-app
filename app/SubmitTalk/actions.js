import * as actionTypes from './actionTypes';
import submit from '../api/postData';

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

export function handleAddQuestionsComments(questionsComments) {
  return ({type: actionTypes.ADD_QUESTIONS_COMMENTS, questionsComments});
}

export function handleIsLoading(isLoading) {
  return ({type: actionTypes.IS_LOADING, isLoading});
}

export function handleClearState() {
  return ({type: actionTypes.CLEAR_STATE});
}

export function handleSubmit(data) {
  return (dispatch => {
    dispatch(handleIsLoading(true));
    submit(data, 'classes/TalkSubmission')
      .then(() => {
        dispatch(handleClearState());
      });
  });
}
