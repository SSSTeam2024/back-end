const companyDao = require("../../dao/companyDao/companyDao");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const createCompany = async (companyData, documents) => {
  let saveResult = await saveDocumentsToServer(documents);
  const hashedPassword = await bcrypt.hash(companyData.password, 10);
  return await companyDao.createCompany({
    ...companyData,
    password: hashedPassword,
  });
};

async function saveDocumentsToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    await saveFile(file.base64String, file.name, file.path);
    counter++;
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


// login school service acccount
const loginCompany = async (login, password) => {
  const company = await companyDao.findCompanyByLogin(login);

  if (!company) {
    throw new Error("company not found");
  }

  if (await bcrypt.compare(password, company.password)) {
    const accessToken = jwt.sign({ login: company.login }, "yourSecretKey");
    console.log(typeof accessToken);
    await companyDao.updateJwtToken(company._id, String(accessToken));
    let updatedCompany = await companyDao.getCompanyById(company._id);
    return updatedCompany;
  } else {
    throw new Error("Incorrect password");
  }
};

// savedocumentToserver function
// async function saveDocumentToServer(documents) {
//   await saveAdministrativeFile(documents[0].base64String, documents[0].name);
// }

// async function saveAdministrativeFile(base64String, fileName) {
//   const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, "");
//   const binaryData = Buffer.from(base64Data, "base64");
//   const filePath = "files/schoolFiles/" + fileName;
//   fs.writeFile(filePath, binaryData, "binary", (err) => {
//     if (err) {
//       console.error("Error saving the file:", err);
//     } else {
//       console.log("File saved successfully!");
//     }
//   });
// }


//forgot password
const updatePassword = async (id, password) => {
  console.log(password);
  const hashedPassword = await bcrypt.hash(password.password, 10);
  return await companyDao.updatePassword(id, hashedPassword);
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
// get Company by token
const getCompanyByToken = async (token) => {
  return await companyDao.findCompanyByToken(token);
};
//logout
const logout = async (id) => {
  return await companyDao.logout(id);
};

 

  module.exports = {createCompany,getCompanyByToken, logout, getCompanyByEmail,getCompanies,deleteCompany,getCompanyById, updateCompany, loginCompany, updatePassword}
