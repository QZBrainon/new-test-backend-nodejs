const productModel = require("../database/models/productModel");

const createProduct = async (productData) => {
  return await productModel.create(productData);
};

const getAllProducts = async () => {
  return await productModel
    .find({}, "-_id -__v")
    .populate("category", "-_id -__v");
};

const getProductById = async (id) => {
  return await productModel
    .findById(id, "-_id -__v")
    .populate("category", "-_id -__v");
};

const updateProduct = async (id, productData) => {
  return productModel
    .findByIdAndUpdate(
      id,
      { $set: productData },
      { new: true, projection: { _id: 0, __v: 0 }, lean: true }
    )
    .populate("category");
};

const deleteProduct = async (id) => {
  return await productModel.findByIdAndDelete(id);
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
