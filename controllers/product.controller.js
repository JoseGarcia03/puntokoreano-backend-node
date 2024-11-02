const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Products has been found successfully",
      data: products,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Products query failed",
      error: err,
    });
  }
};

module.exports = {
  getProducts,
};
