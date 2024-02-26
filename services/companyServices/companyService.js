const companyDao = require("../../dao/companyDao/companyDao");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const createCompany = async (companyData, documents) => {
  console.log(companyData);
  console.log(documents);
  let saveResult = await saveDocumentsToServer(documents);
  console.log(saveResult);
  const hashedPassword = await bcrypt.hash(companyData.password, 10);
  return await companyDao.createCompany({
    ...companyData,
    password: hashedPassword,
  });
};

async function saveDocumentsToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    console.log(file);
    await saveFile(file.base64String, file.name, file.path);
    counter++;
    console.log("File number " + counter + " saved");
  }
  if (counter == documents.length) return true;
}

async function saveFile(base64String, fileName, file_path) {
  //const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, '');
  const binaryData = Buffer.from(base64String, "base64");
  const filePath = file_path + fileName;
  fs.writeFile(filePath, binaryData, "binary", (err) => {
    if (err) {
      console.error("Error saving the file:", err);
    } else {
      console.log("File saved successfully!");
    }
  });
}

const loginCompany = async (login, password) => {
  const company = await companyDao.findCompanyByLogin(login);

  if (!company) {
    throw new Error("company not found");
  }

  if (await bcrypt.compare(password, company.password)) {
    const accessToken = jwt.sign({ company: company.login }, "yourSecretKey");
    return { accessToken };
  } else {
    throw new Error("Incorrect password");
  }
};

const getCompanyById = async (id) => {
  return await companyDao.getCompanyById(id);
};
const getCompanies = async () => {
  return await companyDao.getCompanies();
};

const deleteCompany = async (id) => {
  return await companyDao.deleteCompany(id);
};

const getCompanyByEmail = async (email) => {
  return await companyDao.getCompanyByEmail(email);
};

const updateCompany = async (id, updateData) => {
  return await companyDao.updateCompany(id, updateData);
};
const updatePassword = async (id, password) => {
  console.log(password);
  const hashedPassword = await bcrypt.hash(password.password, 10);
  return await companyDao.updatePassword(id, hashedPassword);
};

module.exports = {
  createCompany,
  getCompanyByEmail,
  getCompanies,
  deleteCompany,
  getCompanyById,
  updateCompany,
  loginCompany,
  updatePassword,
};
