const groupEmployeeDao = require("../../dao/groupEmployeeDao/groupEmployeeDao");
const employeeDao = require("../../dao/employeeDao/employeeDao");
const groupMigrationDao = require('../../dao/groupEmployeeDao/groupMigrationDao');

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

// const addNewGroup = async (groupData) => {
//     console.log(groupData);

//    let group =  await groupEmployeeDao.addNewGroup(groupData);
//    let employees = groupData.employees;
//    console.log(employees);
//    console.log(typeof(employees));
//     await updateEmployees(employees, group);
//   return group;
// };

// async function updateEmployees(employees, group) {
//   employees.array.forEach(id => {
//     employeeDao.updateEmployeeGroupId(id, group._id);
//   });
// };

const addNewGroup = async (groupData) => {
  console.log(groupData);

  let group = await groupEmployeeDao.addNewGroup(groupData);
  let employees = groupData.employees;
  let date = new Date();
  console.log(employees);
  console.log(typeof employees);
  await updateEmployees(employees, group, date);
  return group;
};

async function updateEmployees(employees, group, date) {
  employees.forEach(async (id) => {
    await employeeDao.updateEmployeeGroupId(id, group._id, date);
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
async function removeEmployeeFromGroup(groupId, employeeId) {
  try {
    // Get employee information
    const employeeInfo = await groupEmployeeDao.getEmployeeInfo(groupId, employeeId);

    if (!employeeInfo) {
      throw new Error('Employee information not found.');
    }

    // Register employee movement
    await groupMigrationDao.registerEmployeeMovement(employeeInfo);

    // Remove employee from the group
    await groupEmployeeDao.removeEmployeeFromGroup(groupId, employeeId);
  } catch (error) {
    console.error('Error removing employee from group:', error);
    throw error;
  }
}
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
  removeEmployeeFromGroup,
};
