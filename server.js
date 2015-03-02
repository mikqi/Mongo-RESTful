/**
* Tambah dependency yang di butuhin
 */
var express = require("express"),
  bodyParser = require("body-parser"),
  People = require("./app/models/people"),
  rute = require('./route');

/**
 * Init Express
 */
var app = express();

/**
 * Setting Form
 * @type {Object}
 */
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

/**
 * Set Port
 * @type {Number}
 */
var port = process.env.PORT || 8080;

app.use('/api', rute.routerPeople);

/**
 * Listen port 8080 || Port server default
 */
app.listen(port, function() {
  console.log('Listen on port ' + port);
});
