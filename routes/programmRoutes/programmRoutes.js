const express = require("express");
const programmController = require("../../controllers/programmControllers/programmControllers");

const router = express.Router();

router.post("/newProgramm", programmController.createProgramm);
router.get("/getAllProgramms", programmController.getProgramms);
router.get("/getProgrammById/:id", programmController.getProgrammById);
router.put("/updateProgram/:id", programmController.updateProgramm);
router.delete("/deleteProgram/:id", programmController.deleteProgramm);
router.post("/convertToQuote", programmController.convertToQuoteAPI);
router.post("/sendResponse", programmController.sendResponseAPI);
router.post("/toContract", programmController.convertedToContract);
router.post(
  "/statusToConverted",
  programmController.updateStatusToConvertedAPI
);
router.get(
  "/get-program-groups-students/:id",
  programmController.getProgramStudentGroups
);

router.get(
  "/get-program-groups-employees/:id",
  programmController.getProgramEmployeeGroups
);

module.exports = router;
