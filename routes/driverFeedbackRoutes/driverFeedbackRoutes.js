const express = require("express");
const driverFeedbacksController = require("../../controllers/driverFeedbackController/driverFeedbackController");

const router = express.Router();

router.post(
  "/create-driver-feedback",
  driverFeedbacksController.createDriverFeedback
);
router.get(
  "/get-driver-feedbacks/:id",
  driverFeedbacksController.getDriverFeedbacksByDriverId
);
router.delete(
  "/delete-driver-feedback/:id",
  driverFeedbacksController.deleteFeedbackById
);
router.put(
  "/update-driver-feedback",
  driverFeedbacksController.updateFeedbackById
);
router.put(
  "/answer-driver-feedback",
  driverFeedbacksController.updateFeedbackAnswerById
);
router.get(
  "/get-all-drivers-feedbacks",
  driverFeedbacksController.getAllDriversFeedbacks
);
module.exports = router;
