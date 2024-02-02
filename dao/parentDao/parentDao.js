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
    return await Parent.findById(id);
  }
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


module.exports = {
    createParent,
    findParentByLogin,
    getAllParents,
    getParentById,
    getParentEmail,
    deleteParent,
    updateParent,
    updatePassword
    
};