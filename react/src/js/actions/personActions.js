import axios from 'axios';
import * as types from '../constants/ActionTypes';
import * as status from '../constants/RequestStatuses';

const apiResourcePath = 'http://localhost:3000/api/persons';

// action sub-creators, only to be used by asynchronous action creators
const getPersonsRequest =
  criteria => ({ type: types.GET_PERSONS, status: status.REQUEST, payload: criteria });
const getPersonsDone =
  response => ({ type: types.GET_PERSONS, status: status.DONE, payload: response });
const getPersonsError =
  error => ({ type: types.GET_PERSONS, status: status.ERROR, payload: error });

const addPersonRequest =
  payload => ({ type: types.ADD_PERSON, status: status.REQUEST, payload });
const addPersonDone =
  response => ({ type: types.ADD_PERSON, status: status.DONE, payload: response });
const addPersonError =
  error => ({ type: types.ADD_PERSON, status: status.ERROR, payload: error });

const editPersonRequest =
  payload => ({ type: types.EDIT_PERSON, status: status.REQUEST, payload });
const editPersonDone =
  response => ({ type: types.EDIT_PERSON, status: status.DONE, payload: response });
const editPersonError =
  error => ({ type: types.EDIT_PERSON, status: status.ERROR, payload: error });

const removePersonRequest =
  id => ({ type: types.REMOVE_PERSON, status: status.REQUEST, payload: id });
const removePersonDone =
  response => ({ type: types.REMOVE_PERSON, status: status.DONE, payload: response });
const removePersonError =
  error => ({ type: types.REMOVE_PERSON, status: status.ERROR, payload: error });

// asynchronous action creators
export function getPersons(criteria) {
  return (dispatch) => {
    dispatch(getPersonsRequest(criteria));
    return axios.get(apiResourcePath, criteria)
      .then((response) => {
        dispatch(getPersonsDone(response.data));
      })
      .catch((error) => {
        dispatch(getPersonsError(error));
      });
  };
}

export function addPerson(person) {
  return (dispatch) => {
    dispatch(addPersonRequest(person));
    return axios.post(apiResourcePath, person)
      .then((response) => {
        dispatch(addPersonDone(response.data));
      })
      .catch((error) => {
        dispatch(addPersonError(error));
      });
  };
}

export function editPerson(person) {
  return (dispatch) => {
    dispatch(editPersonRequest(person));
    return axios.put(apiResourcePath, person)
      .then((response) => {
        dispatch(editPersonDone(response.data));
      })
      .catch((error) => {
        dispatch(editPersonError(error));
      });
  };
}

export function removePerson(id) {
  return (dispatch) => {
    dispatch(removePersonRequest(id));
    return axios.delete(apiResourcePath, id)
      .then((response) => {
        dispatch(removePersonDone(response.data));
      })
      .catch((error) => {
        dispatch(removePersonError(error));
      });
  };
}
