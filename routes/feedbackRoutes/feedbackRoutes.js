const express = require("express");
const feedbacksController = require("../../controllers/feedbackController/feedbackController");

const router = express.Router();

router.post("/create-feedback", feedbacksController.createFeedback);
router.get(
  "/get-driver-feedbacks/:id",
  feedbacksController.getFeedbacksByDriverId
);
router.get(
  "/get-student-feedbacks/:id",
  feedbacksController.getFeedbacksByStudentId
);
router.get(
  "/get-employee-feedbacks/:id",
  feedbacksController.getFeedbacksByEmployeeId
);
router.delete("/delete-feedback/:id", feedbacksController.deleteFeedbackById);
router.put("/update-feedback", feedbacksController.updateFeedbackById);
router.put("/answer-feedback", feedbacksController.updateFeedbackAnswerById);
router.get("/get-all-feedbacks", feedbacksController.getAllFeedbacks);
module.exports = router;
