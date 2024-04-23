const express = require('express');
const groupEmployeeController = require("../../controllers/groupEmployeController/groupEmployeeController")

const router = express.Router();

router.post('/addNewGroup', groupEmployeeController.addNewGroup);
router.delete("/deleteGroup/:id",groupEmployeeController.deleteGroupEmployee)
router.get("/getGroupByIdCompany",groupEmployeeController.getGroupByIdCompany)
router.get("/getAllGroups",groupEmployeeController.getAllGroups)
router.get("/getGroupEmployeeById/:id",groupEmployeeController.getGroupEmployeeById)
router.put("/updateGroupById/:id",groupEmployeeController.updateGroupEmployee)

router.post('/createGroupAndAssignEmployees', groupEmployeeController.createGroupAndAssignEmployees);
router.delete('/groups/:groupId/employees/:employeeId', groupEmployeeController.removeEmployeeFromGroup)

router.get('/getgroups',groupEmployeeController.getGroups)
router.post('/addEmployeesToGroup',groupEmployeeController.addEmployeesToGroup)
module.exports = router;