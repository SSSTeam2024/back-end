const noteDao = require("../../dao/noteDao/noteDao");
const fs = require('fs');

const createNote = async (noteData) => {
    console.log(noteData);
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

module.exports = {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
