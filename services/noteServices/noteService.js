const noteDao = require("../../dao/notesDao/notesDao");
const fs = require('fs');

async function saveMediaToServer(documents){
  let counter = 0;
  for (const file of documents){
    console.log(file);
      await saveFile(file.base64String, file.name, file.path);
      counter++;
      console.log('File number '+counter+' saved');
  }
  if(counter == documents.length) return true;
}

async function saveFile(base64String, fileName, file_path){
  // const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, '');
  const binaryData = Buffer.from(base64String, 'base64');
  const filePath = file_path +fileName;
  fs.writeFile(filePath, binaryData, 'binary', (err) => {
    if (err) {
      console.error('Error saving the file:', err);
    } else {
      console.log('File saved successfully!');
    }
  });
}

const createNote = async (noteData, documents) => {
    console.log(noteData);
    let saveResult = await saveMediaToServer(documents);
    console.log(saveResult);
    
  return await noteDao.createNote(noteData);
};

const getNoteById = async (id) => {
  return await noteDao.getNoteById(id);
}

const getNotes = async () => {
  return await noteDao.getNotes();
};

const updateNote = async (id, updateData) => {
  return await noteDao.updateNote(id, updateData);
};

const deleteNote = async (id) => {
  return await noteDao.deleteNote(id);
};
const getNotesByIdCompany = async (id_corporate) => {
  return await noteDao.getNotesByIdCompany(id_corporate);
};
module.exports = {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
  getNotesByIdCompany
};