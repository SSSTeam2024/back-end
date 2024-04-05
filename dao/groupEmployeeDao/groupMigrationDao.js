const groupMigration = require('../../models/groupEmployee/groupMigration');

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

module.exports = {
  registerEmployeeMovement
};