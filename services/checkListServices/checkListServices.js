const checkListDao = require("../../dao/checkListDao/checkListDao");
const quoteDao = require("../../dao/quoteDao/quoteDao");

const createCheckList = async (quote_id,checkListData) => {
  let check_list = await checkListDao.createCheckList(checkListData);
  await quoteDao.updateCheckList(quote_id, check_list._id);
};

const updateCheckList = async (id, updateData) => {
  return await checkListDao.updateCheckListById(id, updateData);
};

const deleteCheckList = async (id) => {
  return await checkListDao.deletedCheckList(id);
};

const getCheckLists = async () => {
  return await checkListDao.getCheckLists();
};

module.exports = {
  createCheckList,
  updateCheckList,
  deleteCheckList,
  getCheckLists,
};
