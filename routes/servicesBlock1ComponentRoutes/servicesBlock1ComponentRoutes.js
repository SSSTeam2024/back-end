const express = require("express");
const servicesBlock1ComponentControllers = require("../../controllers/servicesBlock1ComponentControllers/servicesBlock1ComponentControllers");

const router = express.Router();

router.post("/createBlock1", servicesBlock1ComponentControllers.createBlock1);
router.get("/getBlock1", servicesBlock1ComponentControllers.getBlock1);
router.patch(
  "/updateBlock1/:id",
  servicesBlock1ComponentControllers.updateBlock1
);
router.delete(
  "/deleteBestOffer/:id",
  servicesBlock1ComponentControllers.deleteBestOffer
);

module.exports = router;
