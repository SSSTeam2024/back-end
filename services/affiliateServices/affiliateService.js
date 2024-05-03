const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const affiliateDao = require("../../dao/affiliateDao/affiliateDao");
const fs = require("fs");
const { calculateProgress } = require("../../utils/calculateProgress");


// register affiliate service acccount
const registerAffiliate = async (affiliateDaoData,documents) => {
  console.log("affiliateDaoData:", affiliateDaoData);
  let saveResult = await saveDocumentToServer(documents);
  console.log(saveResult);
  const hashedPassword = await bcrypt.hash(affiliateDaoData.password, 10);
  return await affiliateDao.createAffiliate({
    ...affiliateDaoData,
    password: hashedPassword,
  });
};

// login affiliate service acccount
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

// savedocumentToserver function
async function saveDocumentToServer(documents) {
  await saveAdministrativeFile(documents[0].base64String, documents[0].name);
}

async function saveAdministrativeFile(base64String, fileName) {
  if (!base64String) {
    console.error("Base64 string is undefined.");
    return;
  }

  const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, "");
  const binaryData = Buffer.from(base64Data, "base64");
  const filePath = "files/affiliateFiles/" + fileName;

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
  return await affiliateDao.updatePassword(id, hashedPassword);
};

// delete affilite

const deleteAffiliate = async (id) => {
  return await affiliateDao.deleteAffiliate(id);
};

// update affilite account

// const updatedAffiliate = async (id, updateData) => {
//   return await affiliateDao.updateAffiliate(id, updateData);
// };

const updatedAffiliate = async (id, updateData) => {
  const updatedAffiliateData = await affiliateDao.updateAffiliate(id, updateData);
  console.log("Services", updatedAffiliateData)
  // const progress = calculateProgress(updatedAffiliateData);
  // await affiliateDao.updateAffiliate(id, { progress });
  return updatedAffiliateData;
};
// get school by id
const getAffiliateById = async (id) => {
  return await affiliateDao.getAffiliateById(id);
}

// get affiliate by token
const getAffiliateByToken = async (token) => {
  return await affiliateDao.findAffiliateByToken(token);
}

// get all affiliates
const getAffiliates = async () => {
  return await affiliateDao.getAllAffiliates();
};

//logout
const logout = async (id) => {
  return await affiliateDao.logout(id);
};

module.exports = {
 getAffiliateById,
  getAffiliateByToken,
  saveDocumentToServer,
  updatePassword,
  deleteAffiliate,
  updatedAffiliate,
  loginAffiliate,
  registerAffiliate,
  getAffiliates,
  logout
};
