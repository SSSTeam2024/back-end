const errorReportService = require("../../services/errorReportServices/errorReportServices");
const globalFunctions = require("../../utils/globalFunctions");

const createErrorReport = async (req, res) => {
  try {
    const {
      company_id,
      school_id,
      section,
      title,
      details,
      ref,
      date,
      status,
      answer,
      errorImage_base64_string,
      errorImage_extension,
    } = req.body;

    const errorImagesPath = "files/errorImages/";
    let errorImage = globalFunctions.generateUniqueFilename(
      errorImage_extension,
      "errorImage"
    );

    let documents = [
      {
        base64String: errorImage_base64_string,
        extension: errorImage_extension,
        name: errorImage,
        path: errorImagesPath,
      },
    ];

    const newErrorReport = await errorReportService.createErrorReport(
      {
        company_id,
        school_id,
        section,
        title,
        details,
        ref,
        date,
        status,
        answer,
        errorImage,
      },
      documents
    );
    res.status(201).json(newErrorReport);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteErrorReport = async (req, res) => {
  try {
    const ErrorReportId = req.params.id;

    const deleteErrorReport = await errorReportService.deleteErrorReport(
      ErrorReportId
    );

    if (!deleteErrorReport) {
      return res.status(404).send("Error Report not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getErrorReports = async (req, res) => {
  try {
    const ErrorReports = await errorReportService.getErrorReports();
    res.json(ErrorReports);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getErrorReportById = async (req, res) => {
  try {
    const ErrorReportId = req.params.id;
    const getErrorReport = await errorReportService.getErrorReportById(
      ErrorReportId
    );
    if (!getErrorReport) {
      return res.status(404).send("Error Report not found");
    }
    res.json(getErrorReport);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// const updateDefect = async (req, res) => {
//   try {
//     const DefectId = req.params.id;
//     const { type } = req.body;

//     const updatedDefect = await ErrorReportService.updateDefect(DefectId, { type });

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
    const error_reports = await errorReportService.getAllQuotesBySchoolID(
      school_id
    );
    res.json(error_reports);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get all requested features by id company
const getAllRequestedFeaturesByCompanyID = async (req, res) => {
  try {
    const company_id = req.params.id;
    const error_reports =
      await errorReportService.getAllRequestedFeaturesByCompanyID(company_id);
    res.json(error_reports);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  deleteErrorReport,
  //   updateDefect,
  createErrorReport,
  getErrorReportById,
  getErrorReports,
  getAllRequestedFeaturesBySchoolID,
  getAllRequestedFeaturesByCompanyID,
};
