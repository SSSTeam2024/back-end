const groupEmployeeDao = require("../../dao/groupEmployeeDao/groupEmployeeDao");
const employeeDao = require("../../dao/employeeDao/employeeDao");

async function createGroupAndAssignEmployees(groupData, employeeIds) {
  try {
    return await groupEmployeeDao.createGroupAndAssignEmployees(
      groupData,
      employeeIds
    );
  } catch (error) {
    throw new Error("Error in group service: " + error.message);
  }
}

async function getAllGroups() {
  try {
    return await groupEmployeeDao.getAllGroups();
  } catch (error) {
    throw new Error("Error fetching all groups: " + error.message);
  }
}

const addNewGroup = async (groupData) => {
  console.log(groupData);

  let group = await groupEmployeeDao.addNewGroup(groupData);
  let employees = groupData.employees;
  console.log(employees);
  console.log(typeof employees);
  await updateEmployees(employees, group);
  return group;
};

async function updateEmployees(employees, group) {
  employees.forEach(async (id) => {
    await employeeDao.updateEmployeeGroupId(id, group._id);
  });
}

const getallGroupEmployee = async () => {
  return await groupEmployeeDao.getallGroupEmployee();
};

const updateGroupEmployee = async (id, updateData) => {
  return await groupEmployeeDao.updateGroupEmployee(id, updateData);
};

const getGroupEmployeeById = async (id) => {
  return await groupEmployeeDao.getGroupEmployeeById(id);
};

const getGroupByIdEmployee = async (id_employee) => {
  return await groupEmployeeDao.getGroupByIdEmployee(id_employee);
};

const getGroupByIdCompany = async (id_company) => {
  return await groupEmployeeDao.getGroupByIdCompany(id_company);
};
const deleteGroupEmployee = async (id) => {
  return await groupEmployeeDao.deleteGroupEmployee(id);
};

module.exports = {
  getAllGroups,
  createGroupAndAssignEmployees,
  addNewGroup,
  getallGroupEmployee,
  getGroupEmployeeById,
  getGroupByIdEmployee,
  updateGroupEmployee,
  deleteGroupEmployee,
  getGroupByIdCompany,
};
