const QRCodeService = require("../../services/qrCodeServices/qrCodeServices");

const createQRCode = async (req, res) => {
  try {
    const { stopName, date, stop_time, id_quote, key } = req.body;
    const newQRCode = await QRCodeService.createQRCode({
      stopName,
      date,
      stop_time,
      id_quote,
      key,
    });
    res.json(newQRCode);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getQRCodeDetails = async (req, res) => {
  try {
    const { stopName, date, stop_time, id_quote } = req.body;
    const qrCodeDetails = await QRCodeService.getQRCodeDetails({
      stopName,
      date,
      stop_time,
      id_quote,
    });
    res.json(qrCodeDetails);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
// const updateQRCode = async (req, res) => {
//   try {
//     const QRCodeId = req.params.id;
//     const { list } = req.body;

//     const updatedQRCode = await QRCodeService.updateQRCode(
//       QRCodeId,
//       {
//         list,
//       }
//     );

//     if (!updatedQRCode) {
//       return res.status(404).send("Duty check not found");
//     }
//     res.json(updatedQRCode);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

const deleteQRCode = async (req, res) => {
  try {
    const QRCodeId = req.params.id;

    const deletedQRCode = await QRCodeService.deleteQRCode(QRCodeId);

    if (!deletedQRCode) {
      return res.status(404).send("Duty check not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getQRCodes = async (req, res) => {
  try {
    const QRCodes = await QRCodeService.getQRCodes();
    res.json(QRCodes);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createQRCode,
  getQRCodeDetails,
  //   updateQRCode,
  deleteQRCode,
  getQRCodes,
};
