var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/boostiny');
var categorySchema = new Schema({
  category_name: { type: String, Required:  'Category name cannot be left blank.' },
  products: [{ type: mongoose.Schema.ObjectId, ref: 'products'}]
});
module.exports = mongoose.model('Category', categorySchema);
