const express = require("express");
const employeeAttendanceController = require("../../controllers/employeeAttendanceControllers/employeeAttendanceController");

const router = express.Router();

router.post(
  "/addEmployeeAttendance",
  employeeAttendanceController.addEmployeeAttendance
);
router.get(
  "/getAttendanceById/:id",
  employeeAttendanceController.getAttendanceById
);
router.post(
  "/getAttendanceByIdEmployeeAndQuote",
  employeeAttendanceController.getAttendanceByIdEmployeeAndQuote
);
router.post(
  "/getAttendanceByIdEmployee",
  employeeAttendanceController.getAttendanceByIdEmployee
);
router.post(
  "/getAttendanceByIdCompany",
  employeeAttendanceController.getAttendanceByIdCompany
);
router.put(
  "/updateEmployeeAttendanceById/:id",
  employeeAttendanceController.updateEmployeeAttendance
);
router.delete(
  "/deleteEmployeeAttendanceById/:id",
  employeeAttendanceController.deleteEmployeeAttendance
);

router.post(
  "/getAttendancesByEmployeeIdsAndQuoteId",
  employeeAttendanceController.getAttendancesByEmployeeIdsAndQuoteId
);

router.post(
  "/createMultipleEmployeesAttendances",
  employeeAttendanceController.createMultipleEmployeesAttendances
);

module.exports = router;
