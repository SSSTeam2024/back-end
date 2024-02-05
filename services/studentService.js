const studentDao = require("../dao/studentDao/student.Dao");
const Parent = require("../models/parentsModel/parents");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");

// register a new student and update parent profile
const registerStudent = async (studentData, documents) => {
  try {
    console.log(studentData);
    console.log(documents);
    let saveResult = await saveDocumentToServer(documents);
    console.log(saveResult);
    const hashedPassword = await bcrypt.hash(studentData.password, 10);

    const newStudent = await studentDao.createStudent({
      ...studentData,
      password: hashedPassword,
    });

    const studentId = newStudent._id;
    await updateParentWithStudentId(studentData.parent_id, studentId);

    return newStudent;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// update the parent's profile with the student's ID
const updateParentWithStudentId = async (parentId, studentId) => {
  await Parent.findByIdAndUpdate(parentId, { $set: { student_id: studentId } });
};
// get student by id parent
const getStudentsByParentId = async (parentId) => {
  return await studentDao.getStudentByParentId(parentId);
};

// login student account
const loginStudent = async (login, password) => {
  const student = await studentDao.findStudentByLogin(login);

  if (!student) {
    throw new Error("Student not found");
  }

  if (await bcrypt.compare(password, student.password)) {
    const accessToken = jwt.sign({ login: student.login }, "yourSecretKey");
    return { accessToken };
  } else {
    throw new Error("Incorrect password");
  }
};

// function saveDocumentToServer
async function saveDocumentToServer(documents) {
  await saveAdministrativeFile(documents[0].base64String, documents[0].name);
}

async function saveAdministrativeFile(base64String, fileName) {
  const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, "");
  const binaryData = Buffer.from(base64Data, "base64");
  const filePath = "files/studentFiles/" + fileName;
  fs.writeFile(filePath, binaryData, "binary", (err) => {
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
const deleteStudent = async (id) => {
  return await studentDao.deleteStudent(id);
};
// update password
const updatePassword = async (id, password) => {
  console.log(password);
  const hashedPassword = await bcrypt.hash(password.password, 10);
  return await studentDao.updatePassword(id, hashedPassword);
};

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
  getStudentsByParentId
};
