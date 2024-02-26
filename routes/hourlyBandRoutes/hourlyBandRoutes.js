const express = require('express');
const hourlyBandController = require('../../controllers/hourlyBandController/hourlyBandController');

const router = express.Router();

router.post('/newHourlyBand', hourlyBandController.createHourlyBand);
router.get('/getAllHourlyBands', hourlyBandController.getHourlyBands);
router.put('/updateHourlyBand/:id', hourlyBandController.updateHourlyBand);
router.delete('/deleteHourlyBand/:id', hourlyBandController.deleteHourlyBand);

module.exports = router;