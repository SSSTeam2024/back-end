const express = require('express');
const vehicleTypeController = require('../../controllers/vehiculeTypeControllers/vehiculeTypeControllers');


const router = express.Router();

router.post('/newVehicleType', vehicleTypeController.createVehicleType);
router.put('/updateVehicleType/:id', vehicleTypeController.updateVehicleType);
router.delete('/deleteVehicleType/:id', vehicleTypeController.deleteVehicleType);
router.get('/getAllVehiclesTypes', vehicleTypeController.getVehicleTypes);
router.get('/getVehiclesType/:id', vehicleTypeController.getVehicleTypeById); 
module.exports = router;