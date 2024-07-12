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

// const updateLocation = async (id, updateData) => {
//     return await Location.findByIdAndUpdate(id, updateData, { new: true });
//   };

module.exports = {
  createDefect,
  getDefectById,
  getDefects,
  deleteDefect,
};
