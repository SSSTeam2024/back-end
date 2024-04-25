const express = require('express');
const affiliateController = require('../../controllers/affiliateControllers/affiliateController');

const router = express.Router();

router.post('/register', affiliateController.register);
router.post('/login', affiliateController.login);
router.post('/logout', affiliateController.logout);
router.put('/updateProfileAffiliate/:id', affiliateController.updateProfile);
router.get('/getAffiliate/:id', affiliateController.getById);
router.get('/getAllAffiliates', affiliateController.getAffiliates);
router.delete('/deleteAffiliate/:id', affiliateController.deleteAffilate);
router.post('/getAffiliateByEmail', affiliateController.getByEmail);
router.put('/updateAffiliatePassword/:id', affiliateController.updatePassword);
router.post("/acceptenceEmail", affiliateController.sendAcceptenceEmail);
module.exports = router;
