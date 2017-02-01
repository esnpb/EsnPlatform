import { combineReducers } from 'redux';

import erasmuses from './erasmusReducer';
import members from './memberReducer';
import languages from './languageReducer';
import errors from './errorReducer';

export default combineReducers({
  erasmuses,
  members,
  languages,
  errors,
});
