const express = require('express');
const vehicleController = require('../../controllers/vehicleControllers/vehicleController');

const router = express.Router();

router.post('/newVehicle', vehicleController.addNewVehicle);
router.put('/updateVehicle/:id', vehicleController.updateVehicleById);
router.get('/getVehicle/:id', vehicleController.getVehicleById);
router.get('/getAllVehicles', vehicleController.getAllVehicles);
router.delete('/deleteVehicle/:id', vehicleController.deleteVehicleById);
module.exports = router;
