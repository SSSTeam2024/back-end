const Note = require('../../models/notesSchema/notesSchema');

const createNote = async (noteData) => {
  return await Note.create(noteData);
};

const getNotes = async () => {
  return await Note.find();
};

const getNoteById = async (id) => {
  return await Note.findById(id);
}

const updateNote = async (id, updateData) => {
  return await Note.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteNote = async (id) => {
  return await Note.findByIdAndDelete(id);
};
const getNotesByIdCompany = async (id_corporate) => {
  return await Note.find({id_corporate});
}
module.exports = {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
  getNotesByIdCompany
};