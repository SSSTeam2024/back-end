const parentDao = require("../../dao/parentDao/parentDao");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const createParent = async (studentData) => {
  return await parentDao.createParent(studentData);
};
// register a new parent
const registerParent = async (parentData, documents) => {
  console.log(parentData);
  console.log(documents);
  let saveResult = await saveDocumentToServer(documents);
  console.log(saveResult);
  const hashedPassword = await bcrypt.hash(parentData.password, 10);
  return await parentDao.createParent({
    ...parentData,
    password: hashedPassword,
  });
};

// login parent account
const loginParent = async (login, password) => {
  const parent = await parentDao.findParentByLogin(login);

  if (!parent) {
    throw new Error("Parent not found");
  }

  if (await bcrypt.compare(password, parent.password)) {
    const accessToken = jwt.sign({ login: parent.login }, "yourSecretKey");
    return { accessToken };
  } else {
    throw new Error("Incorrect password");
  }
};

// function saveDocumentToServer
async function saveDocumentToServer(documents) {
  await saveAdministrativeFile(documents[0].base64String, documents[0].name);
}

async function saveAdministrativeFile(base64String, fileName) {
  const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, "");
  const binaryData = Buffer.from(base64Data, "base64");
  const filePath = "files/parentFiles/" + fileName;
  fs.writeFile(filePath, binaryData, "binary", (err) => {
    if (err) {
      console.error("Error saving the file:", err);
    } else {
      console.log("File saved successfully!");
    }
  });
}
// get all parents
const getParents = async () => {
  return await parentDao.getAllParents();
};
// get parent by id
const getParentById = async (id) => {
  return await parentDao.getParentById(id);
};
// get parent by email address
const getParentByEmail = async (email) => {
  return await parentDao.getParentEmail(email);
};
// udpate parent
const updatedParent = async (id, updateData) => {
  return await parentDao.updateParent(id, updateData);
};
//delete parent
const deleteParent = async (id) => {
  return await parentDao.deleteParent(id);
};
// update password
const updatePassword = async (id, password) => {
  console.log(password);
  const hashedPassword = await bcrypt.hash(password.password, 10);
  return await parentDao.updatePassword(id, hashedPassword);
};

// get parent by student id

const getParentByStudentId = async (studentId) => {
  return await parentDao.getParentByStudentId(studentId);
};

module.exports = {
  registerParent,
  getParents,
  getParentByEmail,
  updatedParent,
  deleteParent,
  getParentById,
  saveDocumentToServer,
  updatePassword,
  createParent,
  loginParent,
  getParentByStudentId,
};
