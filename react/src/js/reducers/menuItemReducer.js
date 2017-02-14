import * as reqStatus from '../constants/RequestStatuses';
import {
  CLEAR_MENUITEMS,
  GET_MENUITEMS,
  ADD_MENUITEM,
  EDIT_MENUITEM,
  REMOVE_MENUITEM
} from '../constants/ActionTypes';
import { omit, normalizePayload } from '../helpers/objectManipulation';

const initialState = {
  byId: { },
  allIds: [],
};

const getMenuItemReducer = (state, action) => {
  switch (action.status) {
    case reqStatus.REQUEST: {
      return {
        byId: {},
        allIds: [],
        busy: false,
        fetched: true,
      };
      break;
    }
    case reqStatus.DONE: {
      if (action.payload) {
        return {
          byId: normalizePayload(action.payload),
          allIds: [...action.payload.map(x => x._id)],
          busy: false,
          fetched: true,
        };
      }
      break;
    }
    case reqStatus.ERROR: {
      return {
        byId: {},
        allIds: [],
        busy: false,
        fetched: false,
      };
      break;
    }
    default: {
      break;
    }
  }
  return state;
};

const addMenuItemReducer = (state, action) => {
  switch (action.status) {
    case reqStatus.REQUEST: {
      // nothing ?
      break;
    }
    case reqStatus.DONE: {
      if (action.payload && action.payload.id) {
        return {
          byId: { ...state.byId, [action.payload.id]: action.payload },
          allIds: [...state.allIds.concat(action.payload.id)],
        };
      }
      break;
    }
    case reqStatus.ERROR: {
      break;
    }
    default: {
      break;
    }
  }
  return state;
};

const editMenuItemReducer = (state, action) => {
  switch (action.status) {
    case reqStatus.REQUEST: {
      // nothing ?
      break;
    }
    case reqStatus.DONE: {
      if (action.payload && action.payload.id) {
        return {
          byId: {
            ...state.byId,
            [action.payload.id]: {
              ...action.payload,
              // TODO: if you are going to use nested arrays of ids of related objects - uncomment
              // memberMenuItems: [...action.payload.memberMenuItems]
            },
          },
          allIds: [...state.allIds],
        };
      }
      break;
    }
    case reqStatus.ERROR: {
      break;
    }
    default: {
      break;
    }
  }
  return state;
};

const removeMenuItemReducer = (state, action) => {
  switch (action.status) {
    case reqStatus.REQUEST: {
      // nothing ?
      break;
    }
    case reqStatus.DONE: {
      if (action.payload) {
        return {
          byId: omit(state.byId, action.payload),
          allIds: [...state.allIds.filter(obj => action.payload.id !== obj.id)],
        };
      }
      break;
    }
    case reqStatus.ERROR: {
      break;
    }
    default: {
      break;
    }
  }
  return state;
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_MENUITEMS: {
      return {
        byId: {},
        allIds: [],
        busy: false,
        fetched: false,
      }
    }
    case GET_MENUITEMS: {
      return getMenuItemReducer(state, action);
    }
    case ADD_MENUITEM: {
      return addMenuItemReducer(state, action);
    }
    case REMOVE_MENUITEM: {
      return removeMenuItemReducer(state, action);
    }
    case EDIT_MENUITEM: {
      return editMenuItemReducer(state, action);
    }
    default: {
      break;
    }
  }
  return state;
}
