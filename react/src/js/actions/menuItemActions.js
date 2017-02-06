import axios from 'axios';
import * as types from '../constants/ActionTypes';
import * as status from '../constants/RequestStatuses';

const apiResourcePath = 'http://localhost:3000/api/menuItems';

// action sub-creators, only to be used by asynchronous action creators
const getMenuItemsRequest =
  criteria => ({ type: types.GET_MENUITEMS, status: status.REQUEST, payload: criteria });
const getMenuItemsDone =
  response => ({ type: types.GET_MENUITEMS, status: status.DONE, payload: response });
const getMenuItemsError =
  error => ({ type: types.GET_MENUITEMS, status: status.ERROR, payload: error });

const addMenuItemRequest =
  payload => ({ type: types.ADD_MENUITEM, status: status.REQUEST, payload });
const addMenuItemDone =
  response => ({ type: types.ADD_MENUITEM, status: status.DONE, payload: response });
const addMenuItemError =
  error => ({ type: types.ADD_MENUITEM, status: status.ERROR, payload: error });

const editMenuItemRequest =
  payload => ({ type: types.EDIT_MENUITEM, status: status.REQUEST, payload });
const editMenuItemDone =
  response => ({ type: types.EDIT_MENUITEM, status: status.DONE, payload: response });
const editMenuItemError =
  error => ({ type: types.EDIT_MENUITEM, status: status.ERROR, payload: error });

const removeMenuItemRequest =
  id => ({ type: types.REMOVE_MENUITEM, status: status.REQUEST, payload: id });
const removeMenuItemDone =
  response => ({ type: types.REMOVE_MENUITEM, status: status.DONE, payload: response });
const removeMenuItemError =
  error => ({ type: types.REMOVE_MENUITEM, status: status.ERROR, payload: error });

// asynchronous action creators
export function getMenuItems(criteria) {
  return (dispatch) => {
    dispatch(getMenuItemsRequest(criteria));
    return axios.get(apiResourcePath, criteria)
      .then((response) => {
        dispatch(getMenuItemsDone(response.data));
      })
      .catch((error) => {
        dispatch(getMenuItemsError(error));
      });
  };
}

export function addMenuItem(menuItem) {
  return (dispatch) => {
    dispatch(addMenuItemRequest(menuItem));
    return axios.post(apiResourcePath, menuItem)
      .then((response) => {
        dispatch(addMenuItemDone(response.data));
      })
      .catch((error) => {
        dispatch(addMenuItemError(error));
      });
  };
}

export function editMenuItem(menuItem) {
  return (dispatch) => {
    dispatch(editMenuItemRequest(menuItem));
    return axios.put(apiResourcePath, menuItem)
      .then((response) => {
        dispatch(editMenuItemDone(response.data));
      })
      .catch((error) => {
        dispatch(editMenuItemError(error));
      });
  };
}

export function removeMenuItem(id) {
  return (dispatch) => {
    dispatch(removeMenuItemRequest(id));
    return axios.delete(apiResourcePath, id)
      .then((response) => {
        dispatch(removeMenuItemDone(response.data));
      })
      .catch((error) => {
        dispatch(removeMenuItemError(error));
      });
  };
}
