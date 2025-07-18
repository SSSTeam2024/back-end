const express = require("express");
const driverController = require("../../controllers/driverControllers/driverController");

const router = express.Router();

router.post("/register", driverController.register);
router.post("/login", driverController.login);
router.post("/logout/:id", driverController.logout);
router.post("/getDriverByToken", driverController.getDriverByJwtToken);
router.patch("/updateProfileDriver/:id", driverController.updateProfile);
router.get("/getDriver/:id", driverController.getById);
router.get("/getAllDrivers", driverController.getDrivers);
router.delete("/deleteDriver/:id", driverController.deleteDriver);
router.post("/getDriverByEmail", driverController.getByEmail);
router.put("/updateDriverPassword/:id", driverController.updatePassword);
router.post(
  "/send-verification-code",
  driverController.generateVerificationCodeAndSendViaEmail
);
router.post("/updateApiKey", driverController.updateOneSignalApiKey);
module.exports = router;
