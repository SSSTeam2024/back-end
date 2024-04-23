const express = require('express');
const authAffiliate = require('../../controllers/affiliateControllers/affiliateAuthController');

const router = express.Router();

router.post('/registerAffiliate', authAffiliate.registerAffiliate);
router.post('/loginAffiliate', authAffiliate.loginAffiliate);
router.post('/logoutAffiliate', authAffiliate.logout);
router.delete('/deleteAffiliate/:id', authAffiliate.deleteAffiliate);
router.put('/updateAffiliate/:id', authAffiliate.updateAffiliate);
router.get('/getAffiliate/:id', authAffiliate.getAffiliateById);
router.get('/getAllAffiliates', authAffiliate.getAffiliates);
router.put('/updatePassword/:id', authAffiliate.updatePassword);
router.post('/logout/:id', authAffiliate.logout);
router.post('/getAffiliateByToken', authAffiliate.getAffiliateByJwtToken);
module.exports = router;