const express = require('express');
const luxuryController = require('../../controllers/luxuryController/luxuryController');

const router = express.Router();

router.post('/newLuxury', luxuryController.createLuxury);
router.get('/getAllLuxuries', luxuryController.getLuxurys);
router.get('/getLuxury/:id', luxuryController.getLuxuryById);
router.put('/updateLuxury/:id', luxuryController.updateLuxury);
router.delete('/deleteLuxury/:id', luxuryController.deleteLuxury);

module.exports = router;