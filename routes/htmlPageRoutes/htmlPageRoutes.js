const express = require("express");
const htmlPageController = require("../../controllers/htmlPageControllers/htmlPageControllers");
const router = express.Router();

router.post("/create", htmlPageController.createHTMLPage);
router.get("/generate/:id", htmlPageController.generateHTMLFile);

module.exports = router;
