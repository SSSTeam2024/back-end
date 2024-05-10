const groupStudentService = require("../../services/groupStudentServices/groupStudentServices");

async function createGroupAndAssignStudents(req, res) {
  const { groupData, studentIds } = req.body;

  try {
    const newGroup = await groupStudentService.createGroupAndAssignStudent(
      groupData,
      studentIds
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
      id_school: newGroup.id_school,
      students: newGroup.students,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
}

async function getGroups(req, res) {
  try {
    const groups = await groupStudentService.getAllGroups();
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
      student_number,
      id_school,
      program,
      students,
    } = req.body;
    console.log(req.body);
    const group = await groupStudentService.addNewGroup({
      groupName,
      note,
      startPoint,
      dateStart,
      timeStart,
      Destination,
      dateEnd,
      timeEnd,
      status,
      student_number,
      id_school,
      program,

      students,
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
      student_number,
      id_school,
    } = req.body;

    const updatedgroup = await groupStudentService.updateGroupStudent({
      groupName,
      note,
      startPoint,
      dateStart,
      timeStart,
      Destination,
      dateEnd,
      timeEnd,
      status,
      student_number,
      id_school,
    });
    res.json(updatedgroup);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};


async function addStudentsToGroup(req, res) {
  try {
    const { _id } = req.body;
    const { students } = req.body;

    if (!(_id && Array.isArray(students) && students.length > 0)) {
      // Improved validation (check if students array is not empty)
      return res.status(400).json({ message: "Invalid request parameters" });
    }

    const updatedStudentGroup = await groupStudentService.addStudentToGroup(_id, students);
    return res.status(200).json(updatedStudentGroup);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

const getGroupStudentById = async (req, res) => {
  try {
    const GroupStudentId = req.params.id;

    const getGroupStudentId =
      await groupStudentService.getGroupStudentById(GroupStudentId);

    if (!getGroupStudentId) {
      return res.status(404).send("Group Employee not found");
    }
    res.json(getGroupStudentId);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};


const getAllGroups = async (req, res) => {
  try {
    const groups = await groupStudentService.getallGroupStudents();
    res.json(groups);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getGroupByIdSchool = async (req, res) => {
  try {
    const id_school = req.body;

    const getGroupByIdSchool = await groupStudentService.getGroupByIdSchool(
        id_school
    );

    if (!getGroupByIdSchool) {
      return res.status(404).send("Group Student not found");
    }
    res.json(getGroupByIdSchool);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};


const deleteGroupStudent = async (req, res) => {
  try {
    const groupStudentId = req.params.id;

    const deletedGroupStudent = await groupStudentService.deleteGroupStudent(
        groupStudentId
    );

    // await groupStudentService.removeStudentFromGroup()

    if (!deletedGroupStudent) {
      return res.status(404).send("Group student not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};


// async function removeStudentFromGroup(req, res) {
//   try {
//       const groupId = req.params.groupId;
//       const studentId = req.params.studentId;

//       await groupStudentService.removeStudentFromGroup(groupId, studentId);

//       res.status(204).send(); // No content - Employee successfully removed from group
//   } catch (error) {
//       console.error('Error removing STUDENT from group:', error);
//       res.status(500).send(error.message);
//   }
// }

module.exports = {
  getGroups,
  // removeStudentFromGroup,
  addNewGroup,
  getAllGroups,
  deleteGroupStudent,
  updateGroupEmployee,
  getGroupByIdSchool,
  getGroupStudentById,
  addStudentsToGroup,
  createGroupAndAssignStudents
};