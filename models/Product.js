const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    }
  },
  {
    //* fecha de creacion y actualizacion del producto
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
