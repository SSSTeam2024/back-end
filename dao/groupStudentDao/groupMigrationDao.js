const groupMigration = require('../../models/groupStudent/groupMigration');
const Student = require('../../models/studentModels/student');

async function registerStudentMovement(studentInfo) {
  try {
    const { _id: id_student, ...rest } = studentInfo; // Assuming _id is the student's ID field
    const { id_group, ...dates } = rest;

    await groupMigration.create({
        id_student,
      id_group,
      ...dates
    });

    console.log('Student movement registered successfully.');
  } catch (error) {
    console.error('Error registering student movement:', error);
    throw error; // Re-throw the error to handle it in the caller function
  }
}

module.exports = {
    registerStudentMovement
};