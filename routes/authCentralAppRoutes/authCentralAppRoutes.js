const express = require("express");
const authCentralApp = require("../../controllers/authCentralAppControllers/authCentralAppControllers");

const router = express.Router();

router.post("/registerCentralApp", authCentralApp.registerCentralApp);
router.post("/loginCentralApp", authCentralApp.loginCentralApp);
router.post("/logoutCentralApp", authCentralApp.logout);
router.put("/updateCentralApp/:id", authCentralApp.updateCentralApp);
router.put("/updatePassword/:id", authCentralApp.updatePassword);
router.get("/getCentralApp/:id", authCentralApp.getAccountById);
router.post("/logout/:id", authCentralApp.logout);
router.post("/getCentralAppByToken", authCentralApp.getCentralAppByJwtToken);
module.exports = router;
