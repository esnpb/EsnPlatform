import axios from "axios";

export default function fetchCountries() {
    return function(dispatch) {
        //axios.get("http://rest.learncode.academy/api/test123/tweets")
        //.then((reponse) => {
        //    dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
        //})
        //.catch((err) => {
        //    dispatch({type: "FETCH_TWEETS_ERROR", payload: err})
        //});
    }
};

export function removeCountry(id) {
    return {
        type: "REMOVE_COUNTRY",
        payload: id
    }
};

export function addCountry(country) {
    return {
        type: "ADD_COUNTRY",
        payload: country
    }
};

export function updateCountry(country) {
    return {
        type: "UPDATE_COUNTRY",
        payload: country
    }
};