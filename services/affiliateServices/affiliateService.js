const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const affiliateDao = require("../../dao/affiliateDao/affiliateDao");
const emailService = require("../quoteServices/emailService");
const emailTemplatesStructure = require("../../utils/emailTemplatesStructure");
const globalFunctions = require("../../utils/globalFunctions");

const registerAffilate = async (userData, documents) => {
  let affiliate = await affiliateDao.createAffiliate(userData);
  let saveResult = await saveDocumentsToServer(documents);
  let email = await prepareAfterDemandBecomeParnterEmail(affiliate);
  await emailService.sendEmail(email);
  return affiliate;
};

async function saveDocumentsToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    console.log(file);
    await saveAdministrativeFile(file.base64String, file.name);
    counter++;
    console.log("File number " + counter + " saved");
  }
  if (counter == documents.length) return true;
}

async function saveAdministrativeFile(base64String, fileName) {
  const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, "");
  const binaryData = Buffer.from(base64Data, "base64");
  const filePath = "files/affiliateFiles/licenceFiles/" + fileName;
  await globalFunctions.ensureDirectoryExistence(
    "files/affiliateFiles/licenceFiles/"
  );
  fs.writeFile(filePath, binaryData, "binary", (err) => {
    if (err) {
      console.error("Error saving the file:", err);
    } else {
      console.log("File saved successfully!");
    }
  });
}

async function saveUpdateDocumentsToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    await saveFile(file.base64String, file.name, file.path);
    counter++;
  }
  if (counter == documents.length) return true;
}

async function saveFile(base64String, fileName, file_path) {
  if (base64String != undefined) {
    const binaryData = Buffer.from(base64String, "base64");
    const filePath = file_path + fileName;
    await globalFunctions.ensureDirectoryExistence(file_path);
    fs.writeFile(filePath, binaryData, "binary", (err) => {
      if (err) {
        console.error("Error saving the file:", err);
      } else {
        console.log("File saved successfully!");
      }
    });
  }
}

const loginAffiliate = async (login, password) => {
  const affiliate = await affiliateDao.findAffiliateByUsername(login);

  if (!affiliate) {
    throw new Error("Affiliate not found");
  }

  if (await bcrypt.compare(password, affiliate.password)) {
    const accessToken = jwt.sign({ login: affiliate.login }, "yourSecretKey");
    console.log(typeof accessToken);
    await affiliateDao.updateJwtToken(affiliate._id, String(accessToken));
    let updatedAffiliate = await affiliateDao.getAffiliateById(affiliate._id);
    return updatedAffiliate;
  } else {
    throw new Error("Incorrect password");
  }
};

const updateAffiliate = async (id, updateData, documents) => {
  let saveResult = await saveUpdateDocumentsToServer(documents);
  let affiliate = await affiliateDao.updateAffiliate(id, updateData);
  return affiliate;
};

const getAffiliateById = async (id) => {
  return await affiliateDao.getAffiliateById(id);
};

const getAffiliates = async () => {
  return await affiliateDao.getAffiliates();
};

const deleteAffiliate = async (id) => {
  return await affiliateDao.deleteAffiliate(id);
};

const getAffiliateByEmail = async (email) => {
  return await affiliateDao.getAffiliateByEmail(email);
};

const updatePassword = async (id, password) => {
  console.log(password);
  const hashedPassword = await bcrypt.hash(password.password, 10);
  return await affiliateDao.updatePassword(id, hashedPassword);
};

const updateAffiliateStatus = async (id) => {
  return await affiliateDao.updateAffiliateStatus(id);
};

const sendAcceptenceEmail = async (acceptenceData) => {
  let id = acceptenceData.id;
  let login = acceptenceData.login;
  let password = acceptenceData.password;
  let service_date = acceptenceData.service_date;
  const hashedPassword = await bcrypt.hash(password, 10);
  await affiliateDao.updateAffiliateStatus(
    id,
    login,
    hashedPassword,
    service_date
  );
  let affiliate = await affiliateDao.getAffiliateById(id);
  let url = "http://affiliate.chercheinfo.net";
  let email = await prepareAffiliateAcceptenceEmail(
    id,
    login,
    password,
    url,
    affiliate,
    service_date
  );
  await emailService.sendEmail(email);
  return "Acceptence Email sent!";
};

const sendRefuseEmail = async (acceptenceData) => {
  let id_aff = acceptenceData.id_aff;

  await affiliateDao.refuseAffiliate(id_aff);
  let affiliate = await affiliateDao.getAffiliateById(id_aff);
  let email = await prepareRefuseDemandBecomeParnterEmail(affiliate);
  await emailService.sendEmail(email);
  return "Refuse Email sent!";
};

const blockAffiliate = async (acceptenceData) => {
  let id_Affiliate = acceptenceData.id_Affiliate;
  await affiliateDao.blockAffiliate(id_Affiliate);
  return "Affiliate Blocked!";
};

async function prepareAffiliateAcceptenceEmail(
  id,
  login,
  password,
  url,
  affiliate,
  service_date
) {
  let recipient = affiliate.email;
  let vehicle_type = [];
  affiliate.vehicles.map((vehicle) => vehicle_type.push(vehicle.type));
  let coverageArea = [];
  affiliate.coverageArea.map((area) => coverageArea.push(area.placeName));
  let emailBody = emailTemplatesStructure.emailTemplates.affiliateAcceptence(
    id,
    login,
    password,
    url,
    affiliate,
    service_date,
    vehicle_type,
    coverageArea
  );
  let emailSubject = "Demand Accepted";
  let fullEmailObject = {
    to: recipient,
    subject: emailSubject,
    body: emailBody,
  };
  return fullEmailObject;
}

async function prepareAfterDemandBecomeParnterEmail(affiliate) {
  let recipient = affiliate.email;
  let selectedTemplate =
    emailTemplatesStructure.emailTemplates.becomePartnerDemand(affiliate);

  let emailBody = selectedTemplate;
  let emailSubject = "Become Partner Demand Received";
  let fullEmailObject = {
    to: recipient,
    subject: emailSubject,
    body: emailBody,
  };
  return fullEmailObject;
}

async function prepareRefuseDemandBecomeParnterEmail(affiliate) {
  let recipient = affiliate.email;
  let selectedTemplate =
    emailTemplatesStructure.emailTemplates.becomePartnerDemandRefused(
      affiliate
    );

  let emailBody = selectedTemplate;
  let emailSubject = "Become Partner Demand Refused";
  let fullEmailObject = {
    to: recipient,
    subject: emailSubject,
    body: emailBody,
  };
  return fullEmailObject;
}

//logout
const logout = async (id) => {
  return await affiliateDao.logout(id);
};

// get affiliate by token
const getAffiliateByToken = async (token) => {
  return await affiliateDao.findAffiliateByToken(token);
};

const getAllQuotesByAffiliateID = async (id) => {
  return await affiliateDao.getAllQuotesByAffiliateID(id);
};

module.exports = {
  registerAffilate,
  loginAffiliate,
  saveDocumentsToServer,
  updateAffiliate,
  getAffiliateById,
  getAffiliates,
  deleteAffiliate,
  getAffiliateByEmail,
  updatePassword,
  updateAffiliateStatus,
  sendAcceptenceEmail,
  sendRefuseEmail,
  logout,
  getAffiliateByToken,
  blockAffiliate,
  getAllQuotesByAffiliateID,
};
