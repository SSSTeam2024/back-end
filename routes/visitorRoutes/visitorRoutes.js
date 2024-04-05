const express = require("express");
const visitorController = require("../../controllers/visitorController/visitorController");

const router = express.Router();

router.post("/newVisitor", visitorController.createVisitor);
router.get("/getAllVisitors", visitorController.getVisitors);
router.get("/getVisitor/:id", visitorController.getVisitorById);
router.delete("/deleteVisitor/:id", visitorController.deleteVisitor);
router.post("/updateStatus", visitorController.updateVisitorStatusAPI);
module.exports = router;
