const studentAttendance = require("../../models/studentAttendanceSchema/studentAttendanceSchema");

const addStudentAttendance = async (studentAttendanceData) => {
  return await studentAttendance.create(studentAttendanceData);
};
const getStudentAttendanceById = async (id) => {
  return await studentAttendance.findById(id);
};

const getAttendanceByIdStudent = async (id_student) => {
  return await studentAttendance.find(id_student);
};
const getAttendanceByIdSchool = async (id_school) => {
  return await studentAttendance.find(id_school);
};

const updateStudentAttendance = async (id, updateData) => {
  return await studentAttendance.findByIdAndUpdate(id, updateData, {
    new: true,
  });
};

const deleteStudentAttendance = async (id) => {
  return await studentAttendance.findByIdAndDelete(id);
};

module.exports = {
  addStudentAttendance,
  getAttendanceByIdSchool,
  getStudentAttendanceById,
  getAttendanceByIdStudent,
  updateStudentAttendance,
  deleteStudentAttendance,
};
