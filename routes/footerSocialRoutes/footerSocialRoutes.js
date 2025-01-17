const express = require("express");
const footerSocialControllers = require("../../controllers/footerSocialControllers/footerSocialControllers");

const router = express.Router();

router.post("/createFooterSocial", footerSocialControllers.createFooterSocial);
router.get("/getFooterSocials", footerSocialControllers.getFooterSocials);
router.patch(
  "/updateFooterSocial/:id",
  footerSocialControllers.updateFooterSocial
);
router.delete(
  "/deleteFooterSocial/:id",
  footerSocialControllers.deleteFooterSocial
);

module.exports = router;
