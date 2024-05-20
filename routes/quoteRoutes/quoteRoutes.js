const express = require("express");
const quoteController = require("../../controllers/quoteController/quoteController");

const router = express.Router();

router.post("/newQuote", quoteController.createQuote);
router.get("/getAllQuotes", quoteController.getQuotes);
router.get("/getQuoteById/:id", quoteController.getQuoteById);
router.patch("/updateQuote/:id", quoteController.updateQuote);
router.delete("/deleteQuote/:id", quoteController.deleteQuote);
router.post("/sendBookingEmail", quoteController.sendBookingEmail);
router.post("/assignDriver", quoteController.assignDriverAPI);
router.post("/assignDriverToQuote", quoteController.assignDriverToQuoteAPI);
router.post("/assignVehicleToDriver", quoteController.assignVehicleToQuoteAPI);
router.post("/cancelQuote", quoteController.updateQuoteStatusToCancel);
router.post("/getQuotesByDriver/:id", quoteController.getQuotesByDriver);
router.get("/confirm-booking/:id", quoteController.updateQuoteStatus);
router.post("/sendPaymentEmail", quoteController.sendPaymentEmail);
router.post("/updateProgress", quoteController.updateProgress);
router.post("/getQuoteByIdSchedule", quoteController.getQuoteByIdSchedule);
router.post("/assignDriverAndVehicleToQuote", quoteController.assignDriverAndVehicleToQuoteAPI);
router.post("/assignAffiliate", quoteController.assignAffiliateToQuoteAPI);
router.post("/surveyAffiliate", quoteController.surveyAffiliate);
router.post("/acceptAssignedAffiliate", quoteController.acceptAssignedAffiliateToQuoteAPI);
router.get("/getQuotesByIdAffiliate/:id", quoteController.getQuotesByIdAffiliateAPI);
router.get("/getAffiliateQuotes",quoteController.getQuotes)
router.post("/cancelAffiliateQuote", quoteController.updateAffiliateQuoteStatusToCancel);
router.delete("/deleteAffiliateQuote/:id", quoteController.deleteAffiliateQuote);
router.post("/updateAffiliateQuoteProgress", quoteController.updateAffiliateQuoteProgress);
router.post("/updateAffiliateQuoteRefuse", quoteController.updateAffiliateQuoteStatusToRefuse);
router.post("/updateAffiliateQuoteAccept", quoteController.updateAffiliateQuoteStatusToAccept);
router.post("/assignAffiliateDriver", quoteController.assignAffiliateDriverToQuoteAPI);
router.post("/assignAffiliateVehicle", quoteController.assignAffiliateVehicleToQuoteAPI);
router.post("/assignAffiliateVehicleAndDriver", quoteController.assignAffiliateDriverAndVehicleToQuoteAPI);

router.post("/sendPriceAndNotes", quoteController.sendPriceAndNotes);
router.post("/sendAcceptJobStatus", quoteController.sendJobStatus);
router.post("/sendRefuseJobStatus", quoteController.sendRefuseJobStatus);
module.exports = router;
