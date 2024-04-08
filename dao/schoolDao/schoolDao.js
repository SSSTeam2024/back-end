const School = require("../../models/schoolModels/school");

//create school
const createSchool = async (schoolData) => {
  return await School.create(schoolData);
};
// find school by login
const findSchoolByUsername = async (login) => {
  return await School.findOne({ login });
};

// find school by token
const findSchoolByToken = async (token) => {
  let api_token = token;
  return await School.findOne({ api_token });
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
const updateJwtToken = async (id, token) => {
  return await School.findByIdAndUpdate({ _id:id }, {
    $set: {
      api_token: token
    }
  });
}

  // update password
  const updatePassword = async (id, password) => {
    console.log('Hashed pwd: '+password);
    return await School.findByIdAndUpdate({ _id:id }, {
      $set: {
        password: password
      }
    });
  }

    // logout
    const logout = async (id) => {
      return await School.findByIdAndUpdate({ _id:id }, {
        $set: {
          api_token: ""
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
    updateJwtToken,
    updatePassword,
    findSchoolByToken,
    logout
};
