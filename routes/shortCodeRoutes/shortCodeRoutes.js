const express = require("express");
const shortCodeController = require("../../controllers/shortCodeControllers/shortCodeControllers");

const router = express.Router();

router.post("/create-short-code", shortCodeController.createShortCode);
router.put("/update-short-code/:id", shortCodeController.updateShortCode);
router.delete("/delete-short-code/:id", shortCodeController.deleteShortCode);
router.get("/get-all-short-codes", shortCodeController.getShortCodes);
module.exports = router;
