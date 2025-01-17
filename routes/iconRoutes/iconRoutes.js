const express = require("express");
const iconControllers = require("../../controllers/iconControllers/iconControllers");

const router = express.Router();

router.post("/createIcon", iconControllers.createIcon);
router.get("/getIcons", iconControllers.getIcons);
router.patch("/updateIcon/:id", iconControllers.updateIcon);
router.delete("/deleteIcon/:id", iconControllers.deleteIcon);

module.exports = router;
