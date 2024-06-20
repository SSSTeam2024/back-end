const express = require("express");
const emailQueueController = require("../../controllers/emailQuueueControllers/emailQueueControllers");

const router = express.Router();

router.post("/newEmailQueue", emailQueueController.createEmailQueue);
router.post(
  "/newMultipleEmailQueue",
  emailQueueController.createMultipleEmailQueue
);
router.delete("/deleteEmailQueue/:id", emailQueueController.deleteEmailQueue);
router.delete("/deleteEmailQueues", emailQueueController.deleteEmailQueues);
router.get("/getAllEmailQueues", emailQueueController.getEmailQueues);
module.exports = router;
