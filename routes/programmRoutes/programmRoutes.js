const express = require('express');
const programmController = require('../../controllers/programmControllers/programmControllers');

const router = express.Router();

router.post('/newProgramm', programmController.createProgramm);
router.get('/getAllProgramms', programmController.getProgramms);
// router.put('/updateQuote/:id', quoteController.updateQuote);
router.delete('/deleteProgram/:id', programmController.deleteProgram);
router.post("/sendResponse", programmController.sendResponseAPI);
router.post("/sendAdminResponse", programmController.sendResponseNoteAPI);
// router.post('/sendBookingEmail',quoteController.sendBookingEmail);

module.exports = router;