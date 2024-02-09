const express = require('express');
const waitingBandController = require('../../controllers/waitingBandController/waitingBandController');

const router = express.Router();

router.post('/newWaitingBand', waitingBandController.createWaitingBand);
router.get('/getAllWaitingBands', waitingBandController.getWaitingBands);
router.put('/updateWaitingBand/:id', waitingBandController.updateWaitingBand);
router.delete('/deleteWaitingBand/:id', waitingBandController.deleteWaitingBand);

module.exports = router;