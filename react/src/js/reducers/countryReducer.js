const initialState = {
  countries: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COUNTRY': {
      if (action.payload.id == null) {
        state = {
          ...state,
          countries: [...state.countries.concat(action.payload)],
        };
      }
      break;
    }
    case 'REMOVE_COUNTRY': {
      if (action.payload.id == null) {
        state = {
          ...state,
          countries: [...state.countries.filter(obj => action.payload.id !== obj.id)],
        };
      }
      break;
    }
    case 'UPDATE_COUNTRY': {
      if (action.payload.id > 0) {
        state = {
          ...state,
          countries: state.countries.map((obj) => {
            if (obj.id !== action.payload.id) {
              return obj;
            }
            return {
              ...obj,
              ...action.payload,
            };
          }),
        };
      }
      break;
    }
    case 'FETCH_COUNTRY_FULFILLED': {
      state = { ...state, user: action.payload };
      break;
    }
    case 'FETCH_COUNTRY_ERROR': {
      break;
    }
    default: {
      break;
    }
  }
  return state;
}
