const express = require("express");
const quoteController = require("../../controllers/quoteController/quoteController");

const router = express.Router();

router.post("/newQuote", quoteController.createQuote);
router.get("/getAllQuotes", quoteController.getQuotes);
router.post("/getQuoteByIdSchedule", quoteController.getQuoteByIdSchedule);
router.get("/getQuoteById/:id", quoteController.getQuoteById);
router.put("/updateQuote/:id", quoteController.updateQuote);
router.delete("/deleteQuote/:id", quoteController.deleteQuote);
router.post("/sendBookingEmail", quoteController.sendBookingEmail);
router.post("/assignAffiliateDriver", quoteController.assignAffiliateDriverToQuoteAPI);
router.post("/assignAffiliateVehicle", quoteController.assignAffiliateVehicleToQuoteAPI);
router.post("/assignAffiliateVehicleAndDriver", quoteController.assignAffiliateDriverAndVehicleToQuoteAPI);
router.get("/getQuotesByIdAffiliate/:id", quoteController.getQuotesByIdAffiliateAPI);
router.get("/getAffiliateQuotes",quoteController.getQuotes)
router.post("/cancelAffiliateQuote", quoteController.updateAffiliateQuoteStatusToCancel);
router.delete("/deleteAffiliateQuote/:id", quoteController.deleteAffiliateQuote);
router.post("/updateAffiliateQuoteProgress", quoteController.updateAffiliateQuoteProgress);
router.post("/updateAffiliateQuoteRefuse", quoteController.updateAffiliateQuoteStatusToRefuse);
router.post("/updateAffiliateQuoteAccept", quoteController.updateAffiliateQuoteStatusToAccept);
module.exports = router;