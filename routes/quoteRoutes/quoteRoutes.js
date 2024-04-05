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


module.exports = router;