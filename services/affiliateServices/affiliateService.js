const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const affiliateDao = require('../../dao/affiliateDao/affiliateDao');

const registerAffilate = async (userData, documents) => {
    console.log(userData);
    console.log(documents);
    let saveResult = await saveDocumentsToServer(documents);
    console.log(saveResult);
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  return await affiliateDao.createAffiliate({ ...userData, password: hashedPassword });
};


async function saveDocumentsToServer(documents){
    let counter = 0;
    for (const file of documents){
      console.log(file);
        await saveAdministrativeFile(file.base64String, file.name);
        counter++;
        console.log('File number '+counter+' saved');
    }
    if(counter == documents.length) return true;
}

 async function saveAdministrativeFile(base64String, fileName){
    const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, '');
    const binaryData = Buffer.from(base64Data, 'base64');
    const filePath = 'files/affiliateFiles/administrativeFiles/'+fileName;
    fs.writeFile(filePath, binaryData, 'binary', (err) => {
      if (err) {
        console.error('Error saving the file:', err);
      } else {
        console.log('File saved successfully!');
      }
    });
}

const loginAffiliate = async (login, password) => {
  const affiliate = await affiliateDao.findAffiliateByLogin(login);

  if (!affiliate) {
    throw new Error('Affiliate not found');
  }

  if (await bcrypt.compare(password, affiliate.password)) {
    const accessToken = jwt.sign({ affiliate: affiliate.login }, 'yourSecretKey');
    return { accessToken };
  } else {
    throw new Error('Incorrect password');
  }
};

const updateAffiliate = async (id, updateData) => {
  return await affiliateDao.updateAffiliate(id, updateData);
};

const getAffiliateById = async (id) => {
  return await affiliateDao.getAffiliateById(id);
}

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

module.exports = {
  registerAffilate,
  loginAffiliate,
  saveDocumentsToServer,
  updateAffiliate,
  getAffiliateById,
  getAffiliates,
  deleteAffiliate,
  getAffiliateByEmail,
  updatePassword
};