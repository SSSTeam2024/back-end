const express = require("express");
const defectController = require("../../controllers/defectsControllers/defectControllers");

const router = express.Router();

router.post("/newDefect", defectController.createDefect);
router.get("/getDefects", defectController.getDefects);
router.get("/getDefectById/:id", defectController.getDefectById);
router.delete("/deleteDefect/:id", defectController.deleteDefect);
router.patch("/updateDefect/:id", defectController.updateDefect);
module.exports = router;
