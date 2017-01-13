export default function fetchErasmuses() {
  return function (dispatch) {
    // axios.get("http://rest.learncode.academy/api/test123/tweets")
    // .then((reponse) => {
    //     dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
    // })
    // .catch((err) => {
    //     dispatch({type: "FETCH_TWEETS_ERROR", payload: err})
    // });
  };
}

export function addErasmus(erasmus) {
  return {
    type: 'ADD_ERASMUS',
    payload: erasmus,
  };
}

export function updateErasmus(erasmus) {
  return {
    type: 'UPDATE_ERASMUS',
    payload: erasmus,
  };
}

export function removeErasmus(id) {
  return {
    type: 'REMOVE_ERASMUS',
    payload: id,
  };
}
