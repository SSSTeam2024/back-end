const express = require("express");
const socialServicesControllers = require("../../controllers/socialServicesControllers/socialServicesControllers");

const router = express.Router();

router.post(
  "/createSocialServices",
  socialServicesControllers.createSocialServices
);
router.get("/getSocialServices", socialServicesControllers.getSocialServices);
router.patch(
  "/updateSocialServices/:id",
  socialServicesControllers.updateSocialServices
);
router.delete(
  "/deleteSocialServices/:id",
  socialServicesControllers.deleteSocialServices
);

module.exports = router;
