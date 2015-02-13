var People = require('./app/models/people');

var getAllData = function (req, res) {

    People.find(function (err, data) {
      if(err)
        res.send(err);

      res.json(data);
    });

  };

var findOne = function (req, res) {

    People.find({_id: req.params.id}, function (err, data) {
      if(err)
        res.send(err);

      res.json(data);
    });

  };

var postData = function (req, res) {

    var person = new People({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    });

    person.save(function (err) {
      if(err)
        res.send(err);

      res.json({message: '1 person added'});
    });

  };

var deleteOne = function (req, res) {

    People.remove({_id: req.params.id}, function (err, data) {
      if(err)
        res.send(err);

      res.json({message: '1 person deleted'});
    });
  };

var updateOne = function (req, res) {

    People.findById(req.params.id, function (err, data) {

      if(err)
        res.send();

      data.firstName = req.body.firstName;
      data.lastName = req.body.lastName;

      data.save(function (err) {
        if(err)
          res.send(err);

        res.json({message: data._id +' Updated'});
      });
    });
  };

module.exports.getAllData = getAllData;
module.exports.findOne = findOne;
module.exports.postData = postData;
module.exports.deleteOne = deleteOne;
module.exports.updateOne = updateOne;

