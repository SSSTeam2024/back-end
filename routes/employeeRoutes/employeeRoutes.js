const express = require('express');
const employeeController = require("../../controllers/employeeControllers/employeeController")

const router = express.Router();

router.post('/newEmployee', employeeController.addNewEmployee);
router.get('/allEmployees', employeeController.getEmployees);
router.post("/getemployeesbyIdCompany",employeeController.getEmployeeByIdCompany)
router.get("/getEmployee/:id",employeeController.getEmployeeById)
router.post("/getEmployeeByEmail",employeeController.getEmployeeByEmail)
router.delete("/deleteEmployee/:id",employeeController.deleteEmployee)
router.put("/updateEmployee/:id",employeeController.updateEmployee)
router.post("/loginEmployee",employeeController.loginEmployee)
router.post("/logoutEmployee",employeeController.logoutEmployee)


module.exports = router;