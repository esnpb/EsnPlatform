import axios from 'axios';
import * as types from '../constants/ActionTypes';
import * as status from '../constants/RequestStatuses';

const apiResourcePath = 'http://localhost:3000/api/users';

// action sub-creators, only to be used by asynchronous action creators
const getUsersRequest =
  criteria => ({ type: types.GET_USERS, status: status.REQUEST, payload: criteria });
const getUsersDone =
  response => ({ type: types.GET_USERS, status: status.DONE, payload: response });
const getUsersError =
  error => ({ type: types.GET_USERS, status: status.ERROR, payload: error });

const addUserRequest =
  payload => ({ type: types.ADD_USER, status: status.REQUEST, payload });
const addUserDone =
  response => ({ type: types.ADD_USER, status: status.DONE, payload: response });
const addUserError =
  error => ({ type: types.ADD_USER, status: status.ERROR, payload: error });

const editUserRequest =
  payload => ({ type: types.EDIT_USER, status: status.REQUEST, payload });
const editUserDone =
  response => ({ type: types.EDIT_USER, status: status.DONE, payload: response });
const editUserError =
  error => ({ type: types.EDIT_USER, status: status.ERROR, payload: error });

const removeUserRequest =
  id => ({ type: types.REMOVE_USER, status: status.REQUEST, payload: id });
const removeUserDone =
  response => ({ type: types.REMOVE_USER, status: status.DONE, payload: response });
const removeUserError =
  error => ({ type: types.REMOVE_USER, status: status.ERROR, payload: error });

// asynchronous action creators
export function getUsers(criteria) {
  return (dispatch) => {
    dispatch(getUsersRequest(criteria));
    return axios.get(apiResourcePath, criteria)
      .then((response) => {
        dispatch(getUsersDone(response.data));
      })
      .catch((error) => {
        dispatch(getUsersError(error));
      });
  };
}

export function addUser(user) {
  return (dispatch) => {
    dispatch(addUserRequest(user));
    return axios.post(apiResourcePath, user)
      .then((response) => {
        dispatch(addUserDone(response.data));
      })
      .catch((error) => {
        dispatch(addUserError(error));
      });
  };
}

export function editUser(user) {
  return (dispatch) => {
    dispatch(editUserRequest(user));
    return axios.put(apiResourcePath, user)
      .then((response) => {
        dispatch(editUserDone(response.data));
      })
      .catch((error) => {
        dispatch(editUserError(error));
      });
  };
}

export function removeUser(id) {
  return (dispatch) => {
    dispatch(removeUserRequest(id));
    return axios.delete(apiResourcePath, id)
      .then((response) => {
        dispatch(removeUserDone(response.data));
      })
      .catch((error) => {
        dispatch(removeUserError(error));
      });
  };
}
