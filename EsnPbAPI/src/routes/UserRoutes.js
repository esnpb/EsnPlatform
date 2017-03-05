var User = require('../models/User.js');
var getQuery = require('../helpers/db.js');

module.exports = {
  applyRoutes: function(app) {
    app.get('/api/users', function(req, res) {
      const query = getQuery(req.query);
      User.getUsers(function(err, users) {
        if(err) {
          throw err;
        }
        res.json(users);
      }, query.criteria, query.paging);
    });

    app.post('/api/users', function(req, res) {
      var user = req.body;
      User.addUser(user, function(err, user) {
        if(err) {
          throw err;
        }
        res.json(user);
      });
    });

    app.put('/api/users/:_id', function(req, res) {
      var id = req.params._id;
      var user = req.body;
      User.updateUser(id, user, {}, function(err, user) {
        if(err) {
          throw err;
        }
        res.json(user);
      });
    });

    app.delete('/api/users/:_id', function(req, res) {
      var id = req.params._id;
      User.deleteUsers(id, function(err, user) {
        if(err) {
          throw err;
        }
        res.json(user);
      });
    });
  }
};
