const express = require("express");
const ourMissionControllers = require("../../controllers/ourMissionControllers/ourMissionControllers");

const router = express.Router();

router.post("/createOurMission", ourMissionControllers.createOurMission);
router.get("/getOurMissions", ourMissionControllers.getOurMissions);
router.patch("/updateOurMission/:id", ourMissionControllers.updateOurMission);
router.delete("/deleteOurMission/:id", ourMissionControllers.deleteOurMission);

module.exports = router;
