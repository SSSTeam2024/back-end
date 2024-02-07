const express = require('express');
const journeyController = require('../../controllers/journeyControllers/journeyControllers');


const router = express.Router();

router.post('/newJourney', journeyController.createJourney);
router.put('/updateJourney/:id', journeyController.updateJourney);
router.delete('/deleteJouney/:id', journeyController.deleteJouney);
router.get('/getAllJourneys', journeyController.getJourneys);
router.get('/getJourney/:id', journeyController.getJourneyById);
module.exports = router;