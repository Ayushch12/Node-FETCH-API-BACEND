//Importation of Mongoose:
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,

  },
  name: {
    type: String,
    required: [true, 'Veuillez entrer un nom de produit']
  },
  type: {
    type: String,
    required: [true, 'Veuillez entrer un nom de produit']
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

//Exporting productSchema :
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
