const studentAttendanceService = require("../../services/studentAttendanceServices/studentAttendanceServices");

const addStudentAttendance = async (req, res) => {
  try {
    const { id_quote, id_student, id_school, presence } = req.body;

    const attendance = await studentAttendanceService.addStudentAttendance({
      id_quote,
      id_student,
      id_school,
      presence,
    });
    res.json(attendance);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAttendanceById = async (req, res) => {
  try {
    const AttendanceId = req.params.id;

    const getstudentAttendance =
      await studentAttendanceService.getStudentAttendanceById(AttendanceId);

    if (!getstudentAttendance) {
      return res.status(404).send("Attendance student not found");
    }
    res.json(getstudentAttendance);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAttendanceByIdStudent = async (req, res) => {
  try {
    const id_student = req.body;

    const getAttendanceByIdstudent =
      await studentAttendanceService.getAttendanceByIdStudent(id_student);

    if (!getAttendanceByIdstudent) {
      return res.status(404).send("Attendance student not found");
    }
    res.json(getAttendanceByIdstudent);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAttendanceByIdSchool = async (req, res) => {
  try {
    const id_company = req.body;

    const getAttendanceByIdCompany =
      await studentAttendanceService.getAttendanceByIdSchool(id_company);

    if (!getAttendanceByIdCompany) {
      return res.status(404).send("Attendance student not found");
    }
    res.json(getAttendanceByIdCompany);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateStudentAttendance = async (req, res) => {
  try {
    const studentAttendanceId = req.params.id;
    const { id_quote, id_student, id_school, presence } = req.body;

    const updatedAttendance =
      await studentAttendanceService.updateStudentAttendance(
        studentAttendanceId,
        {
          id_quote,
          id_student,
          id_school,
          presence,
        }
      );
    res.json(updatedAttendance);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteStudentAttendance = async (req, res) => {
  try {
    const studentAttendanceId = req.params.id;

    const deletedstudentAttendance =
      await studentAttendanceService.deleteStudentAttendance(
        studentAttendanceId
      );

    if (!deletedstudentAttendance) {
      return res.status(404).send("student Attendance not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  addStudentAttendance,
  getAttendanceById,
  getAttendanceByIdStudent,
  getAttendanceByIdSchool,
  updateStudentAttendance,
  deleteStudentAttendance,
};
