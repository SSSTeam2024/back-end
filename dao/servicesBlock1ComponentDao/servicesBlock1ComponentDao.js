const Block1 = require("../../models/ServicesBlock1Model/ServicesBlock1Model");

const createBlock1 = async (block1Data) => {
  const block1 = new Block1(block1Data);
  return await block1.save();
};

const getBlock1 = async () => {
  return await Block1.find();
};

const updateBlock1 = async (id, updateData) => {
  return await Block1.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteBlock1 = async (id) => {
  return await Block1.findByIdAndDelete(id);
};

module.exports = {
  createBlock1,
  getBlock1,
  updateBlock1,
  deleteBlock1,
};
