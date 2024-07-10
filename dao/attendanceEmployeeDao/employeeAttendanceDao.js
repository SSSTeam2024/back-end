const employeeAttendance = require("../../models/attendanceEmployeeSchema/employeeAttendanceSchema");

const addEmployeeAttendance = async (employeeAttendanceData) => {
  return await employeeAttendance.create(employeeAttendanceData);
};
const getemployeeAttendanceById = async (id) => {
  return await employeeAttendance.findById(id);
};

const getAttendanceByIdEmployee = async (data) => {
  const query = {
    id_employee: data.id_employee,
    id_quote: data.id_quote,
  };
  return await employeeAttendance
    .find(query)
    .populate("id_quote")
    .populate("id_employee");
};
const getAttendanceByIdCompany = async (id_company) => {
  return await employeeAttendance
    .find(id_company)
    .populate("id_quote")
    .populate("id_employee");
};

const updateEmployeeAttendance = async (id, updateData) => {
  return await employeeAttendance.findByIdAndUpdate(id, updateData, {
    new: true,
  });
};

const deleteEmployeeAttendance = async (id) => {
  return await employeeAttendance.findByIdAndDelete(id);
};

const getAttendanceByEmployeeIdAndQuoteId = async (data) => {
  const query = {
    id_employee: data.id_employee,
    id_quote: data.id_quote,
  };
  return await employeeAttendance
    .find(query)
    .populate("id_quote")
    .populate("id_employee");
};

module.exports = {
  addEmployeeAttendance,
  getAttendanceByIdCompany,
  getemployeeAttendanceById,
  getAttendanceByIdEmployee,
  updateEmployeeAttendance,
  deleteEmployeeAttendance,
  getAttendanceByEmployeeIdAndQuoteId,
};
