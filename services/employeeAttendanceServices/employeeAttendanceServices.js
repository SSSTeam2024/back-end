const employeeAttendanceDao = require("../../dao/attendanceDao/employeeAttendanceDao");

const addEmployeeAttendance = async (attendanceData) => {
  console.log(attendanceData);
  return await employeeAttendanceDao.addEmployeeAttendance(attendanceData);
};

const updateEmployeeAttendance = async (id, updateData) => {
  return await employeeAttendanceDao.updateEmployeeAttendance(id, updateData);
};

const getEmployeeAttendanceById = async (id) => {
  return await employeeAttendanceDao.getemployeeAttendanceById(id);
};

const getAttendanceByIdEmployee = async (id_employee) => {
  return await employeeAttendanceDao.getAttendanceByIdEmployee(id_employee);
};

const getAttendanceByIdCompany = async (id_company) => {
  return await employeeAttendanceDao.getAttendanceByIdCompany(id_company);
};
const deleteEmployeeAttendance = async (id) => {
  return await employeeAttendanceDao.deleteEmployeeAttendance(id);
};

module.exports = {
  addEmployeeAttendance,
  updateEmployeeAttendance,
  getAttendanceByIdCompany,
  getEmployeeAttendanceById,
  getAttendanceByIdEmployee,
  deleteEmployeeAttendance,
};
