const Page = require("../../models/pagesModel/pagesModel");

const createPage = async (pageData) => {
  return await Page.create(pageData);
};

const getPages = async () => {
  return await Page.find();
};

const updatePage = async (id, updateData) => {
  return await Page.findByIdAndUpdate(id, updateData, { new: true });
};

const deletePage = async (id) => {
  return await Page.findByIdAndDelete(id);
};

module.exports = {
  createPage,
  getPages,
  updatePage,
  deletePage,
};
