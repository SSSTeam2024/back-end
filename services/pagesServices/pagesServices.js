const pageDao = require("../../dao/pageDao/pageDao");

const createPage = async (pageData) => {
  return await pageDao.createPage(pageData);
};

const getPages = async () => {
  return await pageDao.getPages();
};

const updatePage = async (id, updateData) => {
  return await pageDao.updatePage(id, updateData);
};

const deletePage = async (id) => {
  return await pageDao.deletePage(id);
};

module.exports = {
  createPage,
  getPages,
  updatePage,
  deletePage,
};
