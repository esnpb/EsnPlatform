var mongoose = require('mongoose');
var _ = require('lodash.omit');

// Notification schema
var notificationSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  type: {
    type: String,
  },
  icon: {
    type: String,
  },
  priority: {
    type: Number,
    default: 0,
    required: true,
  },
  timestamp: {
    type: String,
  },
  description: {
    gb: String,
    pl: String,
    pt: String,
    es: String,
    tr: String,
    lt: String,
    fr: String,
    el: String,
    it: String,
    ro: String,
    ru: String,
    ge: String,
    at: String,
    kk: String,
    sk: String,
    br: String,
    cz: String,
    be: String,
  },
  users: [String]
});

var Notification = module.exports = mongoose.model('Notification', notificationSchema, 'Notifications');

// Get Notifications
module.exports.getNotifications = function(callback, criteria, paging) {
  Notification.find(criteria, '', callback);
};

//Add Notification
module.exports.addNotifications = function(notification, callback) {
  Notification.create(notification, callback);
};

//Update Notification
module.exports.updateNotification = function(id, notification, callback) {
  var query = { _id: id };
  var update = _.omit(notification, ['_id']);
  Notification.findOneAndUpdate(query, update, options, callback);
};

//Delete Notification
module.exports.deleteNotifications = function(id, callback) {
  var query = { _id: id };
  Notification.remove(query, callback);
};
