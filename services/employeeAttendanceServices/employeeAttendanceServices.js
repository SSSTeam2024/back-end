const employeeAttendanceDao = require("../../dao/attendanceEmployeeDao/employeeAttendanceDao");

const addEmployeeAttendance = async (attendanceData) => {
  return await employeeAttendanceDao.addEmployeeAttendance(attendanceData);
};

const createMultipleEmployeesAttendances = async (attendanceData) => {
  let saved_attendances = [];
  let counter = 0;
  for (let attendance of attendanceData) {
    counter++;
    let saved_attendance = await employeeAttendanceDao.addEmployeeAttendance(
      attendance
    );
    saved_attendances.push(saved_attendance);
  }
  if (counter === saved_attendances.length) {
    return saved_attendances;
  }
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

const getAttendanceByIdEmployeeAndQuote = async (attendanceData) => {
  return await employeeAttendanceDao.getAttendanceByIdEmployee(attendanceData);
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
  getAttendanceByIdEmployeeAndQuote,
  createMultipleEmployeesAttendances,
};
