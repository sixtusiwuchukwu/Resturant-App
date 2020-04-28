const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
    minlength: 1,
    required: true
  },
  gmail: {
    type: String,
    trim: true,
    minlength: 1,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minlength: 1,
    required: true
  }
});
const User = mongoose.model("User", userSchema);

module.exports = User;
