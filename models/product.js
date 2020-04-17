const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  year: {
    type: String,
    required: false,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  torque: {
    type: String,
    required: false,
  },
  engine: {
    type: String,
    required: false,
  },
  sixty: {
    type: Number,
    required: false,
  },
  topSpeed: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  hp: {
    type: Number,
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  },
  imgURL: {
    type: String,
    required: false,
  }
});

export const Product = mongoose.model("Product", productSchema);
