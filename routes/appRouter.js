const Router = require("express");
const router = new Router();
const authRoutes = require("./authRoutes");
const todoRoutes = require("./todoRoutes");
const schoolRoutes = require("./schoolRoutes.js/schoolRoutes");
const studentRoutes = require("./studentRoutes/studentRoutes");
const parentRoutes = require("./parentRoutes/parentRoutes");
const journeyRoutes = require("./journeyRoutes/journeyRoutes");
const luggageRoutes = require("./luggageRoutes/luggageRoutes");
const vehicleTypeRoutes = require("./vehiculeTyoeRoutes/vehiculeTypeRoutes");
const passengerLuggageLimitsIdRoutes = require("./passengerLuggageLimitsRoutes/passengerLuggageLimitsRoutes");
const affiliateRoutes = require("./affiliateRoutes/affiliateRoutes");
const complainRoutes = require("./complainRoutes/complainRoutes");
const sourceRoutes = require("./sourceRoutes/sourceRoutes");
const feedbackRoutes = require("./feedbackRoutes/feedbackRoutes");
const visitorRoutes = require("./visitorRoutes/visitorRoutes");
const emailTemplateRoutes = require("./emailTemplateRoutes/emailTemplateRoutes");
const quoteRoutes = require("./quoteRoutes/quoteRoutes");
const noteRoutes = require("./noteRoutes/noteRoutes");
const vehicleRoutes = require("./vehicleRoutes/vehicleRoutes");
const driverRoutes = require("./driverRoutes/driverRoutes");
const luxuryRoutes = require("./luxuryRoutes/luxuryRoutes");
const mileageBandRoutes = require("./mileageBandRoutes/mileageBandRoutes");
const hourlyBandRoutes = require("./hourlyBandRoutes/hourlyBandRoutes");
const waitingBandRoutes = require("./waitingBandRoutes/waitingBandRoutes");
const stopRoutes = require("./stopRoutes/stopRoutes");
const companyRoutes = require("./companyRoutes/companyRoutes");
const teamRoutes = require("./teamRoutes/teamRoutes");
const authCentralAppRoutes = require("./authCentralAppRoutes/authCentralAppRoutes");
const employeesRoutes = require("./employeeRoutes/employeeRoutes");
const employeeAttendanceRoutes = require("./employeeAttendanceRoutes/employeeAttendanceRoutes");
const studentAttendanceRoutes = require("./studentAttendanceRoutes/studentAttendanceRoute");
const groupEmployeeRoutes = require("./groupCompanyRoutes/groupCompanyRoutes");
const pricingCalendarRoutes = require("./pricingCalendarRoutes/pricingCalendarRoute");
const modeRoutes = require("./modeRoutes/modeRoutes");
const regionalPricingRoutes = require("./regionalPricingRoutes/regionalPricingRoutes");
const locationRoutes = require("./locationRoutes/locationRoutes");
const pricingPostalCodeRoutes = require("./pricingPostalCodeRoutes/pricingPostalCodeRoutes");
const forceSingleRoutes = require("./forceSingleRoutes/forceSingleRoutes");
const programmRoutes = require("./programmRoutes/programmRoutes");
const contractRoutes = require("./contractRoutes/contractRoutes");

router.use("/authSchool", schoolRoutes);
router.use("/student", studentRoutes);
router.use("/parent", parentRoutes);

router.use("/journey", journeyRoutes);

router.use("/luggage", luggageRoutes);

router.use("/vehicleType", vehicleTypeRoutes);

router.use("/passengerLuggageLimit", passengerLuggageLimitsIdRoutes);

/// FOR TEST ONLY ///
router.use("/auth", authRoutes);
router.use("/todos", todoRoutes);

/// BCT APIS ///
router.use("/affiliate", affiliateRoutes);
router.use("/complain", complainRoutes);
router.use("/source", sourceRoutes);
router.use("/feedback", feedbackRoutes);
router.use("/visitor", visitorRoutes);
router.use("/emailTemplate", emailTemplateRoutes);
router.use("/quote", quoteRoutes);
router.use("/note", noteRoutes);
router.use("/vehicle", vehicleRoutes);
router.use("/driver", driverRoutes);
router.use("/vehicleExtraLuxurys", luxuryRoutes);
router.use("/mileageBand", mileageBandRoutes);
router.use("/hourlyBand", hourlyBandRoutes);
router.use("/waitingBand", waitingBandRoutes);
router.use("/stop", stopRoutes);
router.use("/company", companyRoutes);
router.use("/team", teamRoutes);
router.use("/authCentralApp", authCentralAppRoutes);
router.use("/employees", employeesRoutes);
router.use("/employeeAttendance", employeeAttendanceRoutes);
router.use("/studentAttendance", studentAttendanceRoutes);
router.use("/groupEmployee", groupEmployeeRoutes);
router.use("/pricingCalendar", pricingCalendarRoutes);
router.use("/mode", modeRoutes);
router.use("/regionalPricing", regionalPricingRoutes);
router.use("/location", locationRoutes);
router.use("/pricingPostalCode", pricingPostalCodeRoutes);
router.use("/forceSingle", forceSingleRoutes);
router.use("/programm", programmRoutes);
router.use("/contract", contractRoutes);

module.exports = router;
