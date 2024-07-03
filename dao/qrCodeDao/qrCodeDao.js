const QRCode = require("../../models/qrcodeModel/qrcodeModel");

const createQRCode = async (QRCodeData) => {
  return await QRCode.create(QRCodeData);
};

const getQRCodes = async () => {
  return await QRCode.find();
};

// const getQRCodeById = async (id) => {
//   return await QRCode.findById(id);
// };

// const updateQRCodeById = async (id, updateData) => {
//   return await QRCode.findByIdAndUpdate(id, updateData, { new: true });
// };

const deletedQRCode = async (id) => {
  return await QRCode.findByIdAndDelete(id);
};

module.exports = {
  createQRCode,
  getQRCodes,
  //   getQRCodeById,
  //   updateQRCodeById,
  deletedQRCode,
};
