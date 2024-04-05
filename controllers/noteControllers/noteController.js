const noteService = require("../../services/notesServices/notesServices");
const globalFunctions = require("../../utils/globalFunctions");

const addNewNote = async (req, res) => {
  try {
    const {
      title,
      message,
      id_corporate,
      pdfBase64String,
      pdfExtension,
      photoBase64Strings,
      photoExtension,
    } = req.body;


    const pdfPath = "files/noteFiles/pdf/";
    const photoPath = "files/noteFiles/photo/";

    let pdf = globalFunctions.generateUniqueFilename(pdfExtension, 'notePDF');
    let photo = globalFunctions.generateUniqueFilename( photoExtension, "notePHOTO" );

    let documents = [
      {
        base64String: pdfBase64String,
        extension: pdfExtension,
        name: pdf,
        path: pdfPath
      },
      {
        base64String: photoBase64Strings,
        extension: photoExtension,
        name: photo,
        path: photoPath,
      }
    ];


    const note = await noteService.createNote({
      title,
      message,
      id_corporate,
      pdf,
      photo
    }, documents);
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
    res.json(notes);
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
const getNotesByIdCompany = async (req, res) => {
  try {
    const id_corporate = req.body.id_corporate;
    const getNotesByIdCompany =
      await noteService.getNotesByIdCompany(id_corporate);
    if (!getNotesByIdCompany) {
      res.status(404).send("employee not found");
    }
    res.json({ getNotesByIdCompany });
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
  getNotesByIdCompany
};
