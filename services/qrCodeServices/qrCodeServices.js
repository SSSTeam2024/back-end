const QRCodeDao = require("../../dao/qrCodeDao/qrCodeDao");

const createQRCode = async (QRCodeData) => {
  let qrCodes = await QRCodeDao.getQRCodeDetails({
    stopName: QRCodeData.stopName,
    date: QRCodeData.date,
    stop_time: QRCodeData.stop_time,
    id_quote: QRCodeData.id_quote,
  });
  if (qrCodes.length !== 0) {
    return qrCodes[0];
  } else {
    let qrCode = await QRCodeDao.createQRCode(QRCodeData);
    return qrCode;
  }
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

const getQRCodeDetails = async (QRCodeData) => {
  return await QRCodeDao.getQRCodeDetails(QRCodeData);
};

module.exports = {
  createQRCode,
  getQRCodeDetails,
  //   updateQRCode,
  deleteQRCode,
  getQRCodes,
};
