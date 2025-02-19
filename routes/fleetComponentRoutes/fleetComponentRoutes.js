const express = require("express");
const fleetComponentControllers = require("../../controllers/fleetComponentControllers/fleetComponentControllers");

const router = express.Router();

router.post("/create-fleet", fleetComponentControllers.createFleet);
router.get("/get-fleet-by-id/:id", fleetComponentControllers.getFleetById);
router.delete("/delete-fleet/:id", fleetComponentControllers.deleteFleetById);
router.patch("/update-fleet/:id", fleetComponentControllers.updateFleet);
router.get("/get-all-fleets", fleetComponentControllers.getAllFleets);
module.exports = router;
