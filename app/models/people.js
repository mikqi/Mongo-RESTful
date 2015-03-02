var mongoose = require('mongoose');

/**
 * Connect MongoDB
 */
mongoose.connect('mongodb://kampret:kampret@ds045001.mongolab.com:45001/mongoapi');
// mongoose.connect('mongodb://localhost/people');

/**
 * Buat Schema
 * @type {Object}
 */
var schemaPeople = mongoose.Schema({
  firstName: String,
  lastName: String,
});

/**
 * Buat Model People
 * @type {Object}
 */
var People = mongoose.model("People", schemaPeople);

module.exports = People;