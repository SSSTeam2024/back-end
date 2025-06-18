const express = require("express");
const studentAttendanceController = require("../../controllers/studentAttendanceControllers/studentAttendanceController");

const router = express.Router();

router.post(
  "/addStudentAttendance",
  studentAttendanceController.addStudentAttendance
);
router.get(
  "/getAttendanceById/:id",
  studentAttendanceController.getStudentAttendanceById
);
router.get(
  "/getAttendanceByIdStudent",
  studentAttendanceController.getAttendanceByIdStudent
);
router.get(
  "/getAttendanceByIdSchool",
  studentAttendanceController.getAttendanceByIdSchool
);
router.put(
  "/updateStudentAttendanceById/:id",
  studentAttendanceController.updateStudentAttendance
);
router.delete(
  "/deleteStudentAttendanceById/:id",
  studentAttendanceController.deleteStudentAttendance
);
router.post(
  "/getAttendanceByIdStudentAndQuote",
  studentAttendanceController.getAttendanceByIdStudentAndQuote
);
router.post(
  "/getAttendancesByStudentIdsAndQuoteId",
  studentAttendanceController.getAttendancesByStudentIdsAndQuoteId
);
module.exports = router;
