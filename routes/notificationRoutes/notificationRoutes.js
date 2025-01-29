const express = require("express");
const notificationControllers = require("../../controllers/notificationControllers/notificationControllers");

const router = express.Router();

router.get("/getAllNotifications", notificationControllers.getNotifications);
router.patch("/updateNotification", notificationControllers.updateNotification);

module.exports = router;
