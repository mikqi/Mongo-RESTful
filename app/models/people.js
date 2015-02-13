var mongoose = require('mongoose');

mongoose.connect('mongodb://kampret:kampret@ds045001.mongolab.com:45001/mongoapi');
// mongoose.connect('mongodb://localhost/people');

var schemaPeople = mongoose.Schema({
  firstName: String,
  lastName: String,
});

var People = mongoose.model("People", schemaPeople);

module.exports = People;