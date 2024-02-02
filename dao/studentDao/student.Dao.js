const Student = require('../../models/studentModels/student');

const createStudent = async (studentData) => {
    return await Student.create(studentData);
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
    return await Student.findById(id);
  }
  // get student by email address
  const getStudentEmail = async (email) => {
    return await Student.findOne({ email });
  }
// updateStudent profile
  const updateStudent= async (id, updateData) => {
    return await Student.findByIdAndUpdate(id, updateData, { new: true });
  };
  // delete student profile
  const deleteStudent = async (id) => {
    return await Student.findByIdAndDelete(id);
  };
  

  // const getAllStudentsByCorporateId = async (corporateId) => {

  // }
  
  // const getAllStudentsByParentId = async (parentId) => {
    
  // }
  
  // update password
  const updatePassword = async (id, password) => {
    console.log('Hashed pwd: '+password);
    return await Student.findByIdAndUpdate({ _id:id }, {
      $set: {
        password: password
      }
    });
  }


module.exports = {
    createStudent,
    getAllStudents,
    updatePassword,
    findStudentByLogin,
    getStudentById,
    deleteStudent,
    updateStudent,
    getStudentEmail
};