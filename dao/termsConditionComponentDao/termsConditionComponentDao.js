const TermsCondition = require("../../models/termsConditionComponentModel/termsConditionComponentModel");

const createTermsCondition = async (termsConditionData) => {
  return await TermsCondition.create(termsConditionData);
};

const getTermsCondition = async () => {
  return await TermsCondition.find();
};

const updateTermsCondition = async (id, updateData) => {
  const { page, bigTitle, paragraph, display } = updateData;

  return await TermsCondition.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set: {
        page: page,
        bigTitle: bigTitle,
        paragraph: paragraph,
        display: display,
      },
    },
    { new: true }
  );
};

const deleteTermsCondition = async (id) => {
  return await TermsCondition.findByIdAndDelete(id);
};

const getTermsConditionById = async (id) => {
  return await TermsCondition.findById(id);
};

module.exports = {
  createTermsCondition,
  getTermsCondition,
  updateTermsCondition,
  deleteTermsCondition,
  getTermsConditionById,
};
