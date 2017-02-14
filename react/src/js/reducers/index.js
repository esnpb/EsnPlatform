import { combineReducers } from 'redux';

import languages from './languageReducer';
import menuItems from './menuItemReducer';
import users from './userReducer';
import userSettings from './userSettingReducer';
import notifications from './notificationReducer';

export default combineReducers({
  languages,
  menuItems,
  notifications,
  users,
  userSettings,
});
