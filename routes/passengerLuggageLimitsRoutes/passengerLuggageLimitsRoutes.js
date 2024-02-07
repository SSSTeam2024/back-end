const express = require('express');
const passengerLuggageLimitsController = require('../../controllers/passengerLuggageLimitsControllers/passengerLuggageLimitsControllers');


const router = express.Router();

router.post('/newPassengerLuggageLimit', passengerLuggageLimitsController.createPassengerLuggageLimits);
router.put('/updatePassengerLuggageLimit/:id', passengerLuggageLimitsController.updatePassengerLuggageLimits);
router.delete('/deletePassengerLuggageLimit/:id', passengerLuggageLimitsController.deletePassengerLuggageLimits);
router.get('/getAllPassengerLuggageLimits', passengerLuggageLimitsController.getPassengerLuggageLimits);
router.get('/getPassengerLuggageLimitsById/:id', passengerLuggageLimitsController.getPassengerLuggageLimitsById);
module.exports = router;