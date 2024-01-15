const categoryService = require("../services/categoryService");

const createCategory = async (req, res) => {
  const categoryData = req.body;
  const createdCategory = await categoryService.createCategory(categoryData);
  res.status(201).json(createdCategory);
};

const getAllCategories = async (_req, res) => {
  const categories = await categoryService.getAllCategories();
  res.status(200).json(categories);
};

const getCategoryById = async (req, res) => {
  const categoryId = req.params.id;
  const category = await categoryService.getCategoryById(categoryId);
  if (category) {
    res.status(200).json(category);
  } else {
    res.status(404).json({ error: "Category not found" });
  }
};

const updateCategory = async (req, res) => {
  const categoryId = req.params.id;
  const categoryData = req.body;
  const updatedCategory = await categoryService.updateCategory(
    categoryId,
    categoryData
  );
  if (updatedCategory) {
    res.status(200).json(updatedCategory);
  } else {
    res.status(404).json({ error: "Category not found" });
  }
};

const deleteCategory = async (req, res) => {
  const categoryId = req.params.id;
  const deletedCategory = await categoryService.deleteCategory(categoryId);
  if (deletedCategory) {
    res.status(200).json(deletedCategory);
  } else {
    res.status(404).json({ error: "Category not found" });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
