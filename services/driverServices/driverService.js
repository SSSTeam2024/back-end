const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const driverDao = require("../../dao/driverDao/driverDao");
const globalFunctions = require("../../utils/globalFunctions");
const PasswordResetVerificationDao = require("../../dao/passwordResetVerificationDao/passwordResetVerificationDao");
const driverEmailTemplates = require("../../utils/driverEmailTemplates");
const driverEmailService = require("./driverEmailService");

const registerDriver = async (userData, documents) => {
  let saveResult = await saveDocumentsToServer(documents);
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  return await driverDao.createDriver({
    ...userData,
    password: hashedPassword,
  });
};

async function saveDocumentsToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    await saveFile(file.base64String, file.name, file.path);
    counter++;
    console.log("File number " + counter + " saved");
  }
  if (counter == documents.length) return true;
}

async function saveFile(base64String, fileName, file_path) {
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

const loginDriver = async (email, password) => {
  const driver = await driverDao.findDriverByLogin(email);

  if (!driver) {
    throw new Error("Driver not found");
  }

  if (await bcrypt.compare(password, driver.password)) {
    const accessToken = jwt.sign({ driver: driver.username }, "yourSecretKey");
    await driverDao.updateJwtToken(driver._id, String(accessToken));
    let updatedDriver = await driverDao.getDriverById(driver._id);
    return updatedDriver;
  } else {
    throw new Error("Incorrect password");
  }
};

const updateDriver = async (id, updateData) => {
  return await driverDao.updateDriver(id, updateData);
};

const getDriverById = async (id) => {
  return await driverDao.getDriverById(id);
};

const getDrivers = async () => {
  return await driverDao.getDrivers();
};

const deleteDriver = async (id) => {
  return await driverDao.deleteDriver(id);
};

const getDriverByEmail = async (email) => {
  return await driverDao.getDriverByEmail(email);
};

const updatePassword = async (id, password) => {
  console.log(password);
  const hashedPassword = await bcrypt.hash(password.password, 10);
  return await driverDao.updatePassword(id, hashedPassword);
};

const logout = async (id) => {
  return await driverDao.logout(id);
};

const getDriverByToken = async (token) => {
  return await driverDao.findDriverByToken(token);
};

const generateCodeAndSendEmail = async (
  driverId,
  expires_at_date,
  expires_at_time
) => {
  let driver = await driverDao.getDriverById(driverId);

  let verificationCode = Math.floor(100000 + Math.random() * 900000);
  console.log("verificationCode", verificationCode);

  let verifCode = {
    user_id: driverId,
    user_role: "Driver",
    verification_code: verificationCode,
    expires_at_date: expires_at_date,
    expires_at_time: expires_at_time,
    verification_status: "Not verified",
  };

  let code = await PasswordResetVerificationDao.createPasswordVerificationCode(
    verifCode
  );
  console.log("created code", code);

  let emailBody =
    driverEmailTemplates.driverEmailTemplates.reset_password_verification_code(
      driver.account_name /*"Carter"*/,
      verificationCode
    );
  let emailSubject = "Reset your password";
  let fullEmailObject = {
    to: driver.email /*"mouafekhedfi@gmail.com"*/,
    subject: emailSubject,
    body: emailBody,
  };

  let result = await driverEmailService.sendVerificationCodeEmail(
    fullEmailObject
  );

  return result;
};

module.exports = {
  registerDriver,
  loginDriver,
  saveDocumentsToServer,
  updateDriver,
  getDriverById,
  getDrivers,
  deleteDriver,
  getDriverByEmail,
  updatePassword,
  logout,
  getDriverByToken,
  generateCodeAndSendEmail,
};
