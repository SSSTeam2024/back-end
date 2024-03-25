const forceSingleDao = require("../../dao/FoceSingleDao/forceSingleDao");

const createForceSingle = async (forceSingleData) => {
  return await forceSingleDao.createForceSingle(forceSingleData);
};

const updateForceSingle = async (id, updateData) => {
  return await forceSingleDao.updateForceSingle(id, updateData);
};

const deleteForceSingle = async (id) => {
  return await forceSingleDao.deletedForceSingle(id);
};

const getForceSingles = async () => {
  return await forceSingleDao.getForceSingles();
};

module.exports = {
  createForceSingle,
  updateForceSingle,
  deleteForceSingle,
  getForceSingles,
};
