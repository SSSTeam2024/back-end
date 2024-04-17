const Mode = require("../../models/modeModel/mode");

const createMode = async (ModeData) => {
  return await Mode.create(ModeData);
};
const updateMode = async (id, updateData) => {
  return await Mode.findByIdAndUpdate(id, updateData, { new: true });
};

const deletedMode = async (id) => {
  return await Mode.findByIdAndDelete(id);
};

const getModes = async () => {
  return await Mode.find();
};
module.exports = {
  createMode,
  deletedMode,
  updateMode,
  getModes,
};
