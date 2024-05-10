const groupStudent = require("../../models/groupStudent/groupStudent");
const Student = require("../../models/studentModels/student");

async function createGroupAndAssignStudent(groupData, studentIds) {
  try {
    const newGroup = await groupStudent.create(groupData);

    if (Array.isArray(studentIds) && studentIds.length > 0) {
      await Student.updateMany(
        { _id: { $in: studentIds } },
        { $set: { group: newGroup._id } }
      );

      await groupStudent.findByIdAndUpdate(newGroup._id, {
        $push: { students: { $each: studentIds } },
      });
    }

    return newGroup;
  } catch (error) {
    throw new Error(
      "Error creating group and assigning students: " + error.message
    );
  }
}

const addNewGroup = async (GroupData) => {
  return await groupStudent.create(GroupData);
};


async function getAllGroups() {
  try {
    // Query all groups and populate the 'students' field
    return await groupStudent.find().populate("students").populate("program").exec();
  } catch (error) {
    throw new Error("Error fetching all groups: " + error.message);
  }
}
const getallGroupStudent = async () => {
  return await groupStudent
    .find()
    .populate("students")
    .populate("program")
    .exec();
};

async function addStudentsToGroup(groupId, students) {
  try {
 
    const updatedGroup = await groupStudent.findByIdAndUpdate(
      groupId,
      {
        $push: {
            students: {
            $each: students.map((id) => ({
              _id: id,
              groupId: groupId, 
              groupJoiningDate: new Date().toISOString(), // Set joining date to current time
            })),
          },
        },
      },
      { new: true } 
    );


  } catch (error) {
   
  }
}

const getGroupStudentById = async (id) => {
  return await groupStudent.findById(id)
};

const getGroupByIdStudent = async (id_student) => {
  return await groupStudent.find(id_student);
};
const getGroupByIdSchool = async (id_school) => {
  return await groupStudent.find(id_school);
};

const updateGroupStudent = async (id, updateData) => {
  return await groupStudent.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteGroupStudent = async (id) => {
  return await groupStudent.findByIdAndDelete(id);
};

async function getActiveGroups() {
  try {
    // Query only groups with status "active" and populate the 'employees' field
    return await groupEmployee
      .find({ status: "active" })
      .populate("students")
      .exec();
  } catch (error) {
    throw new Error("Error fetching active groups: " + error.message);
  }
}

async function removeStudentFromGroup(groupId, studentId) {
  try {
      await groupStudent.findByIdAndUpdate(groupId, {
          $pull: { students: studentId }
      });
  } catch (error) {
      throw new Error('Error removing student from group: ' + error.message);
  }
}

async function getStudentInfo(groupId, studentId) {
  try {
      // Find the employee with the given _id and groupId
      const studentInfo = await Student.findOne({ _id: studentId, groupId: groupId });

      if (!studentInfo) {
          throw new Error('student not found in the group.');
      }

      return studentInfo;
  } catch (error) {
      throw new Error('Error fetching student information: ' + error.message);
  }
}



  
module.exports = {
  getActiveGroups,
  getAllGroups,
  createGroupAndAssignStudent,
  getGroupStudentById,
  addNewGroup,
  getGroupByIdSchool,
  getGroupByIdStudent,
  updateGroupStudent,
  deleteGroupStudent,
  getallGroupStudent,
  removeStudentFromGroup,
  getStudentInfo,
  addStudentsToGroup
};