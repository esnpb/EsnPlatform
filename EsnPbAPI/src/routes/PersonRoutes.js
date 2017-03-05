var Person = require('../models/Person.js');
var getQuery = require('../helpers/db.js');

module.exports = {
  applyRoutes: function(app) {
    app.get('/api/persons', function(req, res) {
      const query = getQuery(req.query);
      Person.getPersons(function(err, persons) {
        if(err) {
          throw err;
        }
        res.json(persons);
      }, query.criteria, query.paging);
    });

    app.post('/api/persons', function(req, res) {
      var person = req.body;
      Person.addPerson(person, function(err, person) {
        if(err) {
          throw err;
        }
        res.json(person);
      });
    });

    app.put('/api/persons/:_id', function(req, res) {
      var id = req.params._id;
      var person = req.body;
      Person.updatePerson(id, person, {}, function(err, person) {
        if(err) {
          throw err;
        }
        res.json(person);
      });
    });

    app.delete('/api/persons/:_id', function(req, res) {
      var id = req.params._id;
      Person.deletePersons(id, function(err, person) {
        if(err) {
          throw err;
        }
        res.json(person);
      });
    });
  }
};
