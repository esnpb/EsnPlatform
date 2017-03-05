const languageRoutes = require('./LanguageRoutes.js');
const menuItemRoutes = require('./MenuItemRoutes.js');
const menuItemRenditionRoutes = require('./MenuItemRenditionRoutes.js');
const personRoutes = require('./PersonRoutes.js');
const notificationRoutes = require('./NotificationRoutes.js');
const userRoutes = require('./UserRoutes.js');
const userSettingRoutes = require('./UserSettingRoutes.js');

module.exports = {
    applyRoutes: function(app) {
      languageRoutes.applyRoutes(app);
      menuItemRoutes.applyRoutes(app);
      menuItemRenditionRoutes.applyRoutes(app);
      personRoutes.applyRoutes(app);
      notificationRoutes.applyRoutes(app);
      userRoutes.applyRoutes(app);
      userSettingRoutes.applyRoutes(app);
  }
}
