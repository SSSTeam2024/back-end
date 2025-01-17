const express = require("express");
const aboutUsComponentControllers = require("../../controllers/aboutUsComponentControllers/aboutUsComponentControllers");

const router = express.Router();

router.post(
  "/createAboutUsComponent",
  aboutUsComponentControllers.createAboutUs
);
router.get("/getAboutUsComponents", aboutUsComponentControllers.getAboutUs);
router.patch(
  "/updateAboutUsComponent/:id",
  aboutUsComponentControllers.updateAboutUs
);
router.delete("/deleteAboutUs/:id", aboutUsComponentControllers.deleteAboutUs);

module.exports = router;
