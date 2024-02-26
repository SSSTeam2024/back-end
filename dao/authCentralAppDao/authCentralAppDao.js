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

module.exports = {
  creatAappCentralApp,
  updateAappCentralApp,
  updatePassword,
  findCentralAppByUsername,
};
