const groupMigration = require('../../models/groupEmployee/groupMigration');
const Employee = require('../../models/employeeSchema/employeeSchema');

async function registerEmployeeMovement(employeeInfo) {
  try {
    const { _id: id_employee, ...rest } = employeeInfo; // Assuming _id is the employee's ID field
    const { id_group, ...dates } = rest;

    await groupMigration.create({
      id_employee,
      id_group,
      ...dates
    });

    console.log('Employee movement registered successfully.');
  } catch (error) {
    console.error('Error registering employee movement:', error);
    throw error; // Re-throw the error to handle it in the caller function
  }
}

// async function registerEmployeeMovement(employeeInfo) {
//   const { id_employee, id_group } = employeeInfo;

//   try {
//       const employee = await Employee.findById(id_employee);
//       if (!employee) {
//           throw new Error('Employee not found');
//       }

//       const joiningDate = employee.groupJoiningDate;

//       await groupMigration.create({
//           id_employee,
//           id_group,
//           joiningDate,
//           leftDate: new Date().toISOString() // Current date and time
//       });
//   } catch (error) {
//       throw new Error('Error registering employee movement: ' + error.message);
//   }
// }

module.exports = {
  registerEmployeeMovement
};