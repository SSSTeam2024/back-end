const express = require("express");
const termsConditionComponentControllers = require("../../controllers/termsConditionComponentControllers/termsConditionComponentControllers");

const router = express.Router();

router.post(
  "/createTermsConditions",
  termsConditionComponentControllers.createTermsConditions
);
router.get(
  "/getTermsCondition",
  termsConditionComponentControllers.getAllTermConditions
);
router.patch(
  "/updateTermsCondition/:id",
  termsConditionComponentControllers.updateTermsCondition
);
router.delete(
  "/deleteTermsCondition/:id",
  termsConditionComponentControllers.deleteTermsCondition
);

module.exports = router;
