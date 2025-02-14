const termsConditionComponentDao = require("../../dao/termsConditionComponentDao/termsConditionComponentDao");

const createTermsConditions = async (termsConditionData) => {
  try {
    return await termsConditionComponentDao.createTermsCondition(
      termsConditionData
    );
  } catch (error) {
    console.error("Service Error:", error);
    throw new Error("Failed to create Terms Condition");
  }
};

const getTermsCondition = async () => {
  // try {
  //   console.log("services", termsConditionComponentDao.getTermsCondition);
  //   return await termsConditionComponentDao.getTermsCondition;
  // } catch (error) {
  //   console.error("Service Error:", error);
  //   throw new Error("Failed to get All Terms Condition");
  // }
  return await termsConditionComponentDao.getTermsCondition();
};

const updateTermsCondition = async (id, updateData) => {
  try {
    return await termsConditionComponentDao.updateTermsCondition(
      id,
      updateData
    );
  } catch (error) {
    console.error("Service Error:", error);
    throw new Error("Failed to update Terms Condition");
  }
};

const deleteTermsCondition = async (id) => {
  return await termsConditionComponentDao.deleteTermsCondition(id);
};

const getTermsConditionById = async (id) => {
  try {
    return await termsConditionComponentDao.getTermsConditionById(id);
  } catch (error) {
    console.error("Service Error:", error);
    throw new Error("Failed to retrieve Terms Condition by id");
  }
};

module.exports = {
  createTermsConditions,
  getTermsCondition,
  updateTermsCondition,
  deleteTermsCondition,
  getTermsConditionById,
};
