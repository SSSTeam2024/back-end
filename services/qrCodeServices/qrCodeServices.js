const QRCodeDao = require("../../dao/qrCodeDao/qrCodeDao");

const createQRCode = async (QRCodeData) => {
  let check_list = await QRCodeDao.createQRCode(QRCodeData);
  return check_list;
};

// const updateQRCode = async (id, updateData) => {
//   return await QRCodeDao.updateQRCodeById(id, updateData);
// };

const deleteQRCode = async (id) => {
  return await QRCodeDao.deletedQRCode(id);
};

const getQRCodes = async () => {
  return await QRCodeDao.getQRCodes();
};

module.exports = {
  createQRCode,
  //   updateQRCode,
  deleteQRCode,
  getQRCodes,
};
