import { combineReducers } from 'redux';

import erasmuses from './erasmusReducer';
import members from './memberReducer';
import languages from './languageReducer';
import menuItems from './menuItemReducer';
import users from './userReducer';
import notifications from './notificationReducer';
import errors from './errorReducer';

export default combineReducers({
  erasmuses,
  members,
  languages,
  menuItems,
  notifications,
  users,
  errors,
});
