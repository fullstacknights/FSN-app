import * as actionTypes from './actionTypes';

export function handleDisplayAlert(alert) {
  return ({
    type: actionTypes.DISPLAY_ALERT,
    style: alert.style,
    messageLine1: alert.messageLine1,
    messageLine2: alert.messageLine2,
    header: alert.header
  });
}

export function handleClearAlert() {
  return ({type: actionTypes.CLEAR_ALERT});
}
