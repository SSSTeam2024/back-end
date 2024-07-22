const errorReportDao = require("../../dao/errorAnReportDao/errorAnReportDao");
const globalFunctions = require("../../utils/globalFunctions");
const fs = require("fs");

const createErrorReport = async (ErrorReportData, documents) => {
  let saveResult = await saveDocumentsToServer(documents);

  let latestErrorReport = await errorReportDao.getLatestErrorReport();

  let newErrorReportRef;
  if (!latestErrorReport) {
    newErrorReportRef = "Error-001";
  } else {
    let latestRefNumber = parseInt(latestErrorReport.ref.split("-")[1], 10);
    let newRefNumber = latestRefNumber + 1;
    newErrorReportRef = `Error-${newRefNumber.toString().padStart(3, "0")}`;
  }

  return await errorReportDao.createErrorReport({
    ...ErrorReportData,
    ref: String(newErrorReportRef),
  });
};

async function saveDocumentsToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    await saveFile(file.base64String, file.name, file.path);
    counter++;
  }
  if (counter == documents.length) return true;
}

async function saveFile(base64String, fileName, file_path) {
  const binaryData = Buffer.from(base64String, "base64");
  const filePath = file_path + fileName;
  await globalFunctions.ensureDirectoryExistence(file_path);
  fs.writeFile(filePath, binaryData, "binary", (err) => {
    if (err) {
      console.error("Error saving the file:", err);
    } else {
      console.log("File saved successfully!");
    }
  });
}

const getErrorReports = async () => {
  return await errorReportDao.getErrorReports();
};

const getErrorReportById = async (id) => {
  return await errorReportDao.getErrorReportById(id);
};

const deleteErrorReport = async (id) => {
  return await errorReportDao.deleteErrorReport(id);
};

// const updateDefect = async (id, updateData) => {
//     return await defectDao.updateDefect(id, updateData);
//   };

const getAllErrorReportsByCompanyID = async (id) => {
  return await errorReportDao.getAllErrorReportsByCompanyID(id);
};

const getAllErrorReportsBySchoolID = async (id) => {
  return await errorReportDao.getAllErrorReportsBySchoolID(id);
};

module.exports = {
  createErrorReport,
  getErrorReportById,
  getErrorReports,
  deleteErrorReport,
  getAllErrorReportsByCompanyID,
  getAllErrorReportsBySchoolID,
};
