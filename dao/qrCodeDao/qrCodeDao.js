const QRCode = require("../../models/qrcodeModel/qrcodeModel");

const createQRCode = async (QRCodeData) => {
  return await QRCode.create(QRCodeData);
};

const getQRCodes = async () => {
  return await QRCode.find();
};

const getQRCodeDetails = async (qrCodeData) => {
  const query = {
    stopName: qrCodeData.stopName,
    date: qrCodeData.date,
    stop_time: qrCodeData.stop_time,
    id_quote: qrCodeData.id_quote,
  };
  return await QRCode.find(query);
};

// const updateQRCodeById = async (id, updateData) => {
//   return await QRCode.findByIdAndUpdate(id, updateData, { new: true });
// };

const deletedQRCode = async (id) => {
  return await QRCode.findByIdAndDelete(id);
};

module.exports = {
  createQRCode,
  getQRCodes,
  getQRCodeDetails,
  //   getQRCodeById,
  //   updateQRCodeById,
  deletedQRCode,
};
