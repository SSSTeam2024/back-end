const express = require("express");
const pricingCalendarController = require("../../controllers/pricingCalendarControllers/pricingCalendarControllers");

const router = express.Router();

router.post(
  "/newPricingCalendar",
  pricingCalendarController.createPricingCalendar
);
router.get(
  "/getAllPricingCalendars",
  pricingCalendarController.getPricingCalendars
);
router.get(
  "/getPricingCalendar/:id",
  pricingCalendarController.getPricingCalendarById
);
router.put(
  "/updatePricingCalendar/:id",
  pricingCalendarController.updatePricingCalendar
);
router.delete(
  "/deletePricingCalendar/:id",
  pricingCalendarController.deletePricingCalendar
);

module.exports = router;
