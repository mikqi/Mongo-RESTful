var express = require("express"),
  bodyParser = require("body-parser"),
  People = require("./app/models/people"),
  rute = require('./route');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.use('/api', rute.routerPeople);

app.listen(port, function() {
  console.log('Listen on port ' + port);
});
