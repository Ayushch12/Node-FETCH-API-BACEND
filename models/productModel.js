const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
    default: 0
  },
  name: {
    type: String,
    required: [true, 'Please enter a product name']
  },
  type: {
    type: String,
    required: [true, 'Please enter a product type']
  },
  price: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  warranty_years: {
    type: Number,
    required: true
  },
  available: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
