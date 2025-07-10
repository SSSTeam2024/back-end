const express = require("express");
const offerControllers = require("../../controllers/offerControllers/offerControllers");

const router = express.Router();

router.post("/create-new", offerControllers.createOffer);
router.get("/getAll", offerControllers.getOffers);
router.patch("/update/:id", offerControllers.updateOffer);
router.delete("/delete/:id", offerControllers.deleteOffer);

module.exports = router;
