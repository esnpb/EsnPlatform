import * as reqStatus from '../constants/RequestStatuses';
import { GET_NOTIFICATIONS, ADD_NOTIFICATION, EDIT_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants/ActionTypes';
import { omit, normalizePayload } from '../helpers/objectManipulation';

const initialState = {
  byId: { },
  allIds: [],
};

const getNotificationReducer = (state, action) => {
  switch (action.status) {
    case reqStatus.REQUEST: {
      // nothing ?
      break;
    }
    case reqStatus.DONE: {
      if (action.payload) {
        return {
          byId: normalizePayload(action.payload),
          allIds: [...action.payload.map(x => x._id)],
          fetching: false,
          fetched: true,
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

const addNotificationReducer = (state, action) => {
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

const editNotificationReducer = (state, action) => {
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
              // memberNotifications: [...action.payload.memberNotifications]
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

const removeNotificationReducer = (state, action) => {
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
    case GET_NOTIFICATIONS: {
      return getNotificationReducer(state, action);
    }
    case ADD_NOTIFICATION: {
      return addNotificationReducer(state, action);
    }
    case REMOVE_NOTIFICATION: {
      return removeNotificationReducer(state, action);
    }
    case EDIT_NOTIFICATION: {
      return editNotificationReducer(state, action);
    }
    default: {
      break;
    }
  }
  return state;
}
