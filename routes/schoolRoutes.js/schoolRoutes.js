const express = require('express');
const authSchool = require('../../controllers/schoolControllers/schoolControllers');

const router = express.Router();

router.post('/registerSchool', authSchool.registerSchool);
router.post('/loginSchool', authSchool.loginSchool);
router.post('/logoutSchool', authSchool.logout);
router.delete('/deleteSchool/:id', authSchool.deleteSchool);
router.put('/updateSchool/:id', authSchool.updateSchool);
router.get('/getSchool/:id', authSchool.getSchoolById);
router.get('/getAllSchools', authSchool.getAllSchools);
router.put('/updatePassword/:id', authSchool.updatePassword);
router.post('/logout/:id', authSchool.logout);
router.post('/getSchoolByToken', authSchool.getSchoolByJwtToken);
module.exports = router;