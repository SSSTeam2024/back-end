const express = require("express");
const employeeController = require("../../controllers/employeeControllers/employeeController");

const router = express.Router();

router.post("/newEmployee", employeeController.addNewEmployee);
router.get("/allEmployees", employeeController.getEmployees);
router.post(
  "/getemployeesbyIdCompany",
  employeeController.getEmployeeByIdCompany
);
router.get("/getEmployee/:id", employeeController.getEmployeeById);
router.post("/getEmployeeByEmail", employeeController.getEmployeeByEmail);
router.delete("/deleteEmployee/:id", employeeController.deleteEmployee);
router.patch("/updateEmployee/:id", employeeController.updateEmployee);
router.post("/loginEmployee", employeeController.loginEmployee);
router.post("/logoutEmployee/:id", employeeController.logoutEmployee);
router.delete(
  "/employees/:employeeId/groups/:groupId",
  employeeController.removeEmployeeFromGroup
);

router.post("/update-employees-stops", employeeController.updateEmployeesStops);
//** */
router.post(
  "/send-verification-code",
  employeeController.generateVerificationCodeAndSendViaEmail
);

//** */
router.put("/update-employee-password/:id", employeeController.updatePassword);

module.exports = router;
