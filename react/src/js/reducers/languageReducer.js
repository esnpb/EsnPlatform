import * as reqStatus from '../constants/RequestStatuses';
import {
  CLEAR_LANGUAGES,
  GET_LANGUAGES,
  ADD_LANGUAGE,
  EDIT_LANGUAGE,
  REMOVE_LANGUAGE
} from '../constants/ActionTypes';
import { omit, normalizePayload } from '../helpers/objectManipulation';

const initialState = {
  byId: { },
  allIds: [],
};

const getLanguageReducer = (state, action) => {
  switch (action.status) {
    case reqStatus.REQUEST: {
      return {
        byId: {},
        allIds: [],
        busy: true,
        fetched: false,
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

const addLanguageReducer = (state, action) => {
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

const editLanguageReducer = (state, action) => {
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
              // memberLanguages: [...action.payload.memberLanguages]
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

const removeLanguageReducer = (state, action) => {
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
    case CLEAR_LANGUAGES: {
      return {
        byId: {},
        allIds: [],
        busy: false,
        fetched: false,
      }
    }
    case GET_LANGUAGES: {
      return getLanguageReducer(state, action);
    }
    case ADD_LANGUAGE: {
      return addLanguageReducer(state, action);
    }
    case REMOVE_LANGUAGE: {
      return removeLanguageReducer(state, action);
    }
    case EDIT_LANGUAGE: {
      return editLanguageReducer(state, action);
    }
    default: {
      break;
    }
  }
  return state;
}
