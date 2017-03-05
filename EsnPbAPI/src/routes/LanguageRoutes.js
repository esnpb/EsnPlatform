var Language = require('../models/Language.js');
var getQuery = require('../helpers/db.js');

module.exports = {
  applyRoutes: function(app) {
    app.get('/api/languages', function(req, res) {
      const query = getQuery(req.query);
      Language.getLanguages(function(err, languages) {
        if(err) {
          throw err;
        }
        res.json(languages);
      }, query.criteria, query.paging);
    });

    app.post('/api/languages', function(req, res) {
      var language = req.body;
      Language.addLanguage(language, function(err, language) {
        if(err) {
          throw err;
        }
        res.json(language);
      });
    });

    app.put('/api/languages/:_id', function(req, res) {
      var id = req.params._id;
      var language = req.body;
      Language.updateLanguage(id, language, {}, function(err, language) {
        if(err) {
          throw err;
        }
        res.json(language);
      });
    });

    app.delete('/api/languages/:_id', function(req, res) {
      var id = req.params._id;
      Language.deleteLanguages(id, function(err, language) {
        if(err) {
          throw err;
        }
        res.json(language);
      });
    });
  }
};
