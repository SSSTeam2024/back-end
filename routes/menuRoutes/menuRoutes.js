const express = require("express");
const menuControllers = require("../../controllers/menuControllers/menuControllers");

const router = express.Router();

router.post("/createMenu", menuControllers.createMenu);
router.get("/getMenus", menuControllers.getMenus);
router.patch("/updateMenu/:id", menuControllers.updateMenu);
router.delete("/deleteMenu/:id", menuControllers.deleteMenu);
router.post("/addMenuItem", menuControllers.addMenuItem);
router.post(
  "/:menuId/items/:itemId/subitems",
  menuControllers.addSubItemToMenuItem
);

module.exports = router;
