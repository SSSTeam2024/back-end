const Parent = require('../../models/parentsModel/parents');

const createParent = async (studentData) => {
    return await Parent.create(studentData);
  };
  // find Parent by login
  const findParentByLogin = async (login) => {
    return await Parent.findOne({ login });
  };
// get all Parents
  const getAllParents = async () => {
    return await Parent.find({});
  };
// get Parent by id
const getParentById = async (id) => {
  try {
    console.log("Querying database for parent with ID:", id);
    const getParent = await Parent.findOne({ _id: id });
    console.log("Result from database:", getParent);
    return getParent;
  } catch (error) {
    throw error;
  }
};
  // get Parent by email address
  const getParentEmail = async (email) => {
    return await Parent.findOne({ email });
  }
// update Parent profile
  const updateParent= async (id, updateData) => {
    return await Parent.findByIdAndUpdate(id, updateData, { new: true });
  };
  // delete Parent profile
  const deleteParent = async (id) => {
    return await Parent.findByIdAndDelete(id);
  };
  
  // update password
  const updatePassword = async (id, password) => {
    console.log('Hashed pwd: '+password);
    return await Parent.findByIdAndUpdate({ _id:id }, {
      $set: {
        password: password
      }
    });
  }

  // get parent by student id

  const getParentByStudentId = async (studentId) => {
    try {
      const parents = await Parent.find({ student_ids: { $in: [studentId] } }).exec();
      return parents;
    } catch (error) {
      console.error('Error in getParentByStudentId:', error);
      throw error;
    }
  };


module.exports = {
    createParent,
    findParentByLogin,
    getAllParents,
    getParentById,
    getParentEmail,
    deleteParent,
    updateParent,
    updatePassword,
    getParentByStudentId
    
};