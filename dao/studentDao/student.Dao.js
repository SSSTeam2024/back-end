const Student = require('../../models/studentModels/student');

const createStudent = async (studentData) => {
    return await Student.create(studentData);
  };

  const getAllStudents = async () => {
    return await Student.find({});
  };
  // const getStudentByEmail = async (email) => {

  // }

  const getStudentByLogin = async (id) => {
    return await Student.findOne({ id });
  };

  // const getAllStudentsByCorporateId = async (corporateId) => {

  // }
  
  // const getAllStudentsByParentId = async (parentId) => {
    
  // }

  const updateStudentByLogin = async (id, updatedData) => {
    return await Student.findOneAndUpdate({ id }, updatedData, { new: true });
  };
  
  const deleteStudentByLogin = async (id) => {
    return await Student.findOneAndDelete({ id });
  };

  const addStudent = async (studentData) => {
    try {
      const newStudent = new Student(studentData);
      const savedStudent = await newStudent.save();
      return savedStudent;
    } catch (error) {
      console.error("Error adding student:", error);
      throw error;
    }
  };
  

module.exports = {
    createStudent,
    getAllStudents,
    getStudentByLogin,
    deleteStudentByLogin,
    updateStudentByLogin,
    addStudent
};