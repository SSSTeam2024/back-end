const express = require("express");
const rejectedJobsByAffiliateControllers = require("../../controllers/rejectedJobsByAffiliateControllers/rejectedJobsByAffiliateControllers");

const router = express.Router();

router.post(
  "/newRejectedJob",
  rejectedJobsByAffiliateControllers.createRejectedJobs
);
router.get(
  "/getAllRejectedJobs/:id",
  rejectedJobsByAffiliateControllers.getRejectedJobs
);
// router.put('/updateSource/:id', sourceController.updateSource);
// router.delete('/deleteSource/:id', sourceController.deleteSource);

module.exports = router;
