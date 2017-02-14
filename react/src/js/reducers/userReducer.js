import * as reqStatus from '../constants/RequestStatuses';
import {
  CLEAR_USERS,
  GET_USERS,
  ADD_USER,
  EDIT_USER,
  REMOVE_USER
} from '../constants/ActionTypes';
import { omit, normalizePayload } from '../helpers/objectManipulation';

const initialState = {
  byId: { },
  allIds: [],
};

const getUserReducer = (state, action) => {
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

const addUserReducer = (state, action) => {
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

const editUserReducer = (state, action) => {
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
              // memberUsers: [...action.payload.memberUsers]
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

const removeUserReducer = (state, action) => {
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
    case CLEAR_USERS: {
      return {
        byId: {},
        allIds: [],
        busy: false,
        fetched: false,
      }
    }
    case GET_USERS: {
      return getUserReducer(state, action);
    }
    case ADD_USER: {
      return addUserReducer(state, action);
    }
    case REMOVE_USER: {
      return removeUserReducer(state, action);
    }
    case EDIT_USER: {
      return editUserReducer(state, action);
    }
    default: {
      break;
    }
  }
  return state;
}
