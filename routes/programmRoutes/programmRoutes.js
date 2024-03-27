const express = require("express");
const programmController = require("../../controllers/programmControllers/programmControllers");

const router = express.Router();

router.post("/newProgramm", programmController.createProgramm);
router.get("/getAllProgramms", programmController.getProgramms);
router.get("/getProgrammById/:id", programmController.getProgrammById);
// router.put('/updateQuote/:id', quoteController.updateQuote);
// router.delete('/deleteQuote/:id', quoteController.deleteQuote);
router.post("/sendResponse", programmController.sendResponseAPI);

module.exports = router;
