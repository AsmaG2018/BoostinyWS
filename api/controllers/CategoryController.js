'use strict';
var mongoose = require('mongoose'),
 Category= mongoose.model('Category');
exports.Category= function(req, res){
    Category.findOne({title: req.params.Category}, function (err, Category) {
        if (err) return console.log(err);
        Product.find({Category: Category.title}, function(err, products) {
            if(err) return console.log(err);
            res.status(200).json(products);
  }