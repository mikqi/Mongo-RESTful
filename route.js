var express = require("express"),
    People = require('./query');

var routerPeople = express.Router();
// xxx/api
routerPeople.route('/')
  .get(People.getAllData)
  .post(People.postData);

// xxx/api/:id
routerPeople.route('/:id')
  .get(People.findOne)
  .delete(People.deleteOne)
  .put(People.updateOne);

module.exports.routerPeople = routerPeople;
