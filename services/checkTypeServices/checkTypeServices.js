const checkTypeDao = require("../../dao/checkTypeDao/checkTypeDao");
const globalFunctions = require("../../utils/globalFunctions");
const fs = require("fs");

const createCheckType = async (checkTypeData) => {
  console.log("Request Data", checkTypeData);

  const chechTypeFilesPath = "files/checkTypeFiles/";

  let typesArray = checkTypeData.type;

  let imagesArray = [];

  let validCheckTypeData = {
    type: [],
    duration: checkTypeData.duration,
  };

  for (let type of typesArray) {
    let imageName = globalFunctions.generateUniqueFilename(
      type.checkType_image_extension,
      type.category + "Image"
    );

    imagesArray.push({
      base64String: type.checkType_image_base64_string,
      name: imageName,
      path: chechTypeFilesPath,
    });

    validCheckTypeData.type.push({
      category: type.category,
      message: type.message,
      title: type.title,
      checkType_image: imageName,
    });
  }

  console.log("Images To Server", imagesArray);

  console.log("Data To DB", validCheckTypeData);

  let saveResult = await saveDocumentsToServer(imagesArray);
  console.log(saveResult);

  return await checkTypeDao.createCheckType(validCheckTypeData);
};

async function saveDocumentsToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    console.log(file);
    await saveFile(file.base64String, file.name, file.path);
    counter++;
    console.log("File number " + counter + " saved");
  }
  if (counter == documents.length) return true;
}

async function saveFile(base64String, fileName, file_path) {
  const binaryData = Buffer.from(base64String, "base64");
  const filePath = file_path + fileName;
  console.log(filePath);
  fs.writeFile(filePath, binaryData, "binary", (err) => {
    if (err) {
      console.error("Error saving the file:", err);
    } else {
      console.log("File saved successfully!");
    }
  });
}

const updateCheckType = async (id, updateData) => {
  return await checkTypeDao.updateCheckTypeById(id, updateData);
};

const deleteCheckType = async (id) => {
  return await checkTypeDao.deletedCheckType(id);
};

const getCheckTypes = async () => {
  return await checkTypeDao.getCheckTypes();
};

module.exports = {
  createCheckType,
  updateCheckType,
  deleteCheckType,
  getCheckTypes,
};