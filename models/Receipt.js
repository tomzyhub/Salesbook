const mongoose = require("mongoose");

const ReceiptSchema = mongoose.Schema({
  companyname: {
    type: String,
    required: true,
  },

  contact: {
    type: String,
    required: true,
  },

  item1: {
    type: String,
    required: true,
  },

  item2: {
    type: String,
    required: true,
  },

  Quantity: {
    type: Number,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Receipt = mongoose.model("Receipt", ReceiptSchema);
module.exports = Receipt;
