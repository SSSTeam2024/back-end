const express = require("express");
const vehiclesClassComponentControllers = require("../../controllers/vehiclesClassComponentControllers/vehiclesClassComponentControllers");

const router = express.Router();

router.post(
  "/createVehiclesClass",
  vehiclesClassComponentControllers.createVehiclesClass
);
router.patch(
  "/updateVehicleClass/:id",
  vehiclesClassComponentControllers.updateVehiclesClass
);
router.get(
  "/getVehiclesClass",
  vehiclesClassComponentControllers.getVehiclesClass
);
router.delete(
  "/deleteVehicleClass/:id",
  vehiclesClassComponentControllers.deleteVehiclesClass
);
module.exports = router;
