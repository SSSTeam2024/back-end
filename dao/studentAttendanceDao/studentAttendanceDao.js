const studentAttendance = require("../../models/studentAttendanceSchema/studentAttendanceSchema");

const addStudentAttendance = async (studentAttendanceData) => {
  return await studentAttendance.create(studentAttendanceData);
};
const getStudentAttendanceById = async (id) => {
  return await studentAttendance.findById(id);
};

const getAttendanceByIdStudentAndQuote = async (data) => {
  const query = {
    id_student: data.id_student,
    id_quote: data.id_quote,
  };
  return await studentAttendance
    .find(query)
    .populate("id_quote")
    .populate("id_student");
};
const getAttendanceByIdSchool = async (id_school) => {
  return await studentAttendance
    .find(id_school)
    .populate("id_quote")
    .populate("id_student");
};

const getAttendanceByIdStudent = async (id_student) => {
  return await studentAttendance
    .find(id_student)
    .populate("id_quote")
    .populate("id_student");
};

const updateStudentAttendance = async (id, updateData) => {
  return await studentAttendance.findByIdAndUpdate(id, updateData, {
    new: true,
  });
};

const deleteStudentAttendance = async (id) => {
  return await studentAttendance.findByIdAndDelete(id);
};

const getAttendanceByStudentIdAndQuoteId = async (data) => {
  const query = {
    id_student: data.id_student,
    id_quote: data.id_quote,
  };
  return await studentAttendance
    .find(query)
    .populate("id_quote")
    .populate("id_student");
};

module.exports = {
  addStudentAttendance,
  getAttendanceByIdSchool,
  getStudentAttendanceById,
  getAttendanceByIdStudent,
  updateStudentAttendance,
  deleteStudentAttendance,
  getAttendanceByStudentIdAndQuoteId,
  getAttendanceByIdStudentAndQuote,
};
