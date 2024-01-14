const categoryModel = require("../database/models/categoryModel");

const createCategory = async (categoryData) => {
  return await categoryModel.create(categoryData);
};

const getAllCategories = async () => {
  return await categoryModel.find();
};

const getCategoryById = async (id) => {
  return await categoryModel.findById(id);
};

const updateCategory = async (id, categoryData) => {
  return categoryModel.findByIdAndUpdate(
    id,
    { $set: categoryData },
    { new: true }
  );
};

const deleteCategory = async (id) => {
  return await categoryModel.findByIdAndDelete(id);
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
