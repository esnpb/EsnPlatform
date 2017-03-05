var mongoose = require('mongoose');
var _ = require('lodash.omit');

// UserSetting schema
var userSettingSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  cas: {
    facebookId: {
      type: String,
      unique: true,
    },
    galaxyId: {
      type: String,
      unique: true,
    },
    googleId: {
      type: String,
      unique: true,
    },
  },
  preferedLanguage: {
    type: String,
  },
  defaultStartScreen: {
    type: String,
  },
  preferedPagerSize: {
    type: Number,
  },
  timeZone: {
    type: Number,
  },
});

var UserSetting = module.exports = mongoose.model('UserSetting', userSettingSchema, 'UserSettings');

// Get UserSettings
module.exports.getUserSettings = function(callback, criteria, paging) {
  UserSetting.find(criteria, '', callback);
};

//Add UserSetting
module.exports.addUserSettings = function(userSetting, callback) {
  UserSetting.create(userSetting, callback);
};

//Update UserSetting
module.exports.updateUserSetting = function(id, userSetting, callback) {
  var query = { _id: id };
  var update = _.omit(userSetting, ['_id']);
  UserSetting.findOneAndUpdate(query, update, options, callback);
};

//Delete UserSetting
module.exports.deleteUserSettings = function(id, callback) {
  var query = { _id: id };
  UserSetting.remove(query, callback);
};
