const express = require('express');
const mileageBandController = require('../../controllers/mileageBandController/mileageBandController');

const router = express.Router();

router.post('/newMileageBand', mileageBandController.createMileageBand);
router.get('/getAllMileageBands', mileageBandController.getMileageBands);
router.put('/updateMileageBand/:id', mileageBandController.updateMileageBand);
router.delete('/deleteMileageBand/:id', mileageBandController.deleteMileageBand);

module.exports = router;