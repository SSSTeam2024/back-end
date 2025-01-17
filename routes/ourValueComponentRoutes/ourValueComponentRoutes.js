const express = require("express");
const ourValueComponentControllers = require("../../controllers/ourValueComponentControllers/ourValueComponentControllers");

const router = express.Router();

router.post("/createOurValue", ourValueComponentControllers.createOurValue);
router.get("/getOurValue", ourValueComponentControllers.getOurValue);
router.patch(
  "/updateOurValue/:id",
  ourValueComponentControllers.updateOurValue
);
router.delete(
  "/deleteOurValue/:id",
  ourValueComponentControllers.deleteOurValue
);
router.put(
  "/addTabToValue/:valueId",
  ourValueComponentControllers.addTabToOurValue
);

module.exports = router;
