var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET all customers. */
router.get('/customers', function (req, res, next) {
  var db = require('../db');
  var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
  Customer.find({}).lean().exec(function(e,docs){
     res.json(docs);
     res.end();
  });
});

/* GET ONE customers. */
router.get('/customers/:id', function (req, res, next) {
  var db = require('../db');
  var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
  Customer.find({ _id: req.params.id }).lean().exec(function (e, docs) {
      res.json(docs);
      res.end();
  });
});

/* POST ONE customer. */
router.post('/customers/', function (req, res, next) {
  var db = require('../db');
  var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
  var newcustomer = new Customer({ name: req.body.name, email: req.body.email });
  newcustomer.save(function (err) {
      if (err) {
          res.status(500).json({ error: err.message });
          res.end();
          return;
      }
      res.json(newcustomer);
      res.end();
  });
});

/* PUT ONE customer. */
router.put('/customers/:id', function (req, res, next) {
  var db = require('../db');
  var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
  Customer.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, doc) {
      if (err) {
          res.status(500).json({ error: err.message });
          res.end();
          return;
      }
      res.json(req.body);
      res.end();
  });
});

/* DELETE ONE customer. */
router.delete('/customers/:id', function (req, res, next) {
  var db = require('../db');
  var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
  Customer.find({ _id: req.params.id }).remove(function (err) {
      if (err) {
          res.status(500).json({ error: err.message });
          res.end();
          return;
      }
      res.json({success: true});
      res.end();
  });
});

module.exports = router;
