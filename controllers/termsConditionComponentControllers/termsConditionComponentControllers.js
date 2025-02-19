const termsConditionComponentServices = require("../../services/termsConditionComponentServices/termsConditionComponentServices");

const createTermsConditions = async (req, res) => {
  try {
    const { page, bigTitle, paragraph, display, typeComponent, order } =
      req.body;

    const newTermsCondtion =
      await termsConditionComponentServices.createTermsConditions({
        page,
        bigTitle,
        paragraph,
        display,
        typeComponent,
        order,
      });

    res.status(201).json(newTermsCondtion);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateTermsCondition = async (req, res) => {
  try {
    const termsConditionId = req.params.id;
    const { page, bigTitle, paragraph, display, typeComponent, order } =
      req.body;

    let termsConditionBody = {
      page,
      bigTitle,
      paragraph,
      display,
      typeComponent,
      order,
    };

    const updatedTermsCondition =
      await termsConditionComponentServices.updateTermsCondition(
        termsConditionId,
        termsConditionBody
      );

    if (!updatedTermsCondition) {
      return res.status(404).send("Terms Condition not found");
    }
    res.json(updatedTermsCondition);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteTermsCondition = async (req, res) => {
  try {
    const termsConditionId = req.params.id;

    const deletedTermsCondition =
      await termsConditionComponentServices.deleteTermsCondition(
        termsConditionId
      );

    if (!deletedTermsCondition) {
      return res.status(404).send("Terms Condition not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getAllTermConditions = async (req, res) => {
  try {
    const terms = await termsConditionComponentServices.getTermsCondition();
    res.json(terms);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createTermsConditions,
  updateTermsCondition,
  deleteTermsCondition,
  getAllTermConditions,
};
