const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  operator: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  validity: {
    type: String,
    required: true
  },
  benefits: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Plan", planSchema);
