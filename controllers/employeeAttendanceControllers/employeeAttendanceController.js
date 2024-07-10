const employeeAttendanceService = require("../../services/employeeAttendanceServices/employeeAttendanceServices");

const addEmployeeAttendance = async (req, res) => {
  try {
    const { id_quote, id_employee, id_company, presence } = req.body;

    const attendance = await employeeAttendanceService.addEmployeeAttendance({
      id_quote,
      id_employee,
      id_company,
      presence,
    });
    res.json(attendance);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAttendanceById = async (req, res) => {
  try {
    const AttendanceId = req.params.id;

    const getEmployeeAttendance =
      await employeeAttendanceService.getEmployeeAttendanceById(AttendanceId);

    if (!getEmployeeAttendance) {
      return res.status(404).send("Attendance Employee not found");
    }
    res.json(getEmployeeAttendance);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAttendanceByIdEmployeeAndQuote = async (req, res) => {
  try {
    const { id_employee, id_quote } = req.body;

    const getAttendanceByIdEmployeeAndQuote =
      await employeeAttendanceService.getAttendanceByIdEmployeeAndQuote({
        id_employee,
        id_quote,
      });

    if (!getAttendanceByIdEmployeeAndQuote) {
      return res.status(404).send("Attendance Employee not found");
    }
    res.json(getAttendanceByIdEmployeeAndQuote);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAttendanceByIdCompany = async (req, res) => {
  try {
    const id_company = req.body;

    const getAttendanceByIdCompany =
      await employeeAttendanceService.getAttendanceByIdCompany(id_company);

    if (!getAttendanceByIdCompany) {
      return res.status(404).send("Attendance Employee not found");
    }
    res.json(getAttendanceByIdCompany);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAttendanceByIdEmployee = async (req, res) => {
  try {
    const id_employee = req.body;

    const getAttendanceByIdEmployee =
      await employeeAttendanceService.getAttendanceByIdEmployee(id_employee);

    if (!getAttendanceByIdEmployee) {
      return res.status(404).send("Attendance Employee not found");
    }
    res.json(getAttendanceByIdEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateEmployeeAttendance = async (req, res) => {
  try {
    const employeeAttendanceId = req.params.id;
    const { id_quote, id_employee, id_company, presence } = req.body;

    const updatedAttendance =
      await employeeAttendanceService.updateEmployeeAttendance(
        employeeAttendanceId,
        {
          id_quote,
          id_employee,
          id_company,
          presence,
        }
      );
    res.json(updatedAttendance);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteEmployeeAttendance = async (req, res) => {
  try {
    const employeeAttendanceId = req.params.id;

    const deletedemployeeAttendance =
      await employeeAttendanceService.deleteEmployeeAttendance(
        employeeAttendanceId
      );

    if (!deletedemployeeAttendance) {
      return res.status(404).send("Employee Attendance not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAttendancesByEmployeeIdsAndQuoteId = async (req, res) => {
  try {
    const { employeeIds, idQuote } = req.body;

    const getAttendances =
      await employeeAttendanceService.getAttendancesByEmployeeIdsAndQuoteId({
        employeeIds,
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
  addEmployeeAttendance,
  getAttendanceById,
  getAttendanceByIdEmployee,
  getAttendanceByIdCompany,
  updateEmployeeAttendance,
  deleteEmployeeAttendance,
  getAttendancesByEmployeeIdsAndQuoteId,
  getAttendanceByIdEmployeeAndQuote,
};
