const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  image: String,
  amount: Number,
  qauntity: {
    type: String,
    default: 1
  },
  totalAmount: Number,
  require: true
});

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
