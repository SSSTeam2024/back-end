const footerListDao = require("../../dao/footerListDao/footerListDao");

const createFooterList = async (footerListData) => {
  return await footerListDao.createFooterList(footerListData);
};

const getFooterLists = async () => {
  return await footerListDao.getFooterLists();
};

const updateFooterList = async (id, updateData) => {
  return await footerListDao.updateFooterList(id, updateData);
};

const deleteFooterList = async (id) => {
  return await footerListDao.deleteFooterList(id);
};

const addItemToFooterList = async (footerListId, newItem) => {
  return await footerListDao.addItemToFooterList(footerListId, newItem);
};

module.exports = {
  createFooterList,
  getFooterLists,
  updateFooterList,
  deleteFooterList,
  addItemToFooterList,
};
