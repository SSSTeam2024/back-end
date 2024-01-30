const express = require('express');
const studentController = require('../../controllers/studentControllers/studentController');

const router = express.Router();

// router.post('/register', studentController.register);
// router.get('/login', studentController.login);
// router.get('/getStudent/:id_student', studentController.getStudentByLogin);
// router.get('/getAllStudents', studentController.getStudentByLogin);
// router.delete('/todos/:id', studentController.deleteTodo);
router.post('/newStudent', studentController.addStudent);

module.exports = router;