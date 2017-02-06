db.createCollection('Users');
db.Users.insert([{
	"userName": "admin",
	"email": "",
	"password": "a7de38414629ea4919d4f3ab4df1bfa7e0327858427e535e074b7bc8d6d4b61c",
	"passwordSalt": "feXTX7wCRV",
	"isApproved": false,
	"isLockedOut": false,
	"createDate": ISODate("2017-02-01 18:25:37 -0500"),
	"lastLoginDate": ISODate("2017-02-01 18:25:37 -0500"),
	"lastPasswordChangedDate": ISODate("2017-02-01 18:25:37 -0500"),
	"failedPasswordAttemptCount": NumberInt(0)
}, {
	"userName": "karol",
	"email": "karoll86@gmail.com",
	"password": "a5be70296483397e37ff9329d8dc7bee20c4c954ac0e79e440e84cb7f4b51635",
	"passwordSalt": "OyNoKQXJ",
	"isApproved": true,
	"isLockedOut": false,
	"createDate": ISODate("2017-02-01 18:25:37 -0500"),
	"lastLoginTime": ISODate("2017-02-01 18:25:37 -0500"),
	"lastPasswordChangedDate": ISODate("2017-02-01 18:25:37 -0500"),
	"failedPasswordAttemptCount": NumberInt(0)
}]);