var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/boostiny');
var productSchema = new Schema({
  product_name: { type: String, Required:  'Product name cannot be left blank.' },
  
  price:    { type: String,     Required:  'Product price cannot be left blank.'},
  
  category:  [{ type: mongoose.Schema.category_name, ref: 'category'}]
});
module.exports = mongoose.model('Products', productSchema);