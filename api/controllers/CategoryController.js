'use strict';
var mongoose = require('mongoose'),
Category = mongoose.model('Category');
exports.category = function(req, res) {
    Category.find({}, function(err, category) {
      if (err)
        res.send(err);
      res.json(category);
    });
  };
exports.getproduct = function(req, res) {
    var productCategory = req.query.productCategory;
    Product.findByCategory(mongoose.Types.Category(productCategory), function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    });
  };