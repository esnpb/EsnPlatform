import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from './reducers'; // searches for ./reducers.js first, then for ./reducers/index.js

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware);

// TODO: DELETE THIS!!!
store.subscribe(() => {
  // console.log('store changed!', store.getState());
});
window.store = store;
//

export default store;
