const express = require("express");
const offerServicesControllers = require("../../controllers/offerServicesControllers/offerServicesControllers");

const router = express.Router();

router.post("/createOfferService", offerServicesControllers.createOfferService);
router.get("/getOfferService", offerServicesControllers.getOfferService);
router.patch(
  "/updateOfferService/:id",
  offerServicesControllers.updateOfferService
);
router.delete(
  "/deleteOfferService/:id",
  offerServicesControllers.deleteOfferService
);
router.put(
  "/addCardToOfferService/:offerId",
  offerServicesControllers.addCardToOfferService
);

module.exports = router;
