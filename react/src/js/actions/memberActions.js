import axios from "axios";

export default function fetchMembers() {
    return function(dispatch) {
        //axios.get("http://rest.learncode.academy/api/test123/tweets")
        //.then((reponse) => {
        //    dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
        //})
        //.catch((err) => {
        //    dispatch({type: "FETCH_TWEETS_ERROR", payload: err})
        //});
    }
}

export function removeMember(id) {
    return {
        type: "REMOVE_MEMBER",
        payload: id
    }
}

export function addMember(member) {
    return {
        type: "ADD_MEMBER",
        payload: member
    }
}

export function updateMember(member) {
    return {
        type: "UPDATE_MEMBER",
        payload: member
    }
}