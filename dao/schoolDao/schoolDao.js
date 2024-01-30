const School = require('../../models/schoolModels/school');

const createSchool = async (schoolData) => {
  return await School.create(schoolData);
};

const findSchoolByUsername = async (username) => {
  return await School.findOne({ username });
};

module.exports = {
    createSchool,
    findSchoolByUsername,
};