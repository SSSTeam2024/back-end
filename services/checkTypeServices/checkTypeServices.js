const checkTypeDao = require("../../dao/checkTypeDao/checkTypeDao");

const createCheckType = async (checkTypeData, documents) => {
  console.log(checkTypeData);
  console.log(documents);
  let saveResult = await saveDocumentsToServer(documents);
  console.log(saveResult);
  return await checkTypeDao.createCheckType(checkTypeData);
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
  //const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, '');
  const binaryData = Buffer.from(base64String, "base64");
  const filePath = file_path + fileName;
  console.log(filePath)
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
