const School = require('../../models/schoolModels/school');

//create school
const createSchool = async (schoolData) => {
  return await School.create(schoolData);
};
// find school by login
const findSchoolByUsername = async (login) => {
  return await School.findOne({ login });
};
// delete school 

const deleteSchool = async (id) => {
  return await School.findByIdAndDelete(id);
};

// updateSchool profile
const updateSchool= async (id, updateData) => {
  return await School.findByIdAndUpdate(id, updateData, { new: true });
};

// get school by id
const getSchoolById = async (id) => {
  return await School.findById(id);
}

// get all schools
const getAllSchools = async () => {
  return await School.find({});
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
    createSchool,
    findSchoolByUsername,
    deleteSchool,
    updateSchool,
    getSchoolById,
    getAllSchools,
    updatePassword
};