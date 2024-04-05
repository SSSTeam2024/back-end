const express = require("express");
const programmController = require("../../controllers/programmControllers/programmControllers");

const router = express.Router();

router.post("/newProgramm", programmController.createProgramm);
router.get("/getAllProgramms", programmController.getProgramms);
router.get("/getProgrammById/:id", programmController.getProgrammById);
// router.put('/updateQuote/:id', quoteController.updateQuote);
router.delete('/deleteProgram/:id', programmController.deleteProgramm);
router.post("/convertToQuote", programmController.convertToQuoteAPI);
router.post("/sendResponse", programmController.sendResponseAPI);
router.post("/toContract", programmController.convertedToContract);
router.post("/statusToConverted", programmController.updateStatusToConvertedAPI);

module.exports = router;
