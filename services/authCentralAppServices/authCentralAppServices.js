const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const centralAppDao = require("../../dao/authCentralAppDao/authCentralAppDao");
const fs = require("fs");

// register CentralApp service acccount
const registerCentralApp = async (centralAppData, documents) => {
  console.log("centralAppDao:", centralAppData);
  let saveResult = await saveDocumentToServer(documents);
  console.log(saveResult);
  const hashedPassword = await bcrypt.hash(centralAppData.password, 10);
  return await centralAppDao.creatAappCentralApp({
    ...centralAppData,
    password: hashedPassword,
  });
};

// login CentralApp service acccount
const loginCentralApp = async (login, password) => {
  const centralApp = await centralAppDao.findCentralAppByUsername(login);

  if (!centralApp) {
    throw new Error("CentralApp not found");
  }

  if (await bcrypt.compare(password, centralApp.password)) {
    const accessToken = jwt.sign({ login: centralApp.login }, "yourSecretKey");
    return { accessToken, centralApp };
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
  const filePath = "files/centralAppFiles/" + fileName;
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
  return await centralAppDao.updatePassword(id, hashedPassword);
};

// update CentralApp account

const updatedCentralApp = async (id, updateData) => {
  return await centralAppDao.updateAappCentralApp(id, updateData);
};

module.exports = {
  registerCentralApp,
  loginCentralApp,
  saveDocumentToServer,
  updatePassword,
  updatedCentralApp,
};
