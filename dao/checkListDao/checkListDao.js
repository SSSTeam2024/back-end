const CheckList = require("../../models/checkListModel/checkListModel");

const createCheckList = async (checkListData) => {
  return await CheckList.create(checkListData);
};

const getCheckLists = async () => {
  return await CheckList.find();
};

const getCheckListById = async (id) => {
  return await CheckList.findById(id);
};

const updateCheckListById = async (id, updateData) => {
  return await CheckList.findByIdAndUpdate(id, updateData, { new: true });
};

const deletedCheckList = async (id) => {
  return await CheckList.findByIdAndDelete(id);
};

module.exports = {
  createCheckList,
  getCheckLists,
  getCheckListById,
  updateCheckListById,
  deletedCheckList,
};