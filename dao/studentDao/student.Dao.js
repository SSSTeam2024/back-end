const Student = require("../../models/studentModels/student");
const Parent=require ("../../models/parentsModel/parents")

// Update the parent's profile with the student's ID
const updateParentWithStudentId = async (parentId, studentId) => {
  await Parent.findByIdAndUpdate(parentId, { $push: { students: studentId } });
};
// remove student from the parent
const removeStudentFromParent = async (parentId, studentId) => {
  await Parent.findByIdAndUpdate(
    parentId,
    { $pull: { students: studentId } },
    { new: true } 
  );
};

// Update the student's profile with the parent's ID
const updateStudentWithParentId = async (studentId, parentId) => {
  await Student.findByIdAndUpdate(studentId, { $set: { parent: parentId } });
};

const createStudent = async (studentData) => {
  const newStudent = await Student.create(studentData);
  const studentId = newStudent._id;
  await updateParentWithStudentId(studentData.parent_id, studentId);
  await updateStudentWithParentId(studentId, studentData.parent_id);
  return newStudent;
};

// find student by login
const findStudentByLogin = async (login) => {
  return await Student.findOne({ login });
};
// get all students
const getAllStudents = async () => {
  return await Student.find({});
};


// get student by id
const getStudentById = async (id) => {
  try {
    console.log("Querying database for student with ID:", id);
    const getStudent = await Student.findOne({ _id: id });
    console.log("Result from database:", getStudent);
    return getStudent;
  } catch (error) {
    throw error;
  }
};

// get student by email address
const getStudentEmail = async (email) => {
  return await Student.findOne({ email });
};
// updateStudent profile
const updateStudent = async (id, updateData) => {
  return await Student.findByIdAndUpdate(id, updateData, { new: true });
};
// delete student profile
const deleteStudent = async (id) => {
  const deletedStudent = await Student.findByIdAndDelete(id);
  if (deletedStudent) {
    await removeStudentFromParent(deletedStudent.parent, id);
  }
  return deletedStudent;
};


// get student by id parent

const getStudentByParentId = async (parentId) => {
  try {
    const student = await Student.find({ parent_id: parentId }).exec();
    return student;
  } catch (error) {
    console.error('Error in getStudentByParentId:', error);
    throw error;
  }
};

// update password
const updatePassword = async (id, password) => {
  console.log("Hashed pwd: " + password);
  return await Student.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        password: password,
      },
    }
  );
};

module.exports = {
  createStudent,
  getAllStudents,
  updatePassword,
  findStudentByLogin,
  getStudentById,
  deleteStudent,
  updateStudent,
  getStudentEmail,
  getStudentByParentId
};
