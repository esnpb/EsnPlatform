var mongoose = require('mongoose');
var _ = require('lodash.omit');

// Person schema
var personSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName:{
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  userId: {
    type: String,
    required: false,
  },
});

var Person = module.exports = mongoose.model('Person', personSchema, 'Persons');

// Get Persons
module.exports.getPersons = function(callback, criteria, paging) {
  Person.find(criteria, '', callback);
};

//Add Person
module.exports.addPersons = function(person, callback) {
  Person.create(person, callback);
};

//Update Person
module.exports.updatePerson = function(id, person, callback) {
  var query = { _id: id };
  var update = _.omit(person, ['_id']);
  Person.findOneAndUpdate(query, update, options, callback);
};

//Delete Person
module.exports.deletePersons = function(id, callback) {
  var query = { _id: id };
  Person.remove(query, callback);
};
