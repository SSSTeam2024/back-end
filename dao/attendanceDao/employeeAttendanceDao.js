const employeeAttendance = require("../../models/attendanceSchema/employeeAttendanceSchema");

const addEmployeeAttendance = async (employeeAttendanceData) => {
  return await employeeAttendance.create(employeeAttendanceData);
};
const getemployeeAttendanceById = async (id) => {
  return await employeeAttendance.findById(id);
};

const getAttendanceByIdEmployee = async (id_employee) => {
  return await employeeAttendance.find(id_employee);
};
const getAttendanceByIdCompany = async (id_company) => {
  return await employeeAttendance.find(id_company);
};

const updateEmployeeAttendance = async (id, updateData) => {
  return await employeeAttendance.findByIdAndUpdate(id, updateData, {
    new: true,
  });
};

const deleteEmployeeAttendance = async (id) => {
  return await employeeAttendance.findByIdAndDelete(id);
};

module.exports = {
  addEmployeeAttendance,
  getAttendanceByIdCompany,
  getemployeeAttendanceById,
  getAttendanceByIdEmployee,
  updateEmployeeAttendance,
  deleteEmployeeAttendance,
};
