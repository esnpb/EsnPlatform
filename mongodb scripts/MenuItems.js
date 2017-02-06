db.createCollection('MenuItems');
db.MenuItems.insert([{
	"parentId": null,
	"targetUrl": "/Dashboard",
	"level": "0",
	"icon": "fa-dashboard",
	"wage": NumberInt(0),
	"titles": {
		"gb": 'Dashboard',
		"pl": 'Panel główny',
	}
}, {
	"parentId": null,
	"targetUrl": "/tables",
	"level": "0",
	"icon": "fa-dashboard",
	"wage": NumberInt(1),
	"titles": {
		"gb": 'Tables',
		"pl": 'Tabele',
	}
}, {
	"parentId": null,
	"targetUrl": "/forms",
	"level": "0",
	"icon": "fa-dashboard",
	"wage": NumberInt(2),
	"titles": {
		"gb": 'Forms',
		"pl": 'Formularze',
	}
}, {
	"parentId": null,
	"targetUrl": "/charts",
	"level": "0",
	"icon": "fa-bar-chart-o",
	"wage": NumberInt(3),
	"titles": {
		"gb": 'Charts',
		"pl": 'Wykresy',
	}
}, {
	"parentId": null,
	"targetUrl": "/ui-elements",
	"level": "0",
	"icon": "fa-wrench",
	"wage": NumberInt(4),
	"titles": {
		"gb": 'UI elements',
	}
}, {
	"parentId": null,
	"targetUrl": "/multi-level-dropdown",
	"level": "0",
	"icon": "fa-sitemap",
	"wage": NumberInt(5),
	"titles": {
		"gb": 'Multi-level dropdown',
	}
}, {
	"parentId": null,
	"targetUrl": "/sample-pages",
	"level": "0",
	"icon": "fa-files-o",
	"wage": NumberInt(6),
	"titles": {
		"gb": 'Sample pages',
	}
}, {
	"parentId": null,
	"targetUrl": "/flot-chart",
	"level": "1",
	"icon": "",
	"wage": NumberInt(0),
	"titles": {
		"gb": 'Flot chart',
		"pl": 'Wykres Flot',
	}
}, {
	"parentId": null,
	"targetUrl": "/morris",
	"level": "1",
	"icon": "",
	"wage": NumberInt(1),
	"titles": {
		"gb": 'Morris.js chart',
		"pl": 'Wykres Morris.js',
	}
}, {
	"parentId": null,
	"targetUrl": "/panels-wells",
	"level": "1",
	"icon": "",
	"wage": NumberInt(0),
	"titles": {
		"gb": 'Panels and wells',
	}
}, {
	"parentId": null,
	"targetUrl": "/buttons",
	"level": "1",
	"icon": "",
	"wage": NumberInt(1),
	"titles": {
		"gb": 'Buttons',
		"pl": 'Przyciski',
	}
}, {
	"parentId": null,
	"targetUrl": "/notifications",
	"level": "1",
	"icon": "",
	"wage": NumberInt(2),
	"titles": {
		"gb": 'Notifications',
		"pl": 'Powiadomienia',
	}
}, {
	"parentId": null,
	"targetUrl": "/typography",
	"level": "1",
	"icon": "",
	"wage": NumberInt(3),
	"titles": {
		"gb": 'Typography',
		"pl": 'Typografia',
	}
}, {
	"parentId": null,
	"targetUrl": "/icons",
	"level": "1",
	"icon": "",
	"wage": NumberInt(4),
	"titles": {
		"gb": 'Icons',
		"pl": 'Ikony',
	}
}, {
	"parentId": null,
	"targetUrl": "/grid",
	"level": "1",
	"icon": "",
	"wage": NumberInt(5),
	"titles": {
		"gb": 'Grid',
		"pl": 'Grid',
	}
}, {
	"parentId": null,
	"targetUrl": "/second-level-item",
	"level": "1",
	"icon": "",
	"wage": NumberInt(1),
	"titles": {
		"gb": '2 level item',
		"pl": 'Element 2 poziomu',
	}
}, {
	"parentId": null,
	"targetUrl": "/second-level-item",
	"level": "1",
	"icon": "",
	"wage": NumberInt(2),
	"titles": {
		"gb": 'Other 2 level item',
		"pl": 'Inny element 2 poziomu',
	}
}, {
	"parentId": null,
	"targetUrl": "/third-level-item",
	"level": "2",
	"icon": "",
	"wage": NumberInt(1),
	"titles": {
		"gb": '3rd level item',
		"pl": 'Element 3 poziomu',
	}
}, {
	"parentId": null,
	"targetUrl": "/third-level-item",
	"level": "2",
	"icon": "",
	"wage": NumberInt(3),
	"titles": {
		"gb": 'Other 3rd level item',
		"pl": 'Inny element 3 poziomu',
	}
}, {
	"parentId": null,
	"targetUrl": "/third-level-item",
	"level": "2",
	"icon": "",
	"wage": NumberInt(4),
	"titles": {
		"gb": 'Some other 3rd level item',
		"pl": 'Jeszcze inny element 3 poziomu',
	}
}, {
	"parentId": null,
	"targetUrl": "/third-level-item",
	"level": "2",
	"icon": "",
	"wage": NumberInt(5),
	"titles": {
		"gb": 'Last 3rd level item',
		"pl": 'Ostatni element 3 poziomu',
	}
}, {
	"parentId": null,
	"targetUrl": "/blank-page",
	"level": "1",
	"icon": "fa-files-o",
	"wage": NumberInt(2),
	"titles": {
		"gb": 'Blank page',
		"pl": 'Pusta strona',
	}
}, {
	"parentId": null,
	"targetUrl": "/login-page",
	"level": "1",
	"icon": "fa-files-o",
	"wage": NumberInt(3),
	"titles": {
		"gb": 'Login page',
		"pl": 'Logowanie',
	}
}]);
db.MenuItems.insert([{
	"parentId": null,
	"targetUrl": "/users",
	"level": "0",
	"icon": "fa-user",
	"wage": NumberInt(1),
	"titles": {
		"gb": 'Users list',
		"pl": 'Użytkownicy',
	}
}]);