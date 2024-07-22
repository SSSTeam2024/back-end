const defectDao = require("../../dao/defectDao/defectDao");

const createDefect = async (DefectData) => {
  return await defectDao.createDefect(DefectData);
};

const getDefects = async () => {
  return await defectDao.getDefects();
};

const getDefectById = async (id) => {
  return await defectDao.getDefectById(id);
};

const deleteDefect = async (id) => {
  return await defectDao.deleteDefect(id);
};

const updateDefect = async (id, updateData) => {
  return await defectDao.updateDefect(id, updateData);
};

module.exports = {
  createDefect,
  getDefects,
  getDefectById,
  deleteDefect,
  updateDefect,
};
