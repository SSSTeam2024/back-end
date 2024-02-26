const studentAttendanceDao = require("../../dao/studentAttendanceDao/studentAttendanceDao");

const addStudentAttendance = async (attendanceData) => {
  console.log(attendanceData);
  return await studentAttendanceDao.addStudentAttendance(attendanceData);
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

const getAttendanceByIdSchool = async (id_school) => {
  return await studentAttendanceDao.getAttendanceByIdSchool(id_school);
};
const deleteStudentAttendance = async (id) => {
  return await studentAttendanceDao.deleteStudentAttendance(id);
};

module.exports = {
  addStudentAttendance,
  updateStudentAttendance,
  getAttendanceByIdSchool,
  getStudentAttendanceById,
  getAttendanceByIdStudent,
  deleteStudentAttendance,
};
