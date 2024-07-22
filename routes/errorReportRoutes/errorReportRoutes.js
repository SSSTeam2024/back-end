const express = require("express");
const errorReportController = require("../../controllers/errorReportControllers/errorReportControllers");

const router = express.Router();

router.post("/newErrorReport", errorReportController.createErrorReport);
router.get("/getAllErrorReports", errorReportController.getErrorReports);
router.get("/getErrorReport/:id", errorReportController.getErrorReportById);
router.delete(
  "/deleteErrorReport/:id",
  errorReportController.deleteErrorReport
);

router.get(
  "/getAllErrorReportsByCompanyID/:id",
  errorReportController.getAllRequestedFeaturesByCompanyID
);

module.exports = router;
