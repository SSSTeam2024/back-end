const employeeAttendanceDao = require("../../dao/attendanceEmployeeDao/employeeAttendanceDao");

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

const getAttendancesByEmployeeIdsAndQuoteId = async (attendanceData) => {
  let attendances = [];
  let counter = 0;
  for (let element of attendanceData.employeeIds) {
    counter++;
    let attendance =
      await employeeAttendanceDao.getAttendanceByEmployeeIdAndQuoteId({
        id_employee: element.id_employee,
        id_quote: attendanceData.idQuote,
      });

    attendances.push(attendance[0]);
  }
  if (counter === attendanceData.employeeIds.length) {
    return attendances;
  }
};

module.exports = {
  addEmployeeAttendance,
  updateEmployeeAttendance,
  getAttendanceByIdCompany,
  getEmployeeAttendanceById,
  getAttendanceByIdEmployee,
  deleteEmployeeAttendance,
  getAttendancesByEmployeeIdsAndQuoteId,
};
