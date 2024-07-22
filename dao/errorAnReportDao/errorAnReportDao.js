const ErrorReport = require("../../models/errorReportModel/errorReportModel");

const createErrorReport = async (defectData) => {
  return await ErrorReport.create(defectData);
};

const getErrorReports = async () => {
  return await ErrorReport.find().populate("company_id").populate("school_id");
};

const getErrorReportById = async (id) => {
  return await ErrorReport.findById(id);
};

const deleteErrorReport = async (id) => {
  return await ErrorReport.findByIdAndDelete(id);
};

const getLatestErrorReport = async () => {
  return await ErrorReport.findOne({}, {}, { sort: { _id: -1 } });
};

// const updateLocation = async (id, updateData) => {
//     return await Location.findByIdAndUpdate(id, updateData, { new: true });
//   };

const getAllErrorReportsByCompanyID = async (id) => {
  const query = {
    company_id: id,
  };

  return await ErrorReport.find(query);
};

module.exports = {
  createErrorReport,
  getAllErrorReportsByCompanyID,
  getErrorReportById,
  getLatestErrorReport,
  deleteErrorReport,
  getErrorReports,
};
