const express = require("express");
const defectController = require("../../controllers/defectsControllers/defectControllers");

const router = express.Router();

router.post("/newDefect", defectController.createDefect);
router.get("/getDefects", defectController.getDefects);
router.get("/getDefectById/:id", defectController.getDefectById);
router.delete("/deleteDefect/:id", defectController.deleteDefect);
// router.put("/updateLocation/:id", defectController.updateLocation);
module.exports = router;
