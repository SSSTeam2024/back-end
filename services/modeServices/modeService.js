const modeDao = require("../../dao/modeDao/modeDao");

const createMode = async (modeData) => {
  return await modeDao.createMode(modeData);
};

const updateMode = async (id, updateData) => {
  return await modeDao.updateMode(id, updateData);
};

const deleteMode = async (id) => {
  return await modeDao.deletedMode(id);
};

const getModes = async () => {
  return await modeDao.getModes();
};

module.exports = {
  createMode,
  updateMode,
  deleteMode,
  getModes,
};
