const express = require("express");
const pageControllers = require("../../controllers/pageControllers/pageControllers");

const router = express.Router();

router.post("/createPage", pageControllers.createPage);
router.get("/getPages", pageControllers.getPages);
router.patch("/updatePage/:id", pageControllers.updatePage);
router.delete("/deletePage/:id", pageControllers.deletePage);

module.exports = router;
