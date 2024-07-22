const express = require("express");
const forceSingleController = require("../../controllers/forceSingleControllers/forceSingleControllers");

const router = express.Router();

router.post("/newForceSingle", forceSingleController.createForceSingle);
router.patch("/updateForceSingle/:id", forceSingleController.updateForceSingle);
router.delete(
  "/deleteForceSingle/:id",
  forceSingleController.deleteForceSingle
);
router.get("/getAllForceSingles", forceSingleController.getForceSingles);
module.exports = router;
