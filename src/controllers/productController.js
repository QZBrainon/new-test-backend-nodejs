const productService = require("../services/productService");

const createProduct = async (req, res) => {
  const productData = req.body;
  const createdProduct = await productService.createProduct(productData);
  res.status(201).json(createdProduct);
};

const getAllProducts = async (_req, res) => {
  const products = await productService.getAllProducts();
  res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const productId = req.params.id;
  const product = await productService.getProductById(productId);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const productData = req.body;
  const updatedProduct = await productService.updateProduct(
    productId,
    productData
  );
  if (updatedProduct) {
    res.status(200).json(updatedProduct);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  const deletedProduct = await productService.deleteProduct(productId);
  if (deletedProduct) {
    res.status(200).json(deletedProduct);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
