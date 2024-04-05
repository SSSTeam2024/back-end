const express = require('express');
const noteController = require('../../controllers/notesControllers/notesControllers');

const router = express.Router();

router.post('/newNote', noteController.addNewNote);
router.put('/updateNote/:id', noteController.updateNoteById);
router.get('/getNote/:id', noteController.getNoteById);
router.get('/getAllNotes', noteController.getAllNotes);
router.delete('/deleteNote/:id', noteController.deleteNoteById);
router.post('/getNotesByIdCompany',noteController.getNotesByIdCompany)
module.exports = router;