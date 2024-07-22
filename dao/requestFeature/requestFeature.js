const RequestFeature = require("../../models/requestFeatureModel/requestFeatureModel");

const createRequestFeature = async (defectData) => {
  return await RequestFeature.create(defectData);
};

const getRequestFeatures = async () => {
  return await RequestFeature.find()
    .populate("company_id")
    .populate("school_id");
};

const getRequestFeatureById = async (id) => {
  return await RequestFeature.findById(id);
};

const deleteRequestFeature = async (id) => {
  return await RequestFeature.findByIdAndDelete(id);
};

const getLatestRequestFeature = async () => {
  return await RequestFeature.findOne({}, {}, { sort: { _id: -1 } });
};

// const updateLocation = async (id, updateData) => {
//     return await Location.findByIdAndUpdate(id, updateData, { new: true });
//   };

const getAllRequestedFeaturesByCompanyID = async (id) => {
  const query = {
    company_id: id,
  };

  return await RequestFeature.find(query);
};

const getAllRequestedFeaturesBySchoolID = async (id) => {
  const query = {
    school_id: id,
  };

  return await RequestFeature.find(query);
};

module.exports = {
  createRequestFeature,
  getRequestFeatureById,
  getRequestFeatures,
  deleteRequestFeature,
  getLatestRequestFeature,
  getAllRequestedFeaturesByCompanyID,
  getAllRequestedFeaturesBySchoolID,
};
