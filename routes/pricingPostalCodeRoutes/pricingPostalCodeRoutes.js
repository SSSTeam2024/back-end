const express = require("express");
const pricingPostalCodeController = require("../../controllers/pricingPostalCodeController/pricingPostalCodeController");

const router = express.Router();

router.post(
  "/newPricingPostalCode",
  pricingPostalCodeController.addNewPricingPostalCode
);
router.put(
  "/updatePricingPostalCode/:id",
  pricingPostalCodeController.updatePricingPostalCode
);
router.get(
  "/getPricingPostalCode/:id",
  pricingPostalCodeController.getPricingPostalCodeById
);
router.get(
  "/getAllPricingPostalCodes",
  pricingPostalCodeController.getAllPricingPostalCodes
);
router.delete(
  "/deletePricingPostalCode/:id",
  pricingPostalCodeController.deletePricingPostalCode
);
module.exports = router;
