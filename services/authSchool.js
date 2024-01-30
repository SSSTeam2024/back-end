const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const schoolDao = require('../dao/schoolDao/schoolDao');

const registerSchool = async (schoolDaoData) => {
    console.log('schoolDaoData:', schoolDaoData);
  const hashedPassword = await bcrypt.hash(schoolDaoData.password, 10);
  return await schoolDao.createSchool({ ...schoolDaoData, password: hashedPassword });
};

const loginSchool = async (username, password) => {
    const user = await userDao.findSchoolByUsername(username);
  
    if (!user) {
      throw new Error('School not found');
    }
  
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = jwt.sign({ username: user.username }, 'yourSecretKey');
      return { accessToken, user }; 
    } else {
      throw new Error('Incorrect password');
    }
  };
  

module.exports = {
    registerSchool,
  loginSchool,
};
