const express = require('express');
const parentController = require('../../controllers/parentsControllers/parentsControllers');

const router = express.Router();

router.get('/getAllParents', parentController.getAllParents);
router.get('/getParent/:email', parentController.getParentByEmail);
router.post('/registerParent', parentController.registerParent);
router.post('/login', parentController.login);
router.delete('/deleteParent/:id', parentController.deleteParent);
router.put('/updateParent/:id', parentController.updateProfile);
router.put('/updatePassword/:id', parentController.updatePassword);
router.get('/getParentById/:id', parentController.getParentById);
router.post('/logout', parentController.logout);
router.get('/getParentByStudentId/:id', parentController.getParentByStudentId);
module.exports = router;