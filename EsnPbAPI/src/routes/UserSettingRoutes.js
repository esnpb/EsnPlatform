var UserSetting = require('../models/UserSetting.js');
var getQuery = require('../helpers/db.js');

module.exports = {
  applyRoutes: function(app) {
    app.get('/api/usersettings', function(req, res) {
      const query = getQuery(req.query);
      UserSetting.getUserSettings(function(err, userSettings) {
        if(err) {
          throw err;
        }
        res.json(userSettings);
      }, query.criteria, query.paging);
    });

    app.post('/api/usersettings', function(req, res) {
      var userSetting = req.body;
      UserSetting.addUserSetting(userSetting, function(err, userSetting) {
        if(err) {
          throw err;
        }
        res.json(userSetting);
      });
    });

    app.put('/api/usersettings/:_id', function(req, res) {
      var id = req.params._id;
      var userSetting = req.body;
      UserSetting.updateUserSetting(id, userSetting, {}, function(err, userSetting) {
        if(err) {
          throw err;
        }
        res.json(userSetting);
      });
    });

    app.delete('/api/usersettings/:_id', function(req, res) {
      var id = req.params._id;
      UserSetting.deleteUserSettings(id, function(err, userSetting) {
        if(err) {
          throw err;
        }
        res.json(userSetting);
      });
    });
  }
};
