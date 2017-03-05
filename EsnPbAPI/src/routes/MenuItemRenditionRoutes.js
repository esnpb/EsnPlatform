var MenuItemRendition = require('../models/MenuItemRendition.js');
var getQuery = require('../helpers/db.js');

module.exports = {
  applyRoutes: function(app) {
    app.get('/api/menuItemRenditions', function(req, res) {
      const query = getQuery(req.query);
      MenuItemRendition.getMenuItemRenditions(function(err, menuItemRenditions) {
        if(err) {
          throw err;
        }
        res.json(menuItemRenditions);
      }, query.criteria, query.paging);
    });

    app.post('/api/menuItemRenditions', function(req, res) {
      var menuItemRendition = req.body;
      MenuItemRendition.addMenuItemRendition(menuItemRendition, function(err, menuItemRendition) {
        if(err) {
          throw err;
        }
        res.json(menuItemRendition);
      });
    });

    app.put('/api/menuItemRenditions/:_id', function(req, res) {
      var id = req.params._id;
      var menuItemRendition = req.body;
      MenuItemRendition.updateMenuItemRendition(id, menuItemRendition, {}, function(err, menuItemRendition) {
        if(err) {
          throw err;
        }
        res.json(menuItemRendition);
      });
    });

    app.delete('/api/menuItemRenditions/:_id', function(req, res) {
      var id = req.params._id;
      MenuItemRendition.deleteMenuItemRenditions(id, function(err, menuItemRendition) {
        if(err) {
          throw err;
        }
        res.json(menuItemRendition);
      });
    });
  }
};
