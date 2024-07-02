const studentDao = require("../../dao/studentDao/student.Dao");
const Parent = require("../../models/parentsModel/parents");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const Student = require("../../models/studentModels/student");
const GroupMigrationStudent = require("../../models/groupStudent/groupMigrationStudent");
const GroupStudent = require("../../models/groupStudent/groupStudent");
const globalFunctions = require("../../utils/globalFunctions");

// register a new student and update parent profile
const registerStudent = async (studentData, documents) => {
  try {
    console.log("Registering student with data:", studentData);
    console.log("Documents:", documents);
    let saveResult = await saveDocumentToServer(documents);
    console.log("Save result:", saveResult);
    const hashedPassword = await bcrypt.hash(studentData.password, 10);

    const newStudent = await studentDao.createStudent({
      ...studentData,
      password: hashedPassword,
    });

    const studentId = newStudent._id;
    console.log("New student ID:", studentId);
    await updateParentWithStudentId(studentData.parent_id, studentId);
    console.log("Parent updated with student ID.");

    return newStudent;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// update the parent's profile with the student's ID
const updateParentWithStudentId = async (parentId, studentId) => {
  await Parent.findByIdAndUpdate(parentId, {
    $push: { student_id: studentId },
  });
};

// get student by id parent
const getStudentsByParentId = async (studentId) => {
  return await studentDao.getStudentByParentId(studentId);
};

// login student account
const loginStudent = async (email, password) => {
  const student = await studentDao.findStudentByLogin(email);

  if (!student) {
    throw new Error("Student not found");
  }

  if (await bcrypt.compare(password, student.password)) {
    const accessToken = jwt.sign(
      { student: student.username },
      "yourSecretKey"
    );

    await studentDao.updateJwtToken(student._id, String(accessToken));

    let updatedStudent = await studentDao.getStudentById(student._id);

    return updatedStudent;
  } else {
    throw new Error("Incorrect password");
  }
};

// function saveDocumentToServer
async function saveDocumentToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    console.log(file);
    await saveAdministrativeFile(file.base64String, file.name, file.path);
    counter++;
    console.log("File number " + counter + " saved");
  }
  if (counter == documents.length) return true;
}

async function saveAdministrativeFile(base64String, fileName, filePath) {
  //const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, '');
  const binaryData = Buffer.from(base64String, "base64");
  const fullFilePath = filePath + fileName;
  await globalFunctions.ensureDirectoryExistence(filePath);
  fs.writeFile(fullFilePath, binaryData, "binary", (err) => {
    if (err) {
      console.error("Error saving the file:", err);
    } else {
      console.log("File saved successfully!");
    }
  });
}

// get all students
const getStudents = async () => {
  return await studentDao.getAllStudents();
};
// get student by id
const getStudentById = async (id) => {
  return await studentDao.getStudentById(id);
};
// get student by email address
const getStudentByEmail = async (email) => {
  return await studentDao.getStudentEmail(email);
};
// udpate student
const updatedStudent = async (id, updateData) => {
  return await studentDao.updateStudent(id, updateData);
};
//delete student
const deleteStudent = async (idstudent) => {
  return await studentDao.deleteStudent(idstudent);
};
// update password
const updatePassword = async (id, password) => {
  console.log(password);
  const hashedPassword = await bcrypt.hash(password.password, 10);
  return await studentDao.updatePassword(id, hashedPassword);
};

const getStudentByIdSchool = async (idSchool) => {
  return await studentDao.getStudentByIdSchool(idSchool);
};

const logout = async (id) => {
  return await studentDao.logout(id);
};

const updateStudentStops = async (studentList) => {
  console.log("studentList service", studentList);

  let completionCounter = 0;

  let updatedStudents = [];
  for (let student of studentList) {
    let updatedStudent = await studentDao.updateStudentStop(student);
    completionCounter++;
    updatedStudents.push(updatedStudent);
  }

  if (completionCounter === studentList.length) {
    return updatedStudents;
  }
};

async function removeStudentFromGroup(studentId, groupId) {
  const student = await Student.findById(studentId);

  if (!student) {
    throw new Error("student not found");
  }

  const group = await GroupStudent.findById(groupId).populate("students");

  if (!group) {
    throw new Error("Group not found");
  }

  // Create a GroupMigration document first
  const leavingDate = new Date().toISOString();
  const joiningDate = student.groupJoiningDate;
  const migration = await new GroupMigrationStudent({
    studentId,
    groupId,
    joiningDate,
    leftDate: leavingDate,
  }).save();

  // Remove the student from the group's students array
  group.students.pull(studentId);

  // Set the student's groupId and stop_point to null
  student.groupId = null;
  student.stop_point = null; // Assuming stop_point should also be null

  // Save the updated student and group documents
  await Promise.all([student.save(), group.save()]);

  return { student, group, migration };
}

module.exports = {
  registerStudent,
  getStudents,
  updatedStudent,
  deleteStudent,
  loginStudent,
  saveDocumentToServer,
  getStudentById,
  getStudentByEmail,
  updatePassword,
  getStudentsByParentId,
  getStudentByIdSchool,
  logout,
  updateStudentStops,
  removeStudentFromGroup,
};
