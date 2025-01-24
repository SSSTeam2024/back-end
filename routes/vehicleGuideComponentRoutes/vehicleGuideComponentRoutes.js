const express = require("express");
const vehicleGuideComponentControllers = require("../../controllers/vehicleGuideComponentControllers/vehicleGuideComponentControllers");

const router = express.Router();

router.post(
  "/createVehicleGuide",
  vehicleGuideComponentControllers.createVehicleGuide
);
router.patch(
  "/updateVehicle/:id",
  vehicleGuideComponentControllers.updateVehicleGuide
);
// router.get("/getVehicle/:id", vehicleGuideComponentControllers.getVehicleById);
router.get(
  "/getVehicleGuides",
  vehicleGuideComponentControllers.getVehicleGuides
);
// router.delete("/deleteVehicle/:id", vehicleGuideComponentControllers.deleteVehicleById);
module.exports = router;
