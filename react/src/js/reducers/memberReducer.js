const initialState = {
    members: []
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case "ADD_MEMBER": {
            if(action.payload.id == null) {
                state = {
                    ...state, 
                    members: [ ...state.members.concat(action.payload) ]
                };
            }
            else {
                //validation error
            }
            break;
        }
        case "REMOVE_MEMBER": {
            if(action.payload.id == null) {
                state = {
                    ...state, 
                    members: [ ...state.members.filter((obj) => action.payload.id !== obj.id) ]
                };
            }
            else {
                //validation error
            }
            break;
        }
        case "UPDATE_MEMBER": {
            if(action.payload.id > 0) {
                var found = false;
                state = {
                    ...state,
                    members: state.members.map((obj, i) => {
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
        case "FETCH_MEMBER_FULFILLED": {
            state = {...state, user: action.payload }
            break;
        }
        case "FETCH_MEMBER_ERROR": {
            
            break;
        }
    }
    return state;
};