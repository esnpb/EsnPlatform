import axios from 'axios';
import * as types from '../constants/ActionTypes';
import * as status from '../constants/RequestStatuses';

const apiResourcePath = 'http://localhost:3000/api/usersettings';

// action sub-creators, only to be used by asynchronous action creators
const getUserSettingsRequest =
  criteria => ({ type: types.GET_USERSETTINGS, status: status.REQUEST, payload: criteria });
const getUserSettingsDone =
  response => ({ type: types.GET_USERSETTINGS, status: status.DONE, payload: response });
const getUserSettingsError =
  error => ({ type: types.GET_USERSETTINGS, status: status.ERROR, payload: error });

const addUserSettingRequest =
  payload => ({ type: types.ADD_USERSETTING, status: status.REQUEST, payload });
const addUserSettingDone =
  response => ({ type: types.ADD_USERSETTING, status: status.DONE, payload: response });
const addUserSettingError =
  error => ({ type: types.ADD_USERSETTING, status: status.ERROR, payload: error });

const editUserSettingRequest =
  payload => ({ type: types.EDIT_USERSETTING, status: status.REQUEST, payload });
const editUserSettingDone =
  response => ({ type: types.EDIT_USERSETTING, status: status.DONE, payload: response });
const editUserSettingError =
  error => ({ type: types.EDIT_USERSETTING, status: status.ERROR, payload: error });

const removeUserSettingRequest =
  id => ({ type: types.REMOVE_USERSETTING, status: status.REQUEST, payload: id });
const removeUserSettingDone =
  response => ({ type: types.REMOVE_USERSETTING, status: status.DONE, payload: response });
const removeUserSettingError =
  error => ({ type: types.REMOVE_USERSETTING, status: status.ERROR, payload: error });

// asynchronous action creators
export function getUserSettings(criteria) {
  return (dispatch) => {
    dispatch(getUserSettingsRequest(criteria));
    return axios.get(apiResourcePath, criteria)
      .then((response) => {
        dispatch(getUserSettingsDone(response.data));
      })
      .catch((error) => {
        dispatch(getUserSettingsError(error));
      });
  };
}

export function addUserSetting(userSetting) {
  return (dispatch) => {
    dispatch(addUserSettingRequest(userSetting));
    return axios.post(apiResourcePath, userSetting)
      .then((response) => {
        dispatch(addUserSettingDone(response.data));
      })
      .catch((error) => {
        dispatch(addUserSettingError(error));
      });
  };
}

export function editUserSetting(userSetting) {
  return (dispatch) => {
    dispatch(editUserSettingRequest(userSetting));
    return axios.put(apiResourcePath, userSetting)
      .then((response) => {
        dispatch(editUserSettingDone(response.data));
      })
      .catch((error) => {
        dispatch(editUserSettingError(error));
      });
  };
}

export function removeUserSetting(id) {
  return (dispatch) => {
    dispatch(removeUserSettingRequest(id));
    return axios.delete(apiResourcePath, id)
      .then((response) => {
        dispatch(removeUserSettingDone(response.data));
      })
      .catch((error) => {
        dispatch(removeUserSettingError(error));
      });
  };
}
