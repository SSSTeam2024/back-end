const ForceSingle = require("../../models/singleForceModel/singleForceModel");

const createForceSingle = async (forceSingleData) => {
  return await ForceSingle.create(forceSingleData);
};
const updateForceSingle = async (id, updateData) => {
  return await ForceSingle.findByIdAndUpdate(id, updateData, { new: true });
};

const deletedForceSingle = async (id) => {
  return await ForceSingle.findByIdAndDelete(id);
};

const getForceSingles = async () => {
  return await ForceSingle.find().populate("car");
};
module.exports = {
  createForceSingle,
  updateForceSingle,
  deletedForceSingle,
  getForceSingles,
};
