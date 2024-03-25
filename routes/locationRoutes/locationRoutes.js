const express = require("express");
const locationController = require("../../controllers/locationControllers/locationController");

const router = express.Router();

router.post("/newLocation", locationController.createLocation);
router.get("/getAllLocations", locationController.getLocations);
router.get("/getLocationById/:id", locationController.getLocationById);
router.put("/updateLocation/:id", locationController.updateLocation);
router.delete("/deleteLocation/:id", locationController.deleteLocation);

module.exports = router;
