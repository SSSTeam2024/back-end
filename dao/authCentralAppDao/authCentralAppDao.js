const CentralApp = require('../../models/authCentralAppModels/authCentralApp');

//create centralApp
const createCentralApp = async (centralAppData) => {
  return await CentralApp.create(centralAppData);
};

// update centralApp profile
const updateSchool= async (id, updateData) => {
  return await School.findByIdAndUpdate(id, updateData, { new: true });
};

  // update password
  const updatePassword = async (id, password) => {
    console.log('Hashed pwd: '+password);
    return await School.findByIdAndUpdate({ _id:id }, {
      $set: {
        password: password
      }
    });
  }


module.exports = {
    createCentralApp,
    findSchoolByUsername,
    deleteSchool,
    updateSchool,
    updatePassword
};