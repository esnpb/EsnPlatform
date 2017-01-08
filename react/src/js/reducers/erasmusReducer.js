const initialState = {
    erasmuses: []
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case "ADD_ERASMUS": {
            if(action.payload.id == null) {
                state = {
                    ...state, 
                    erasmuses: [ ...state.erasmuses.concat(action.payload) ]
                };
            }
            else {
                //validation error
            }
            break;
        }
        case "REMOVE_ERASMUS": {
            if(action.payload.id == null) {
                state = {
                    ...state, 
                    erasmuses: [ ...state.erasmuses.filter((obj) => action.payload.id !== obj.id) ]
                };
            }
            else {
                //validation error
            }
            break;
        }
        case "UPDATE_ERASMUS": {
            if(action.payload.id > 0) {
                var found = false;
                state = {
                    ...state,
                    erasmuses: state.erasmuses.map((obj, i) => {
                        if(obj.id !== action.payload.id) {
                            return obj;
                        }
                        return {
                            ...obj,
                            ...action.payload
                        }
                    })
                }
            }
            else {
                //validation error
            }
            break;
        }
        case "FETCH_ERASMUS_FULFILLED": {
            state = {...state, user: action.payload }
            break;
        }
        case "FETCH_ERASMUS_ERROR": {
            
            break;
        }
    }
    return state;
};