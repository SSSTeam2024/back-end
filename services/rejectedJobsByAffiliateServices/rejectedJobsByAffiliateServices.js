const rejectedJobsDao = require("../../dao/rejectedJobsByAffiliateDao/rejectedJobsByAffiliateDao");

const createRejectedJobs = async (sourceData) => {
  return await rejectedJobsDao.createRejectedJobs(sourceData);
};

const getRejectedJobs = async (id) => {
  return await rejectedJobsDao.getRejectedJobs(id);
};

// const updateSource = async (id, updateData) => {
//   return await sourceDao.updateSource(id, updateData);
// };

// const deleteSource = async (id) => {
//   return await sourceDao.deleteSource(id);
// };

module.exports = {
  createRejectedJobs,
  getRejectedJobs,
  //   updateSource,
  //   deleteSource,
};
