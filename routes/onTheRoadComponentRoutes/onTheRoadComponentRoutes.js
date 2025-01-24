const express = require("express");
const onTheRoadComponentControllers = require("../../controllers/onTheRoadComponentControllers/onTheRoadComponentControllers");

const router = express.Router();

router.post("/createOnTheRoad", onTheRoadComponentControllers.createOnTheRoad);
router.get("/getOnTheRoads", onTheRoadComponentControllers.getOnTheRoads);
router.patch(
  "/updateOnTheRoad/:id",
  onTheRoadComponentControllers.updateOnTheRoad
);
router.delete(
  "/deleteOnTheRoad/:id",
  onTheRoadComponentControllers.deleteOnTheRoad
);

module.exports = router;
