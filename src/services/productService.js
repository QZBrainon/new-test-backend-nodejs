const productModel = require("../database/models/productModel");

const createProduct = async (productData) => {
  return await productModel.create(productData);
};

const getAllProducts = async () => {
  return await productModel.find();
};

const getProductById = async (id) => {
  return await productModel.findById(id);
};

const updateProduct = async (id, productData) => {
  return productModel.findByIdAndUpdate(
    id,
    { $set: productData },
    { new: true }
  );
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
