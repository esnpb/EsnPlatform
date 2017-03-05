var mongoose = require('mongoose');
var _ = require('lodash.omit');

// User schema
var userSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  passwordSalt: {
    type: String,
    required: true,
  },
  isApproved: {
    type: Boolean,
  },
  isLockedOut: {
    type: Boolean,
  },
  createDate: {
    type: Date,
    required: true,
  },
  lastLoginDate: {
    type: Date,
  },
  lastPasswordChangedDate: {
    type: Date,
  },
  failedPasswordAttemptCount: {
    type: Number,
    default: 0,
    required: true,
  },
  roles: [String]
});

var User = module.exports = mongoose.model('User', userSchema, 'Users');

// Get Users
module.exports.getUsers = function(callback, criteria, paging) {
  User.find(criteria, '', callback);
};

//Add User
module.exports.addUsers = function(user, callback) {
  User.create(user, callback);
};

//Update User
module.exports.updateUser = function(id, user, callback) {
  var query = { _id: id };
  var update = _.omit(user, ['_id']);
  User.findOneAndUpdate(query, update, options, callback);
};

//Delete User
module.exports.deleteUsers = function(id, callback) {
  var query = { _id: id };
  User.remove(query, callback);
};
