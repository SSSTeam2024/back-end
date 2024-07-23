const express = require("express");
const visitorFeedbackController = require("../../controllers/visitorFeedbackController/visitorFeedbackController");

const router = express.Router();

router.post("/newFeedback", visitorFeedbackController.createFeedback);
router.get("/getAllFeedbacks", visitorFeedbackController.getFeedbacks);
router.get("/getFeedback/:id", visitorFeedbackController.getFeedbackById);

module.exports = router;
