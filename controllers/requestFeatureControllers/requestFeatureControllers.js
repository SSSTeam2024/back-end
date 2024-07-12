const requestFeatureService = require("../../services/requestFeatureServices/requestFeatureServices");
const globalFunctions = require("../../utils/globalFunctions");

const createRequestFeature = async (req, res) => {
  try {
    const {
      company_id,
      school_id,
      subject,
      title,
      details,
      ref,
      date,
      status,
      answer,
      featureImage_base64_string,
      featureImage_extension,
    } = req.body;

    const featureImagesPath = "files/featureImages/";
    let featureImage = globalFunctions.generateUniqueFilename(
      featureImage_extension,
      "featureImage"
    );

    let documents = [
      {
        base64String: featureImage_base64_string,
        extension: featureImage_extension,
        name: featureImage,
        path: featureImagesPath,
      },
    ];

    const newRequestFeature = await requestFeatureService.createRequestFeature(
      {
        company_id,
        school_id,
        subject,
        title,
        details,
        ref,
        date,
        status,
        answer,
        featureImage,
      },
      documents
    );
    res.status(201).json(newRequestFeature);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteRequestFeature = async (req, res) => {
  try {
    const requestFeatureId = req.params.id;

    const deleteRequestFeature =
      await requestFeatureService.deleteRequestFeature(requestFeatureId);

    if (!deleteRequestFeature) {
      return res.status(404).send("Request Feature not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getRequestFeatures = async (req, res) => {
  try {
    const requestFeatures = await requestFeatureService.getRequestFeatures();
    res.json(requestFeatures);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getRequestFeatureById = async (req, res) => {
  try {
    const requestFeatureId = req.params.id;
    const getRequestFeature = await requestFeatureService.getRequestFeatureById(
      requestFeatureId
    );
    if (!getRequestFeature) {
      return res.status(404).send("Request Feature not found");
    }
    res.json(getRequestFeature);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// const updateDefect = async (req, res) => {
//   try {
//     const DefectId = req.params.id;
//     const { type } = req.body;

//     const updatedDefect = await requestFeatureService.updateDefect(DefectId, { type });

//     if (!updatedDefect) {
//       return res.status(404).send("Defect not found");
//     }
//     res.json(updatedDefect);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

// get all requested features by id school
const getAllRequestedFeaturesBySchoolID = async (req, res) => {
  try {
    const school_id = req.params.id;
    const requested_features =
      await requestFeatureService.getAllQuotesBySchoolID(school_id);
    res.json(requested_features);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get all requested features by id company
const getAllRequestedFeaturesByCompanyID = async (req, res) => {
  try {
    const company_id = req.params.id;
    const requested_features =
      await requestFeatureService.getAllRequestedFeaturesByCompanyID(
        company_id
      );
    res.json(requested_features);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  deleteRequestFeature,
  //   updateDefect,
  createRequestFeature,
  getRequestFeatureById,
  getRequestFeatures,
  getAllRequestedFeaturesBySchoolID,
  getAllRequestedFeaturesByCompanyID,
};
