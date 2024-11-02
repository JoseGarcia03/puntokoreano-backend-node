const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    old_price: {
      type: Number,
    },
    group: {
      type: String,
      required: true,
    },
    subgroup: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
    },
    code: {
      type: Number,
      unique: true,
    },
    shipping: {
      type: [String],
    },
    images: {
      type: [String],
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    tags: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "products_collection",
  productSchema,
  "products_collection"
);
