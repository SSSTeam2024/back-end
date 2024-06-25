const express = require("express");
const visPayTrackController = require("../../controllers/visitorPaymentTrackingController/visitorPaymentTrackingController");

const router = express.Router();

router.get(
  "/create-payment-tracking-record/:v/:q",
  visPayTrackController.createPaymentTrackingRecord
);
router.post("/get-payment-details", visPayTrackController.getPaymentTracking);
router.get("/get-details/:id", visPayTrackController.getPaymentTrackingById);

module.exports = router;
