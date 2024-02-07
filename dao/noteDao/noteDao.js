const Note = require('../../models/noteModels/note');

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

module.exports = {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
};