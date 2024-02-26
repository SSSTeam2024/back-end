const express = require('express');
const sourceController = require('../../controllers/sourceController/sourceController');

const router = express.Router();

router.post('/newSource', sourceController.createSource);
router.get('/getAllSources', sourceController.getSources);
router.put('/updateSource/:id', sourceController.updateSource);
router.delete('/deleteSource/:id', sourceController.deleteSource);

module.exports = router;