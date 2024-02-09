const Router = require('express');
const router = new Router();
const authRoutes = require('./authRoutes');
const todoRoutes = require('./todoRoutes');
const schoolRoutes= require("./schoolRoutes.js/schoolRoutes")
const studentRoutes= require("./studentRoutes/studentRoutes")
const parentRoutes= require("./parentRoutes/parentRoutes")
const journeyRoutes= require("./journeyRoutes/journeyRoutes")
const luggageRoutes= require("./luggageRoutes/luggageRoutes")
const vehicleTypeRoutes= require("./vehiculeTyoeRoutes/vehiculeTypeRoutes")
const passengerLuggageLimitsIdRoutes= require("./passengerLuggageLimitsRoutes/passengerLuggageLimitsRoutes")
const affiliateRoutes = require('./affiliateRoutes/affiliateRoutes');
const complainRoutes = require('./complainRoutes/complainRoutes');
const sourceRoutes = require('./sourceRoutes/sourceRoutes');
const feedbackRoutes = require('./feedbackRoutes/feedbackRoutes');
const visitorRoutes = require('./visitorRoutes/visitorRoutes');
const emailTemplateRoutes = require('./emailTemplateRoutes/emailTemplateRoutes');
const quoteRoutes = require('./quoteRoutes/quoteRoutes');
const noteRoutes = require('./noteRoutes/noteRoutes');
const vehicleRoutes = require('./vehicleRoutes/vehicleRoutes');
const driverRoutes = require('./driverRoutes/driverRoutes');

router.use('/authSchool',schoolRoutes);
router.use('/student',studentRoutes)
router.use('/parent',parentRoutes)

router.use('/journey',journeyRoutes)

router.use('/luggage',luggageRoutes)

router.use('/vehicleType',vehicleTypeRoutes)

router.use('/passengerLuggageLimit',passengerLuggageLimitsIdRoutes)

/// FOR TEST ONLY ///
router.use('/auth', authRoutes);
router.use('/todos', todoRoutes);

/// BCT APIS ///
router.use('/affiliate', affiliateRoutes);
router.use('/complain', complainRoutes);
router.use('/source', sourceRoutes);
router.use('/feedback', feedbackRoutes);
router.use('/visitor', visitorRoutes);
router.use('/emailTemplate', emailTemplateRoutes);
router.use('/quote', quoteRoutes);
router.use('/note', noteRoutes);
router.use('/vehicle', vehicleRoutes);
router.use('/driver', driverRoutes);

module.exports = router;