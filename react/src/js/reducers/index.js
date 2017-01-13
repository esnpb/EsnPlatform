import { combineReducers } from 'redux';

import erasmuses from './erasmusReducer';
import members from './memberReducer';
import countries from './countryReducer';
import errors from './errorReducer';

export default combineReducers({
  erasmuses,
  members,
  countries,
  errors,
});
