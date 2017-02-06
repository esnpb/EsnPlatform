db.createCollection('Notifications');
db.Notifications.insert([{
	"type": "notification",
	"icon": "fa-comment",
	"priority": "1",
	"timestamp": "2017-02-05 13:00:00",
	"href": "#",
	"titles": {
		"gb": 'New comment',
		"pl": 'Nowy komentarz',
	},
	users: [
		"karol",
	]
}, {
	"type": "notification",
	"icon": "fa-tweeter",
	"priority": "1",
	"timestamp": "2017-02-05 13:00:01",
	"href": "#",
	"titles": {
		"gb": 'New follower',
		"pl": 'Nowy follower',
	},
	users: [
		"karol",
		"admin",
	]
}, {
	"type": "notification",
	"icon": "fa-envelope",
	"priority": "1",
	"timestamp": "2017-02-05 13:04:00",
	"href": "#",
	"titles": {
		"gb": 'New messages',
		"pl": 'Nowe wiadaomości',
	},
	users: [
		"karol",
		"admin",
	]
}, {
	"type": "notification",
	"icon": "fa-bars",
	"priority": "1",
	"timestamp": "2017-02-05 13:10:00",
	"href": "#",
	"titles": {
		"gb": 'New tasks',
		"pl": 'Nowe zadania',
	},
	users: [
		"karol",
		"admin",
	]
}, {
	"type": "notification",
	"icon": "fa-upload",
	"priority": "1",
	"timestamp": "2017-02-05 12:00:00",
	"href": "#",
	"titles": {
		"gb": 'Server rebooted',
		"pl": 'Serwer zrestartowany',
	},
	users: [
		"admin",
	]
}]);