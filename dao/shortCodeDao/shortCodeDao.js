const ShortCode = require("../../models/shortCodeModel/shortCodeModel");

const createShortCode = async (ShortCodeData) => {
  return await ShortCode.create(ShortCodeData);
};

const getShortCodes = async () => {
  return await ShortCode.find();
};

// const getShortCodeById = async (id) => {
//   return await ShortCode.findById(id);
// };

const updateShortCodeById = async (id, updateData) => {
  return await ShortCode.findByIdAndUpdate(id, updateData, { new: true });
};

const deletedShortCode = async (id) => {
  return await ShortCode.findByIdAndDelete(id);
};

module.exports = {
  createShortCode,
  getShortCodes,
  //   getShortCodeById,
  updateShortCodeById,
  deletedShortCode,
};
