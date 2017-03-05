const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mainRouter = require('./routes/MainRouter.js');

var app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

mongoose.connect('mongodb://localhost/esnplatform');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.get('/', function(req, res) {
  res.send('hello world!');
});

mainRouter.applyRoutes(app);

app.listen(PORT);

console.log('running on port ' + PORT);
