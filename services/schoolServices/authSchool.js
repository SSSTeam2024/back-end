const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const schoolDao = require("../../dao/schoolDao/schoolDao");
const fs = require("fs");
const globalFunctions = require("../../utils/globalFunctions");
const path = require("path");

// register school service acccount
const registerSchool = async (schoolDaoData, documents) => {
  let saveResult = await saveDocumentToServer(documents);
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

async function saveDocumentToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    await saveAdministrativeFile(file.base64String, file.name);
    counter++;
  }
  if (counter == documents.length) return true;
}

async function saveAdministrativeFile(base64String, fileName) {
  if (base64String != undefined) {
    const binaryData = Buffer.from(base64String, "base64");
    const directoryPath = path.join(__dirname, "files", "schoolFiles");
    const filePath = "files/schoolFiles/" + fileName;

    await globalFunctions.ensureDirectoryExistence(directoryPath);

    fs.writeFile(filePath, binaryData, "binary", (err) => {
      if (err) {
        console.error("Error saving the file:", err);
      } else {
        console.log("File saved successfully!");
      }
    });
  }
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

const updatedSchool = async (id, updateData, documents) => {
  let saveResult = await saveDocumentToServer(documents);
  return await schoolDao.updateSchool(id, updateData);
};
// get school by id
const getSchoolById = async (id) => {
  return await schoolDao.getSchoolById(id);
};

// get school by token
const getSchoolByToken = async (token) => {
  return await schoolDao.findSchoolByToken(token);
};

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
  logout,
};
