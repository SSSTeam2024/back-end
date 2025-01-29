const express = require("express");
const inThePressComponentControllers = require("../../controllers/inThePressComponentControllers/inThePressComponentControllers");

const router = express.Router();

router.post("/newInThePress", inThePressComponentControllers.createInThePress);
router.patch(
  "/updateInThePress/:id",
  inThePressComponentControllers.updateInThePress
);
router.delete(
  "/deleteInThePress/:id",
  inThePressComponentControllers.deleteInThePress
);
router.get(
  "/getAllInThePresss",
  inThePressComponentControllers.getAllInThePresss
);
router.get(
  "/getInThePressById/:id",
  inThePressComponentControllers.getInThePressById
);
module.exports = router;
