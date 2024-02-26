const express = require('express');
const authCentralApp = require('../../controllers/authCentralAppControllers/authCentralAppControllers');

const router = express.Router();

router.post('/registerCentralApp', authCentralApp.registerCentralApp);
router.post('/loginCentralApp', authCentralApp.loginCentralApp);
router.post('/logoutCentralApp', authCentralApp.logout);
router.put('/updateCentralApp/:id', authCentralApp.updateCentralApp);
router.put('/updatePassword/:id', authCentralApp.updatePassword);

module.exports = router;