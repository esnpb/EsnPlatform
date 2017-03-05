var MenuItem = require('../models/MenuItem.js');
var getQuery = require('../helpers/db.js');

module.exports = {
  applyRoutes: function(app) {
    app.get('/api/menuItems', function(req, res) {
      const query = getQuery(req.query);
      MenuItem.getMenuItems(function(err, menuItems) {
        if(err) {
          throw err;
        }
        res.json(menuItems);
      }, query.criteria, query.paging);
    });

    app.post('/api/menuItems', function(req, res) {
      var menuItem = req.body;
      MenuItem.addMenuItem(menuItem, function(err, menuItem) {
        if(err) {
          throw err;
        }
        res.json(menuItem);
      });
    });

    app.put('/api/menuItems/:_id', function(req, res) {
      var id = req.params._id;
      var menuItem = req.body;
      MenuItem.updateMenuItem(id, menuItem, {}, function(err, menuItem) {
        if(err) {
          throw err;
        }
        res.json(menuItem);
      });
    });

    app.delete('/api/menuItems/:_id', function(req, res) {
      var id = req.params._id;
      MenuItem.deleteMenuItems(id, function(err, menuItem) {
        if(err) {
          throw err;
        }
        res.json(menuItem);
      });
    });
  }
};
