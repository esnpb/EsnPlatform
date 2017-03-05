var mongoose = require('mongoose');
var _ = require('lodash.omit');

// Language schema
var languageSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  nameEng:{
    type: String,
    required: true,
  },
  namePol: {
    type: String,
    required: true,
  },
  country:{
    type: String,
    required: true,
  },
  shortName: {
    type: String,
    required: true,
  },
  flagFile:{
    type: String,
    required: true,
  },
  culture: {
    type: String,
    required: true,
  },
  wage:{
    type: Number,
    default: 0,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
    required: true,
  },
});

var Language = module.exports = mongoose.model('Language', languageSchema, 'Languages');

// Get Languages
module.exports.getLanguages = function(callback, criteria, paging) {
  Language.find(criteria, '', callback);
};

//Add Language
module.exports.addLanguages = function(language, callback) {
  Language.create(language, callback);
};

//Update Language
module.exports.updateLanguage = function(id, language, callback) {
  var query = { _id: id };
  var update = _.omit(language, ['_id']);
  Language.findOneAndUpdate(query, update, options, callback);
};

//Delete Language
module.exports.deleteLanguages = function(id, callback) {
  var query = { _id: id };
  Language.remove(query, callback);
};
