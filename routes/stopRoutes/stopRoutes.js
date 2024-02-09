const express = require('express');
const stopController = require('../../controllers/stopController/stopController');

const router = express.Router();

router.post('/newStop', stopController.createStop);
router.delete('/deleteStop/:id', stopController.deleteStop);

module.exports = router;