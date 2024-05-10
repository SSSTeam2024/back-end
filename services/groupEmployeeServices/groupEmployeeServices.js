const groupEmployeeDao = require("../../dao/groupEmployeeDao/groupEmployeeDao");
const employeeDao = require("../../dao/employeeDao/employeeDao");
const groupMigrationDao = require('../../dao/groupEmployeeDao/groupMigrationDao');
const GroupMigration = require ("../../models/groupEmployee/groupMigration")
const Employee = require("../../models/employeeSchema/employeeSchema");



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
  let group = await groupEmployeeDao.addNewGroup(groupData);
  let employees = groupData.employees;
  let date = new Date();
  await updateEmployees(employees, group, date);
  return group;
};

async function updateEmployees(employees, group, date) {
  employees.forEach(async (id) => {
    await employeeDao.updateEmployeeGroupId(id, group._id, date);
  });
}

// async function addEmployeesToGroup(_id, employees) {
//   try {
   
//     if (!_id) {
//       throw new Error("group Id is required");
//     }

    
//     const UpdatedGroupEmployees = await groupEmployeeDao.addEmployeesToGroup(
//       _id,
//       employees
//     );
//     return UpdatedGroupEmployees;
//   } catch (error) {
//     throw error;
//   }
// }
async function addEmployeesToGroup(_id, employees) {
  try {
    if (!_id) {
      throw new Error("Group ID is required");
    }

    const updatedGroup = await groupEmployeeDao.addEmployeesToGroup(_id, employees);

    // Update each employee with groupId and joining date
    const updatedEmployees = await Promise.all(
      employees.map(async (employeeId) => {
        return await Employee.findByIdAndUpdate(employeeId, {
          groupId: _id,
          groupJoiningDate: new Date().toISOString(),
        });
      })
    );

    return { updatedGroup, updatedEmployees }; // Return both updated group and employees
  } catch (error) {
    throw error;
  }
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
      const employeeInfo = await groupEmployeeDao.getEmployeeInfo(groupId, employeeId);
      if (!employeeInfo) {
          throw new Error('Employee information not found.');
      }

      // Register employee movement
      await groupMigrationDao.registerEmployeeMovement(employeeInfo);

      // Remove employee from the group
      await groupEmployeeDao.removeEmployeeFromGroup(groupId, employeeId);
  } catch (error) {
      throw new Error('Error removing employee from group: ' + error.message);
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
  addEmployeesToGroup
};