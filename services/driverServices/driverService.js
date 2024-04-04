const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const driverDao = require("../../dao/driverDao/driverDao");

const registerDriver = async (userData, documents) => {
  console.log(userData);
  console.log(documents);
  let saveResult = await saveDocumentsToServer(documents);
  console.log(saveResult);
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  return await driverDao.createDriver({
    ...userData,
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
};
