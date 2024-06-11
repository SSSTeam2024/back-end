const affiliate = require("../../models/affiliateModels/affiliate");
const RejectedJobs = require("../../models/rejectedJobsByAffiliateModel/rejectedJobsByAffiliateModel");

const createRejectedJobs = async (sourceData) => {
  return await RejectedJobs.create(sourceData);
};

const getRejectedJobs = async (id) => {
  return await Quote.find({ "white_list.jobStatus": "Refused", affiliate: id })
    .populate("id_visitor")
    .populate("school_id")
    .populate("company_id");
};

// const updateSource = async (id, updateData) => {
//   return await Source.findByIdAndUpdate(id, updateData, { new: true });
// };

// const deleteSource = async (id) => {
//   return await Source.findByIdAndDelete(id);
// };

module.exports = {
  createRejectedJobs,
  getRejectedJobs,
  //   updateSource,
  //   deleteSource,
};
