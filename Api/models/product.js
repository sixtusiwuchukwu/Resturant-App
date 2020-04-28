const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productImage: {
    type: String,
    required: true
  },
  productDescription: {
    type: String,
    minlength:15,
    required:true
  },
  productPrice: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
