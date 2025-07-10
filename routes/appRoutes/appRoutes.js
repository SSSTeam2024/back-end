const express = require("express");
const appControllers = require("../../controllers/appControllers/appControllers");

const router = express.Router();

router.post("/create-new", appControllers.createApp);
router.put("/update/:id", appControllers.updateApp);
router.get("/getAll", appControllers.getApps);
router.delete("/delete/:id", appControllers.deleteApp);
module.exports = router;
