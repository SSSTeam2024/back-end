const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const schoolDao = require("../../dao/schoolDao/schoolDao");
const fs = require("fs");

// register school service acccount
const registerSchool = async (schoolDaoData,documents) => {
  console.log("schoolDaoData:", schoolDaoData);
  let saveResult = await saveDocumentToServer(documents);
  console.log(saveResult);
  const hashedPassword = await bcrypt.hash(schoolDaoData.password, 10);
  return await schoolDao.createSchool({
    ...schoolDaoData,
    password: hashedPassword,
  });
};

// login school service acccount
const loginSchool = async (login, password) => {
  const school = await schoolDao.findSchoolByUsername(login);

  if (!school) {
    throw new Error("School not found");
  }

  if (await bcrypt.compare(password, school.password)) {
    const accessToken = jwt.sign({ login: school.login }, "yourSecretKey");
    console.log(typeof accessToken);
    await schoolDao.updateJwtToken(school._id, String(accessToken));
    let updatedSchool = await schoolDao.getSchoolById(school._id);
    return updatedSchool;
  } else {
    throw new Error("Incorrect password");
  }
};

// savedocumentToserver function
async function saveDocumentToServer(documents) {
  await saveAdministrativeFile(documents[0].base64String, documents[0].name);
}

async function saveAdministrativeFile(base64String, fileName) {
  const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, "");
  const binaryData = Buffer.from(base64Data, "base64");
  const filePath = "files/schoolFiles/" + fileName;
  fs.writeFile(filePath, binaryData, "binary", (err) => {
    if (err) {
      console.error("Error saving the file:", err);
    } else {
      console.log("File saved successfully!");
    }
  });
}
//forgot password
const updatePassword = async (id, password) => {
  console.log(password);
  const hashedPassword = await bcrypt.hash(password.password, 10);
  return await schoolDao.updatePassword(id, hashedPassword);
};

// delete school

const deleteSchool = async (id) => {
  return await schoolDao.deleteSchool(id);
};

// update school account

const updatedSchool = async (id, updateData) => {
  return await schoolDao.updateSchool(id, updateData);
};
// get school by id
const getSchoolById = async (id) => {
  return await schoolDao.getSchoolById(id);
}

// get school by token
const getSchoolByToken = async (token) => {
  return await schoolDao.findSchoolByToken(token);
}

// get all schools
const getSchools = async () => {
  return await schoolDao.getAllSchools();
};

//logout
const logout = async (id) => {
  return await schoolDao.logout(id);
};

module.exports = {
  registerSchool,
  loginSchool,
  saveDocumentToServer,
  updatePassword,
  deleteSchool,
  updatedSchool,
  getSchoolById,
  getSchools,
  getSchoolByToken,
  logout
};