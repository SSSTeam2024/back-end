const express = require("express");
const qrCodeController = require("../../controllers/qrCodeControllers/qrCodeControllers");

const router = express.Router();

router.post("/create-qr-code", qrCodeController.createQRCode);
// router.put("/update-qr-code/:id", qrCodeController);
router.delete("/delete-qr-code/:id", qrCodeController.deleteQRCode);
router.get("/get-all-qr-codes", qrCodeController.getQRCodes);
module.exports = router;
