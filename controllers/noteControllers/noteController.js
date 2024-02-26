const noteService = require("../../services/noteServices/noteService");
const globalFunctions = require("../../utils/globalFunctions");

const addNewNote = async (req, res) => {
  try {
    const { title, message } = req.body;

    const note = await noteService.createNote({
      title,
      message,
    });
    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateNoteById = async (req, res) => {
  try {
    const noteId = req.params.id;
    const { title, message } = req.body;

    const updatedNote = await noteService.updateNote(noteId, {
      title,
      message,
    });

    if (!updatedNote) {
      return res.status(404).send("Note not found!");
    }
    res.json(updatedNote);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getNoteById = async (req, res) => {
  try {
    const noteId = req.params.id;

    const getNote = await noteService.getNoteById(noteId);

    if (!getNote) {
      return res.status(404).send("Note not found");
    }
    res.json(getNote);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAllNotes = async (req, res) => {
  try {
    const notes = await noteService.getNotes();
    res.json( notes );
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteNoteById = async (req, res) => {
  try {
    const noteId = req.params.id;

    const deletedNote = await noteService.deleteNote(noteId);

    if (!deletedNote) {
      return res.status(404).send("Note not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  addNewNote,
  updateNoteById,
  getNoteById,
  getAllNotes,
  deleteNoteById,
};
