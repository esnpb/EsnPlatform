import axios from 'axios';
import * as types from '../constants/ActionTypes';
import * as status from '../constants/RequestStatuses';

const apiResourcePath = 'http://localhost:3000/api/notifications';

// action sub-creators, only to be used by asynchronous action creators
const getNotificationsRequest =
  criteria => ({ type: types.GET_NOTIFICATIONS, status: status.REQUEST, payload: criteria });
const getNotificationsDone =
  response => ({ type: types.GET_NOTIFICATIONS, status: status.DONE, payload: response });
const getNotificationsError =
  error => ({ type: types.GET_NOTIFICATIONS, status: status.ERROR, payload: error });

const addNotificationRequest =
  payload => ({ type: types.ADD_NOTIFICATION, status: status.REQUEST, payload });
const addNotificationDone =
  response => ({ type: types.ADD_NOTIFICATION, status: status.DONE, payload: response });
const addNotificationError =
  error => ({ type: types.ADD_NOTIFICATION, status: status.ERROR, payload: error });

const editNotificationRequest =
  payload => ({ type: types.EDIT_NOTIFICATION, status: status.REQUEST, payload });
const editNotificationDone =
  response => ({ type: types.EDIT_NOTIFICATION, status: status.DONE, payload: response });
const editNotificationError =
  error => ({ type: types.EDIT_NOTIFICATION, status: status.ERROR, payload: error });

const removeNotificationRequest =
  id => ({ type: types.REMOVE_NOTIFICATION, status: status.REQUEST, payload: id });
const removeNotificationDone =
  response => ({ type: types.REMOVE_NOTIFICATION, status: status.DONE, payload: response });
const removeNotificationError =
  error => ({ type: types.REMOVE_NOTIFICATION, status: status.ERROR, payload: error });

// asynchronous action creators
export function getNotifications(criteria) {
  return (dispatch) => {
    dispatch(getNotificationsRequest(criteria));
    return axios.get(apiResourcePath, criteria)
      .then((response) => {
        dispatch(getNotificationsDone(response.data));
      })
      .catch((error) => {
        dispatch(getNotificationsError(error));
      });
  };
}

export function addNotification(notification) {
  return (dispatch) => {
    dispatch(addNotificationRequest(notification));
    return axios.post(apiResourcePath, notification)
      .then((response) => {
        dispatch(addNotificationDone(response.data));
      })
      .catch((error) => {
        dispatch(addNotificationError(error));
      });
  };
}

export function editNotification(notification) {
  return (dispatch) => {
    dispatch(editNotificationRequest(notification));
    return axios.put(apiResourcePath, notification)
      .then((response) => {
        dispatch(editNotificationDone(response.data));
      })
      .catch((error) => {
        dispatch(editNotificationError(error));
      });
  };
}

export function removeNotification(id) {
  return (dispatch) => {
    dispatch(removeNotificationRequest(id));
    return axios.delete(apiResourcePath, id)
      .then((response) => {
        dispatch(removeNotificationDone(response.data));
      })
      .catch((error) => {
        dispatch(removeNotificationError(error));
      });
  };
}
