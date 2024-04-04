const checkTypeDao = require("../../dao/checkTypeDao/checkTypeDao");

const createCheckType = async (checkTypeData) => {
  return await checkTypeDao.createCheckType(checkTypeData);
};

const updateCheckType = async (id, updateData) => {
  return await checkTypeDao.updateCheckTypeById(id, updateData);
};

const deleteCheckType = async (id) => {
  return await checkTypeDao.deletedCheckType(id);
};

const getCheckTypes = async () => {
  return await checkTypeDao.getCheckTypes();
};

module.exports = {
  createCheckType,
  updateCheckType,
  deleteCheckType,
  getCheckTypes,
};
