const express = require("express");
const driverAffiliateController = require("../../controllers/driverAffiliateControllers/driverAffiliateControllers");

const router = express.Router();

router.post("/registerAffiliateDriver", driverAffiliateController.registerDriverAffiliate);
router.put("/updateAffiliateDriver/:id", driverAffiliateController.updateDriverAffiliate);
router.get("/getAffiliateDriver/:id", driverAffiliateController.getDiverAffiliateById);
router.get("/getAllAffiliateDrivers", driverAffiliateController.getAffiliateDrivers);
router.delete("/deleteAffiliateDriver/:id", driverAffiliateController.deleteAffiliateDriver);
router.post("/getAffiliateDriverByEmail", driverAffiliateController.getAffiliateDriverByEmail);
module.exports = router;