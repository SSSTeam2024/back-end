const express = require("express");
const requestFeatureController = require("../../controllers/requestFeatureControllers/requestFeatureControllers");

const router = express.Router();

router.post(
  "/newRequestFeature",
  requestFeatureController.createRequestFeature
);
router.get(
  "/getAllRequestFeatures",
  requestFeatureController.getRequestFeatures
);
router.get(
  "/updateRequestFeature/:id",
  requestFeatureController.getRequestFeatureById
);
router.delete(
  "/deleteRequestFeature/:id",
  requestFeatureController.deleteRequestFeature
);

router.get(
  "/getAllRequestedFeaturesByCompanyID/:id",
  requestFeatureController.getAllRequestedFeaturesByCompanyID
);

module.exports = router;
