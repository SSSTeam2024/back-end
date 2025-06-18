const studentAttendanceDao = require("../../dao/studentAttendanceDao/studentAttendanceDao");

const addStudentAttendance = async (attendanceData) => {
  return await studentAttendanceDao.addStudentAttendance(attendanceData);
};

const createMultipleStudentsAttendances = async (attendanceData) => {
  let saved_attendances = [];
  let counter = 0;
  for (let attendance of attendanceData) {
    counter++;
    let saved_attendance = await studentAttendanceDao.addStudentAttendance(
      attendance
    );
    saved_attendances.push(saved_attendance);
  }
  if (counter === saved_attendances.length) {
    return saved_attendances;
  }
};

const updateStudentAttendance = async (id, updateData) => {
  return await studentAttendanceDao.updateStudentAttendance(id, updateData);
};

const getStudentAttendanceById = async (id) => {
  return await studentAttendanceDao.getStudentAttendanceById(id);
};

const getAttendanceByIdStudent = async (id_student) => {
  return await studentAttendanceDao.getAttendanceByIdStudent(id_student);
};

const getAttendanceByIdStudentAndQuote = async (attendanceData) => {
  return await studentAttendanceDao.getAttendanceByIdStudentAndQuote(
    attendanceData
  );
};

const getAttendanceByIdSchool = async (id_school) => {
  return await studentAttendanceDao.getAttendanceByIdSchool(id_school);
};
const deleteStudentAttendance = async (id) => {
  return await studentAttendanceDao.deleteStudentAttendance(id);
};

const getAttendancesByStudentIdsAndQuoteId = async (attendanceData) => {
  let attendances = [];
  let counter = 0;
  for (let element of attendanceData.studentIds) {
    counter++;
    let attendance =
      await studentAttendanceDao.getAttendanceByStudentIdAndQuoteId({
        id_student: element.id_student,
        id_quote: attendanceData.idQuote,
      });

    attendances.push(attendance[0]);
  }
  if (counter === attendanceData.studentIds.length) {
    return attendances;
  }
};

module.exports = {
  addStudentAttendance,
  updateStudentAttendance,
  getAttendanceByIdSchool,
  getStudentAttendanceById,
  getAttendanceByIdStudent,
  deleteStudentAttendance,
  getAttendancesByStudentIdsAndQuoteId,
  getAttendanceByIdStudentAndQuote,
  createMultipleStudentsAttendances,
};
