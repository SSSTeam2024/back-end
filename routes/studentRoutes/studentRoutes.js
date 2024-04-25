const express = require('express');
const studentController = require('../../controllers/studentControllers/studentController');

const router = express.Router();

router.get('/getAllStudents', studentController.getAllStudents);
router.get('/getStudent/:email', studentController.getStudentByEmail);
router.post('/registerStudent', studentController.registerStudent);
router.post('/login', studentController.login);
router.delete('/deleteStudent/:id', studentController.deleteStudent);
router.put('/updateStudent/:id', studentController.updateProfile);
router.put('/updatePassword/:id', studentController.updatePassword);
router.get('/getStudentById/:id', studentController.getStudentById);
router.get('/getStudentByIdParent/:id', studentController.getStudentByIdParent);
router.post("/logout/:id", studentController.logout);
router.post("/getStudentbyIdSchool",studentController.getStudentByIdSchool)
module.exports = router;