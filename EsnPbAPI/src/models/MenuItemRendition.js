var mongoose = require('mongoose');

// MenuItemRendition schema
var menuItemRenditionSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  menuItemId: {
    type: String,
    required: true,
  },
  languageId: {
    type: String,
    required: true,
  },
  description:{
    type: String,
  },
});

var MenuItemRendition = module.exports = mongoose.model('MenuItemRendition', menuItemRenditionSchema, 'MenuItemRenditions');

// Get MenuItemRenditions
module.exports.getMenuItemRenditions = function(callback, criteria, paging) {
  MenuItemRendition.find(criteria, '', callback);
};

module.exports.getMenuItemRenditionTitle = function(callback, criteria) {
  MenuItemRendition.find(criteria, 'description', callback);
};

//Add MenuItemRendition
module.exports.addMenuItemRenditions = function(menuItemRendition, callback) {
  MenuItemRendition.create(menuItemRendition, callback);
};

//Update MenuItemRendition
module.exports.updateMenuItemRendition = function(id, menuItemRendition, callback) {
  var query = { _id: id };
  var update = _.omit(menuItemRendition, ['_id']);
  MenuItemRendition.findOneAndUpdate(query, update, options, callback);
};

//Delete MenuItemRendition
module.exports.deleteMenuItemRenditions = function(id, callback) {
  var query = { _id: id };
  MenuItemRendition.remove(query, callback);
};
