var mongoose = require('mongoose');
var _ = require('lodash.omit');

// MenuItem schema
var menuItemSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  parentId: {
    type: String,
  },
  targetUrl:{
    type: String,
  },
  icon: {
    type: String,
  },
  level:{
    type: Number,
    default: 0,
    required: true,
  },
  wage: {
    type: Number,
    default: 0,
    required: true,
  },
  titles: {
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
});

var MenuItem = module.exports = mongoose.model('MenuItem', menuItemSchema, 'MenuItems');

// Get MenuItems
module.exports.getMenuItems = function(callback, criteria, paging) {
  MenuItem.find(criteria, '', callback);
};

//Add MenuItem
module.exports.addMenuItems = function(menuItem, callback) {
  MenuItem.create(menuItem, callback);
};

//Update MenuItem
module.exports.updateMenuItem = function(id, menuItem, callback) {
  var query = { _id: id };
  var update = _.omit(menuItem, ['_id']);
  MenuItem.findOneAndUpdate(query, update, options, callback);
};

//Delete MenuItem
module.exports.deleteMenuItems = function(id, callback) {
  var query = { _id: id };
  MenuItem.remove(query, callback);
};
