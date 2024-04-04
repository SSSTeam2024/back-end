const appCentralApp = require("../../models/authCentralAppModels/authCentralApp");

//create AappCentralApp
const creatAappCentralApp = async (centralAppData) => {
  return await appCentralApp.create(centralAppData);
};
// find AappCentralApp by login
const findCentralAppByUsername = async (login) => {
  return await appCentralApp.findOne({ login });
};
// update AappCentralApp profile
const updateAappCentralApp = async (id, updateData) => {
  return await appCentralApp.findByIdAndUpdate(id, updateData, { new: true });
};

// find school by token
const findCentralAppByToken = async (token) => {
  let api_token = token;
  return await appCentralApp.findOne({ api_token });
};

// get CentralApp by id
const getCentralAppById = async (id) => {
  return await appCentralApp.findById(id);
};

// update password
const updatePassword = async (id, password) => {
  console.log("Hashed pwd: " + password);
  return await appCentralApp.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        password: password,
      },
    }
  );
};

const updateJwtToken = async (id, token) => {
  return await appCentralApp.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        api_token: token,
      },
    }
  );
};

// logout
const logout = async (id) => {
  return await appCentralApp.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        api_token: "",
      },
    }
  );
};
module.exports = {
  creatAappCentralApp,
  updateAappCentralApp,
  updatePassword,
  findCentralAppByUsername,
  findCentralAppByToken,
  getCentralAppById,
  updateJwtToken,
  logout,
};
