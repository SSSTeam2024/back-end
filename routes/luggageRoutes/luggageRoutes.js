const express = require('express');
const LuggageController = require('../../controllers/luggageControllers/luggageControllers');


const router = express.Router();

router.post('/newLuggage', LuggageController.createLuggage);
router.put('/updateLuggage/:id', LuggageController.updateLuggage);
router.delete('/deleteLuggage/:id', LuggageController.deleteLuggage);
router.get('/getAllLuggages', LuggageController.getLuggages);
router.get('/getLuggage/:id', LuggageController.getLuggageById);
module.exports = router;