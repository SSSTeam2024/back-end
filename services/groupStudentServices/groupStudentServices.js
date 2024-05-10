const groupStudentDao = require("../../dao/groupStudentDao/groupStudentDao");
const studentDao = require("../../dao/studentDao/studentDao");
// const groupMigrationDao = require('../../dao/groupStudentDao/groupMigrationDao');
const Student = require("../../models/studentModels/student");



async function createGroupAndAssignStudent(groupData, studentIds) {
  try {
    return await groupStudentDao.createGroupAndAssignStudent(
      groupData,
      studentIds
    );
  } catch (error) {
    throw new Error("Error in group service: " + error.message);
  }
}

async function getAllGroups() {
  try {
    return await groupStudentDao.getAllGroups();
  } catch (error) {
    throw new Error("Error fetching all groups: " + error.message);
  }
}

async function updateStudent(students, group, date) {
  students.forEach(async (id) => {
    await studentDao.updateStudentGroupId(id, group._id, date);
  });
}


const addNewGroup = async (groupData) => {
  console.log(groupData);

  let group = await groupStudentDao.addNewGroup(groupData);
  let students = groupData.students;
  let date = new Date();
  console.log(students);
  console.log(typeof students);
  await updateStudent(students, group, date);
  return group;
};



async function addStudentToGroup(_id, students) {
  try {
    if (!_id) {
      throw new Error("Group ID is required");
    }

    const updatedGroup = await groupStudentDao.addStudentsToGroup(_id, students);

    // Update each student with groupId and joining date
    const updatedStudents = await Promise.all(
      students.map(async (studentId) => {
        return await Student.findByIdAndUpdate(studentId, {
          groupId: _id,
          groupJoiningDate: new Date().toISOString(),
        });
      })
    );

    return { updatedGroup, updatedStudents}; // Return both updated group and students
  } catch (error) {
    throw error;
  }
}

const getallGroupStudents = async () => {
  return await groupStudentDao.getallGroupStudent();
};

const updateGroupStudent= async (id, updateData) => {
  return await groupStudentDao.updateGroupStudent(id, updateData);
};

const getGroupStudentById = async (id) => {
  return await groupStudentDao.getGroupStudentById(id);
};

const getGroupByIdStudent = async (id_student) => {
  return await groupStudentDao.getGroupByIdEmployee(id_student);
};

const getGroupByIdSchool = async (id_school) => {
  return await groupStudentDao.getGroupByIdSchool(id_school);
};
const deleteGroupStudent = async (id) => {
  return await groupStudentDao.deleteGroupStudent(id);
};





// async function removeStudentFromGroup(groupId, studentId) {
//   try {
//       const studentInfo = await groupStudentDao.getStudentInfo(groupId, studentId);
//       if (!studentInfo) {
//           throw new Error('student information not found.');
//       }

//       // Register employee movement
//       await groupMigrationDao.registerStudentMovement(studentInfo);

//       // Remove employee from the group
//       await groupStudentDao.removeStudentFromGroup(groupId, studentId);
//   } catch (error) {
//       throw new Error('Error removing student from group: ' + error.message);
//   }
// }






module.exports = {
  getAllGroups,
  createGroupAndAssignStudent,
  addNewGroup,
  updateGroupStudent,
  getGroupStudentById,
  getGroupByIdStudent,
  getallGroupStudents,
  deleteGroupStudent,
  getGroupByIdSchool,
  // removeStudentFromGroup,
  addStudentToGroup
};