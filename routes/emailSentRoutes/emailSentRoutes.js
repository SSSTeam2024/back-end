const express = require("express");
const emailSentController = require("../../controllers/emailSentControllers/emailSentControllers");

const router = express.Router();

router.post("/newEmailSent", emailSentController.createEmailSent);
router.get("/allEmailsSent", emailSentController.getSentEmails);
router.delete("/deleteEmailSent/:id", emailSentController.deleteSentEmail);

module.exports = router;
