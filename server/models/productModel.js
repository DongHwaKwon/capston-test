// models/product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category: String,
  number: Number,
  name: String,
  price: Number,
  x: Number,
  y: Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
