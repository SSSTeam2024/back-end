const express = require('express');
const groupStudentController = require("../../controllers/groupStudentController/groupStudentController")

const router = express.Router();

router.post('/addNewGroup', groupStudentController.addNewGroup);
router.delete("/deleteGroup/:id",groupStudentController.deleteGroupStudent)
router.get("/getStudentByIdSchool",groupStudentController.getGroupByIdSchool)
router.get("/getAllGroups",groupStudentController.getAllGroups)
router.get("/getGroupStudentById/:id",groupStudentController.getGroupStudentById)
router.put("/updateGroupById/:id",groupStudentController.updateGroupEmployee)

router.post('/createGroupAndAssignStudent', groupStudentController.createGroupAndAssignStudents);
// router.delete('/groups/:groupId/students/:studentId', groupStudentController.removeStudentFromGroup)

router.get('/getgroups',groupStudentController.getGroups)
router.post('/addStudentToGroup',groupStudentController.addStudentsToGroup)
module.exports = router;