const express = require("express");
const bestOfferComponentControllers = require("../../controllers/bestOfferComponentControllers/bestOfferComponentControllers");

const router = express.Router();

router.post("/createBestOffer", bestOfferComponentControllers.createBestOffer);
router.get("/getBestOffer", bestOfferComponentControllers.getBestOffer);
router.patch(
  "/updateBestOffer/:id",
  bestOfferComponentControllers.updateBestOffer
);
router.delete(
  "/deleteBestOffer/:id",
  bestOfferComponentControllers.deleteBestOffer
);
router.put(
  "/addTabToBestOffer/:valueId",
  bestOfferComponentControllers.addTabToBestOffer
);

module.exports = router;
