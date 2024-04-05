const groupEmployeeService = require("../../services/groupEmployeeServices/groupEmployeeServices");

async function createGroupAndAssignEmployees(req, res) {
  const { groupData, employeeIds } = req.body;

  try {
    const newGroup = await groupEmployeeService.createGroupAndAssignEmployees(
      groupData,
      employeeIds
    );
    return res.status(200).json({
      _id: newGroup._id,
      groupName: newGroup.groupName,
      startPoint: newGroup.startPoint,
      dateStart: newGroup.dateStart,
      timeStart: newGroup.timeStart,
      Destination: newGroup.Destination,
      dateEnd: newGroup.dateEnd,
      timeEnd: newGroup.timeEnd,
      status: newGroup.status,
      id_company: newGroup.id_company,
      employees: newGroup.employees,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
}

async function getGroups(req, res) {
  try {
    const groups = await groupEmployeeService.getAllGroups();
    return res.status(200).json(groups);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
}

const addNewGroup = async (req, res) => {
  try {
    const {
      groupName,
      note,
      startPoint,
      dateStart,
      timeStart,
      Destination,
      dateEnd,
      timeEnd,
      status,
      id_company,
      program,

      employees,
    } = req.body;
    console.log(req.body);
    const group = await groupEmployeeService.addNewGroup({
      groupName,
      note,
      startPoint,
      dateStart,
      timeStart,
      Destination,
      dateEnd,
      timeEnd,
      status,
      id_company,
      program,

      employees,
    });
    res.json(group);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateGroupEmployee = async (req, res) => {
  try {
    const {
      groupName,
      note,
      startPoint,
      dateStart,
      timeStart,
      Destination,
      dateEnd,
      timeEnd,
      status,
      id_company,
    } = req.body;

    const updatedgroup = await groupEmployeeService.updateGroupEmployee({
      groupName,
      note,
      startPoint,
      dateStart,
      timeStart,
      Destination,
      dateEnd,
      timeEnd,
      status,
      id_company,
    });
    res.json(updatedgroup);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getGroupEmployeeById = async (req, res) => {
  try {
    const GroupEmployeeId = req.params.id;

    const getGroupEmployeeId =
      await employeeAttendanceService.getGroupEmployeeById(GroupEmployeeId);

    if (!getGroupEmployeeId) {
      return res.status(404).send("Group Employee not found");
    }
    res.json(getGroupEmployeeId);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getAllGroups = async (req, res) => {
  try {
    const groups = await groupEmployeeService.getallGroupEmployee();
    res.json(groups);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getGroupByIdCompany = async (req, res) => {
  try {
    const id_company = req.body;

    const getGroupByIdCompany = await groupEmployeeService.getGroupByIdCompany(
      id_company
    );

    if (!getGroupByIdCompany) {
      return res.status(404).send("Group Employee not found");
    }
    res.json(getGroupByIdCompany);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const deleteGroupEmployee = async (req, res) => {
  try {
    const groupEmployeeId = req.params.id;

    const deletedGroupEmployee = await groupEmployeeService.deleteGroupEmployee(
      groupEmployeeId
    );

    if (!deletedGroupEmployee) {
      return res.status(404).send("Group Employee not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
async function removeEmployeeFromGroup(req, res) {
  try {
    const groupId = req.params.groupId;
   
    const employeeId = req.params.employeeId;
    console.log('groupId:', groupId);
console.log('employeeId:', employeeId);

    await groupEmployeeService.removeEmployeeFromGroup(groupId, employeeId);

    res.status(204).send(); // No content - Employee successfully removed from group
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

module.exports = {
  getGroups,
  createGroupAndAssignEmployees,
  addNewGroup,
  getAllGroups,
  getGroupEmployeeById,
  updateGroupEmployee,
  deleteGroupEmployee,
  getGroupByIdCompany,
  removeEmployeeFromGroup,
};
