const checkListDao = require("../../dao/checkListDao/checkListDao");
const quoteDao = require("../../dao/quoteDao/quoteDao");
const globalFunctions = require("../../utils/globalFunctions");
const fs = require("fs");

const createCheckList = async (quote_id, checkListData) => {
  console.log("Check list data", checkListData);

  const chechListFilesPath = "files/checkListFiles/";

  let checksArray = checkListData.list;

  let imagesArray = [];

  let validCheckListData = {
    list: [],
  };

  for (let check of checksArray) {
    let imageName;

    if (check.base64String === "" && check.extension === "") {
      imageName = "";
    } else {
      imageName = globalFunctions.generateUniqueFilename(
        check.extension,
        check.check_type + "File"
      );

      imagesArray.push({
        base64String: check.base64String,
        name: imageName,
        path: chechListFilesPath,
      });
    }

    validCheckListData.list.push({
      report_media: imageName,
      report_text: check.report_text,
      positive_check: check.positive_check,
      check_type: check.check_type,
    });
  }

  console.log("Images To Server", imagesArray);

  console.log("Data To DB", validCheckListData);

  let saveResult = await saveDocumentsToServer(imagesArray);
  console.log(saveResult);

  let check_list = await checkListDao.createCheckList(validCheckListData);
  await quoteDao.updateCheckList(quote_id, check_list._id);
  return check_list;
};

async function saveDocumentsToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    //console.log(file);
    await saveFile(file.base64String, file.name, file.path);
    counter++;
    console.log("File number " + counter + " saved");
  }
  if (counter == documents.length) return true;
}

async function saveFile(base64String, fileName, file_path) {
  const binaryData = Buffer.from(base64String, "base64");
  const filePath = file_path + fileName;
  //console.log(filePath);
  fs.writeFile(filePath, binaryData, "binary", (err) => {
    if (err) {
      console.error("Error saving the file:", err);
    } else {
      console.log("File saved successfully!");
    }
  });
}

const updateCheckList = async (id, updateData) => {
  return await checkListDao.updateCheckListById(id, updateData);
};

const deleteCheckList = async (id) => {
  return await checkListDao.deletedCheckList(id);
};

const getCheckLists = async () => {
  return await checkListDao.getCheckLists();
};

module.exports = {
  createCheckList,
  updateCheckList,
  deleteCheckList,
  getCheckLists,
};