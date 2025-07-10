const App = require("../../models/appModel/appModel");

const createApp = async (appData) => {
  return await App.create(appData);
};

const getApps = async () => {
  return await App.find();
};

// const getAppById = async (id) => {
//   return await App.findById(id);
// }

const updateApp = async (id, updateData) => {
  return await App.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteApp = async (id) => {
  return await App.findByIdAndDelete(id);
};
// const getAppsByIdCompany = async (id_corporate) => {
//   return await App.find({id_corporate});
// }
module.exports = {
  createApp,
  getApps,
  //   getAppById,
  updateApp,
  deleteApp,
  //   getAppsByIdCompany
};
