var express = require("express"),
    People = require('./query');

/**
 * Set Routing buat people
 */
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

/**
 * Export object
 * @type {object}
 */
module.exports.routerPeople = routerPeople;
