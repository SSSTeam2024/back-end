const studentAttendanceServices = require("../../services/studentAttendanceServices/studentAttendanceServices");

const addStudentAttendance = async (req, res) => {
  try {
    const { id_quote, id_student, id_school, presence } = req.body;

    const attendance = await studentAttendanceServices.addStudentAttendance({
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

const createMultipleStudentsAttendances = async (req, res) => {
  try {
    const { attendances } = req.body;

    const attendance =
      await studentAttendanceServices.createMultipleStudentsAttendances(
        attendances
      );
    res.json(attendance);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getStudentAttendanceById = async (req, res) => {
  try {
    const AttendanceId = req.params.id;

    const getStudentAttendance =
      await studentAttendanceServices.getStudentAttendanceById(AttendanceId);

    if (!getStudentAttendance) {
      return res.status(404).send("Attendance Student not found");
    }
    res.json(getStudentAttendance);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAttendanceByIdStudentAndQuote = async (req, res) => {
  try {
    const { id_student, id_quote } = req.body;

    const getAttendanceByIdStudentAndQuote =
      await studentAttendanceServices.getAttendanceByIdStudentAndQuote({
        id_student,
        id_quote,
      });

    if (!getAttendanceByIdStudentAndQuote) {
      return res.status(404).send("Attendance Student not found");
    }
    res.json(getAttendanceByIdStudentAndQuote);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAttendanceByIdSchool = async (req, res) => {
  try {
    const id_student = req.body;

    const getAttendanceByIdSchool =
      await studentAttendanceServices.getAttendanceByIdSchool(id_student);

    if (!getAttendanceByIdSchool) {
      return res.status(404).send("Attendance Student not found");
    }
    res.json(getAttendanceByIdSchool);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAttendanceByIdStudent = async (req, res) => {
  try {
    const id_student = req.body;

    const getAttendanceByIdStudent =
      await studentAttendanceServices.getAttendanceByIdStudent(id_student);

    if (!getAttendanceByIdStudent) {
      return res.status(404).send("Attendance Student not found");
    }
    res.json(getAttendanceByIdStudent);
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
      await studentAttendanceServices.updateStudentAttendance(
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

    const deleteStudentAttendance =
      await studentAttendanceServices.deleteStudentAttendance(
        studentAttendanceId
      );

    if (!deleteStudentAttendance) {
      return res.status(404).send("Employee Student not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAttendancesByStudentIdsAndQuoteId = async (req, res) => {
  try {
    const { studentIds, idQuote } = req.body;

    const getAttendances =
      await studentAttendanceServices.getAttendancesByStudentIdsAndQuoteId({
        studentIds,
        idQuote,
      });

    if (!getAttendances) {
      return res.status(404).send("Attendances not found");
    }
    res.json(getAttendances);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
module.exports = {
  addStudentAttendance,
  getStudentAttendanceById,
  getAttendanceByIdStudent,
  getAttendanceByIdSchool,
  updateStudentAttendance,
  deleteStudentAttendance,
  getAttendancesByStudentIdsAndQuoteId,
  getAttendanceByIdStudentAndQuote,
  createMultipleStudentsAttendances,
};
