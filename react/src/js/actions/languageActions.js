import axios from 'axios';
import * as types from '../constants/ActionTypes';
import * as status from '../constants/RequestStatuses';

const apiResourcePath = 'http://localhost:3000/api/languages';

// action sub-creators, only to be used by asynchronous action creators
const getLanguagesRequest =
  criteria => ({ type: types.GET_LANGUAGES, status: status.REQUEST, payload: criteria });
const getLanguagesDone =
  response => ({ type: types.GET_LANGUAGES, status: status.DONE, payload: response });
const getLanguagesError =
  error => ({ type: types.GET_LANGUAGES, status: status.ERROR, payload: error });

const addLanguageRequest =
  payload => ({ type: types.ADD_LANGUAGE, status: status.REQUEST, payload });
const addLanguageDone =
  response => ({ type: types.ADD_LANGUAGE, status: status.DONE, payload: response });
const addLanguageError =
  error => ({ type: types.ADD_LANGUAGE, status: status.ERROR, payload: error });

const editLanguageRequest =
  payload => ({ type: types.EDIT_LANGUAGE, status: status.REQUEST, payload });
const editLanguageDone =
  response => ({ type: types.EDIT_LANGUAGE, status: status.DONE, payload: response });
const editLanguageError =
  error => ({ type: types.EDIT_LANGUAGE, status: status.ERROR, payload: error });

const removeLanguageRequest =
  id => ({ type: types.REMOVE_LANGUAGE, status: status.REQUEST, payload: id });
const removeLanguageDone =
  response => ({ type: types.REMOVE_LANGUAGE, status: status.DONE, payload: response });
const removeLanguageError =
  error => ({ type: types.REMOVE_LANGUAGE, status: status.ERROR, payload: error });

// asynchronous action creators
export function getLanguages(criteria) {
  return (dispatch) => {
    dispatch(getLanguagesRequest(criteria));
    return axios.get(apiResourcePath, criteria)
      .then((response) => {
        dispatch(getLanguagesDone(response.data));
      })
      .catch((error) => {
        dispatch(getLanguagesError(error));
      });
  };
}

export function addLanguage(language) {
  return (dispatch) => {
    dispatch(addLanguageRequest(language));
    return axios.post(apiResourcePath, language)
      .then((response) => {
        dispatch(addLanguageDone(response.data));
      })
      .catch((error) => {
        dispatch(addLanguageError(error));
      });
  };
}

export function editLanguage(language) {
  return (dispatch) => {
    dispatch(editLanguageRequest(language));
    return axios.put(apiResourcePath, language)
      .then((response) => {
        dispatch(editLanguageDone(response.data));
      })
      .catch((error) => {
        dispatch(editLanguageError(error));
      });
  };
}

export function removeLanguage(id) {
  return (dispatch) => {
    dispatch(removeLanguageRequest(id));
    return axios.delete(apiResourcePath, id)
      .then((response) => {
        dispatch(removeLanguageDone(response.data));
      })
      .catch((error) => {
        dispatch(removeLanguageError(error));
      });
  };
}
