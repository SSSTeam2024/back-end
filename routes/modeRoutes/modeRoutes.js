const express = require("express");
const modeController = require("../../controllers/modeControllers/modeControllers");

const router = express.Router();

router.post("/newMode", modeController.createMode);
router.put("/updateMode/:id", modeController.updateMode);
router.delete("/deleteMode/:id", modeController.deleteMode);
router.get("/getAllModes", modeController.getModes);
module.exports = router;
