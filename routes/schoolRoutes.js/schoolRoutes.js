const express = require('express');
const authSchool = require('../../controllers/schoolControllers/schoolControllers');

const router = express.Router();

router.post('/register', authSchool.register);
router.post('/login', authSchool.login);
router.post('/logout', authSchool.logout);

module.exports = router;