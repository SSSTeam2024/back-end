const express = require("express");
const vehicleAffiliateController = require("../../controllers/affiliateVehicleControllers/affiliateVehicleControllers");

const router = express.Router();

router.post(
  "/newAffiliateVehicle",
  vehicleAffiliateController.addNewVehicleAffiliate
);
router.patch(
  "/updateAffiliateVehicle/:id",
  vehicleAffiliateController.updateVehicleAffiliateById
);
router.get(
  "/getAffiliateVehicle/:id",
  vehicleAffiliateController.getVehicleAffiliateById
);
router.get(
  "/getAllAffiliateVehicles/:id",
  vehicleAffiliateController.getAllAffiliateVehicles
);
router.delete(
  "/deleteAffiliateVehicle/:id",
  vehicleAffiliateController.deleteAffiliateVehicleById
);
module.exports = router;
