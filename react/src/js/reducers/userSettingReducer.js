import * as reqStatus from '../constants/RequestStatuses';
import {
  CLEAR_USERSETTINGS,
  GET_USERSETTINGS,
  ADD_USERSETTING,
  EDIT_USERSETTING,
  REMOVE_USERSETTING
} from '../constants/ActionTypes';
import { omit, normalizePayload } from '../helpers/objectManipulation';

const initialState = {
  byId: { },
  allIds: [],
};

const getUserSettingReducer = (state, action) => {
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

const addUserSettingReducer = (state, action) => {
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

const editUserSettingReducer = (state, action) => {
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
              // memberUserSettings: [...action.payload.memberUserSettings]
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

const removeUserSettingReducer = (state, action) => {
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
    case CLEAR_USERSETTINGS: {
      return {
        byId: {},
        allIds: [],
        busy: false,
        fetched: false,
      }
    }
    case GET_USERSETTINGS: {
      return getUserSettingReducer(state, action);
    }
    case ADD_USERSETTING: {
      return addUserSettingReducer(state, action);
    }
    case REMOVE_USERSETTING: {
      return removeUserSettingReducer(state, action);
    }
    case EDIT_USERSETTING: {
      return editUserSettingReducer(state, action);
    }
    default: {
      break;
    }
  }
  return state;
}
