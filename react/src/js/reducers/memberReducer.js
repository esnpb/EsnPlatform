const initialState = {
  members: [],
};

export default function reducer(state = initialState, action) {
  let newState = null;
  switch (action.type) {
    case 'ADD_MEMBER': {
      if (action.payload.id == null) {
        newState = {
          ...state,
          members: [...state.members.concat(action.payload)],
        };
      } else {
        // validation error
      }
      break;
    }
    case 'REMOVE_MEMBER': {
      if (action.payload.id == null) {
        newState = {
          ...state,
          members: [...state.members.filter(obj => action.payload.id !== obj.id)],
        };
      } else {
        // validation error
      }
      break;
    }
    case 'UPDATE_MEMBER': {
      if (action.payload.id > 0) {
        newState = {
          ...state,
          members: state.members.map((obj) => {
            if (obj.id !== action.payload.id) {
              return obj;
            }
            return {
              ...obj,
              ...action.payload,
            };
          }),
        };
      } else {
        // validation error
      }
      break;
    }
    case 'FETCH_MEMBER_FULFILLED': {
      newState = { ...state, user: action.payload };
      break;
    }
    case 'FETCH_MEMBER_ERROR': {
      break;
    }
    default: {
      break;
    }
  }
  return newState;
}
