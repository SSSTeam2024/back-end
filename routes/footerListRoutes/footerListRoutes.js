const express = require("express");
const footerListControllers = require("../../controllers/footerListControllers/footerListControllers");

const router = express.Router();

router.post("/createFooterList", footerListControllers.createFooterList);
router.get("/getFooterLists", footerListControllers.getFooterLists);
router.patch("/updateFooterList/:id", footerListControllers.updateFooterList);
router.delete("/deleteFooterList/:id", footerListControllers.deleteFooterList);
router.post(
  "/footerList/:footerListId/addItem",
  footerListControllers.addItemToFooterList
);

module.exports = router;
