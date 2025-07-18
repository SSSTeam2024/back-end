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
router.post("/confirm-booking", quoteController.updateQuoteStatus);
router.post("/sendPaymentEmail", quoteController.sendPaymentEmail);
router.post("/updateProgress", quoteController.updateProgress);
router.post("/getQuoteByIdSchedule", quoteController.getQuoteByIdSchedule);
router.post(
  "/assignDriverAndVehicleToQuote",
  quoteController.assignDriverAndVehicleToQuoteAPI
);
router.post("/assignAffiliate", quoteController.assignAffiliateToQuoteAPI);
router.post("/surveyAffiliate", quoteController.surveyAffiliate);
router.post(
  "/acceptAssignedAffiliate",
  quoteController.acceptAssignedAffiliateToQuoteAPI
);
router.get(
  "/getQuotesByIdAffiliate/:id",
  quoteController.getQuotesByIdAffiliateAPI
);
router.get("/getAffiliateQuotes", quoteController.getQuotes);
router.post(
  "/cancelAffiliateQuote",
  quoteController.updateAffiliateQuoteStatusToCancel
);
router.delete(
  "/deleteAffiliateQuote/:id",
  quoteController.deleteAffiliateQuote
);
router.post(
  "/updateAffiliateQuoteProgress",
  quoteController.updateAffiliateQuoteProgress
);
router.post(
  "/updateAffiliateQuoteRefuse",
  quoteController.updateAffiliateQuoteStatusToRefuse
);
router.post(
  "/updateAffiliateQuoteAccept",
  quoteController.updateAffiliateQuoteStatusToAccept
);
router.post(
  "/assignAffiliateDriver",
  quoteController.assignAffiliateDriverToQuoteAPI
);
router.post(
  "/assignAffiliateVehicle",
  quoteController.assignAffiliateVehicleToQuoteAPI
);
router.post(
  "/assignAffiliateVehicleAndDriver",
  quoteController.assignAffiliateDriverAndVehicleToQuoteAPI
);
router.post("/sendPriceAndNotes", quoteController.sendPriceAndNotes);
router.post("/sendAcceptJobStatus", quoteController.sendJobStatus);
router.post("/sendRefuseJobStatus", quoteController.sendRefuseJobStatus);
router.post(
  "/addAffiliateToWhiteList",
  quoteController.addAffiliateToExistingWhiteList
);
router.post(
  "/deleteAffiliateToWhiteList",
  quoteController.deleteAffiliateToExistingWhiteList
);
router.post("/deleteWhiteList", quoteController.deleteWhiteList);
router.get(
  "/get-new-quotes-by-driver/:id",
  quoteController.getNewQuotesByDriver
);
router.get(
  "/get-accepted-quotes-by-driver/:id",
  quoteController.getAcceptedQuotesByDriver
);
router.get(
  "/get-refused-quotes-by-driver/:id",
  quoteController.getRefusedQuotesByDriver
);
router.get(
  "/get-completed-quotes-by-driver/:id",
  quoteController.getCompletedQuotesByDriver
);
router.get(
  "/getAllQuotesByCompanyID/:id",
  quoteController.getAllQuotesByCompanyID
);
router.get(
  "/getAllQuotesBySchoolID/:id",
  quoteController.getAllQuotesBySchoolID
);
router.get(
  "/getAllSuggestedQuotesByAffiliateID/:id",
  quoteController.getAllSuggestedQuotesByAffiliateID
);
router.post(
  "/get-completed-quotes-from-last-7-days-by-driver/:id",
  quoteController.getCompletedJobsFromLast7Days
);
router.get(
  "/allQuotesByReference/:id",
  quoteController.getAllQuotesByReference
);
router.get(
  "/getAllQuotesByVisitorEmail/:email",
  quoteController.getAllQuotesByVisitorEmail
);
router.get(
  "/getAllQuotesByCompanyEmail/:email",
  quoteController.getAllQuotesByCompanyEmail
);
router.get(
  "/getAllQuotesBySchoolEmail/:email",
  quoteController.getAllQuotesBySchoolEmail
);
router.post("/getQuotesByEmployee/:id", quoteController.getQuotesByEmployee);
router.post("/getQuotesByStudent/:id", quoteController.getQuotesByStudent);
router.patch(
  "/updateQuoteInformation/:quoteId",
  quoteController.updateQuoteInformation
);
module.exports = router;
