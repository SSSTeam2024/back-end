const express = require('express');
const complainController = require('../../controllers/complainControllers/complainController');

const router = express.Router();

router.post('/newComplain', complainController.addNewComplain);
router.post('/response', complainController.respondToComplain);
router.put('/updateComplain/:id', complainController.updateComplainById);
router.get('/getComplain/:id', complainController.getComplainById);
router.get('/getAllComplains', complainController.getAllComplains);
router.delete('/deleteComplain/:id', complainController.deleteComplainById);
router.put('/updateToPushed', complainController.updateComplainToPushed);
router.put('/updateToArchived', complainController.updateComplainToArchived);
router.post('/getComplainByIdCompany',complainController.getComplainByIdCompany)

module.exports = router;