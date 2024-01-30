const studentDao = require('../dao/studentDao/student.Dao');

const createStudent = async (todoData) => {
  return await studentDao.createStudent(todoData);
};

const getStudents = async () => {
  return await studentDao.getAllStudents();
};

const updateStudent = async (id, updateData) => {
  return await studentDao.updateStudentByLogin(id, updateData);
};

const deleteStudent = async (id) => {
  return await studentDao.deleteStudentByLogin(id);
};
const addStudent = async (studentData) => {
  try {
    const savedStudent = await studentDao.addStudent(studentData);
    return savedStudent;
  } catch (error) {
    throw error;
  }
};
module.exports = {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent,
    addStudent
};


