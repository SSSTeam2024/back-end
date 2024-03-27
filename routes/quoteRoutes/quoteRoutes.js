const express = require("express");
const quoteController = require("../../controllers/quoteController/quoteController");

const router = express.Router();

router.post("/newQuote", quoteController.createQuote);
router.get("/getAllQuotes", quoteController.getQuotes);
router.get("/getQuoteById/:id", quoteController.getQuoteById);
router.put("/updateQuote/:id", quoteController.updateQuote);
router.delete("/deleteQuote/:id", quoteController.deleteQuote);
router.post("/sendBookingEmail", quoteController.sendBookingEmail);
router.post("/assignDriver", quoteController.assignDriverAPI);
router.post("/assignDriverToQuote", quoteController.assignDriverToQuoteAPI);
router.post("/assignVehicleToDriver", quoteController.assignVehicleToQuoteAPI);
router.get("/confirm-booking/:id", quoteController.updateQuoteStatus);
router.post("/sendPaymentEmail", quoteController.sendPaymentEmail);

module.exports = router;
