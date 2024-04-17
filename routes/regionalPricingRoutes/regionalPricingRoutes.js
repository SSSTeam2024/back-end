const express = require("express");
const regionalPricingController = require("../../controllers/regionalPricingController/regionalPricingController");

const router = express.Router();

router.post(
  "/newRegionalPricing",
  regionalPricingController.addNewRegionalPricing
);
router.put(
  "/updateRegionalPricing/:id",
  regionalPricingController.updateRegionalPricing
);
router.get(
  "/getRegionalPricing/:id",
  regionalPricingController.getRegionalPricingById
);
router.get(
  "/getAllRegionalPricings",
  regionalPricingController.getAllRegionalPricings
);
router.delete(
  "/deleteRegionalPricing/:id",
  regionalPricingController.deleteRegionalPricing
);
module.exports = router;
