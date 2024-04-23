const CheckType = require("../../models/checkTypeModel/checkTypeModel");

const createCheckType = async (checkTypeData) => {
  return await CheckType.create(checkTypeData);
};

const getCheckTypes = async () => {
  return await CheckType.find();
};

const getCheckTypeById = async (id) => {
  return await CheckType.findById(id);
};

const updateCheckTypeById = async (id, updateData) => {
  return await CheckType.findByIdAndUpdate(id, updateData, { new: true });
};

const deletedCheckType = async (id) => {
  return await CheckType.findByIdAndDelete(id);
};

module.exports = {
  createCheckType,
  getCheckTypes,
  getCheckTypeById,
  updateCheckTypeById,
  deletedCheckType,
};