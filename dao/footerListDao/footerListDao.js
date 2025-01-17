const FooterList = require("../../models/footerListModel/footerListModel");

const createFooterList = async (footerListData) => {
  return await FooterList.create(footerListData);
};

const getFooterLists = async () => {
  return await FooterList.find();
};

const updateFooterList = async (id, updateData) => {
  return await FooterList.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteFooterList = async (id) => {
  return await FooterList.findByIdAndDelete(id);
};

const addItemToFooterList = async (footerListId, newItem) => {
  return await FooterList.findByIdAndUpdate(
    footerListId,
    { $push: { items: newItem } },
    { new: true }
  );
};

module.exports = {
  createFooterList,
  getFooterLists,
  updateFooterList,
  deleteFooterList,
  addItemToFooterList,
};
