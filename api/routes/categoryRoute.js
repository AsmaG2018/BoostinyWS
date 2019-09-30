'use strict';
module.exports = function(app) {
    var category = require('../controllers/CategoryController');
    app.route('/categories')
        .get((req, res, next) => {
            Product.find( {  } )
                .populate('product')
                .exec()
        
};
