db.createCollection('UserSettings');
db.UserSettings.insert([{
	"userName": "karol",
	"cas": {
		"facebookId": undefined,
		"galaxyId": undefined,
		"googleId": undefined,
	},
	"preferedLanguage": "pl",
	"defaultStartScreen": "\dashboard",
	"preferedPagerSize": NumberInt(20),
	"timeZone": "CET",
}, {
	"userName": "admin",
	"cas": undefined,
	"preferedLanguage": "en",
	"defaultStartScreen": "\tables",
	"preferedPagerSize": NumberInt(25),
	"timeZone": "UTC",
}]);