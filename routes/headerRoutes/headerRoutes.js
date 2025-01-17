const express = require("express");
const headerControllers = require("../../controllers/headerControllers/headerControllers");

const router = express.Router();

router.post("/createHeader", headerControllers.createHeader);
router.get("/getHeaders", headerControllers.getHeaders);
router.patch("/updateHeader/:id", headerControllers.updateHeader);
router.delete("/deleteHeader/:id", headerControllers.deleteHeader);

module.exports = router;
