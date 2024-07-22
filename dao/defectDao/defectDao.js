const Defect = require("../../models/defectModel/defectModel");

const createDefect = async (defectData) => {
  return await Defect.create(defectData);
};

const getDefects = async () => {
  return await Defect.find();
};

const getDefectById = async (id) => {
  return await Defect.findById(id);
};

const deleteDefect = async (id) => {
  return await Defect.findByIdAndDelete(id);
};

const updateDefect = async (id, updateData) => {
  return await Defect.findByIdAndUpdate(id, updateData, { new: true });
};

module.exports = {
  createDefect,
  getDefectById,
  getDefects,
  deleteDefect,
  updateDefect,
};
