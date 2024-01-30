const sourceDao = require('../../dao/sourceDao/sourceDao');

const createSource = async (sourceData) => {
  return await sourceDao.createSource(sourceData);
};

const getSources = async () => {
  return await sourceDao.getSources();
};

const updateSource = async (id, updateData) => {
  return await sourceDao.updateSource(id, updateData);
};

const deleteSource = async (id) => {
  return await sourceDao.deleteSource(id);
};

module.exports = {
  createSource,
  getSources,
  updateSource,
  deleteSource,
};
