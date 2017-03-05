var Notification = require('../models/Notification.js');
var getQuery = require('../helpers/db.js');

module.exports = {
  applyRoutes: function(app) {
    app.get('/api/notifications', function(req, res) {
      const query = getQuery(req.query);
      Notification.getNotifications(function(err, notifications) {
        if(err) {
          throw err;
        }
        res.json(notifications);
      }, query.criteria, query.paging);
    });

    app.post('/api/notifications', function(req, res) {
      var notification = req.body;
      Notification.addNotification(notification, function(err, notification) {
        if(err) {
          throw err;
        }
        res.json(notification);
      });
    });

    app.put('/api/notifications/:_id', function(req, res) {
      var id = req.params._id;
      var notification = req.body;
      Notification.updateNotification(id, notification, {}, function(err, notification) {
        if(err) {
          throw err;
        }
        res.json(notification);
      });
    });

    app.delete('/api/notifications/:_id', function(req, res) {
      var id = req.params._id;
      Notification.deleteNotifications(id, function(err, notification) {
        if(err) {
          throw err;
        }
        res.json(notification);
      });
    });
  }
};
