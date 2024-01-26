const express = require('express');
const affiliateController = require('../../controllers/affiliateControllers/affiliateAuthController');

const router = express.Router();

router.post('/register', affiliateController.register);
router.get('/login', affiliateController.login);
//router.put('/updateProfileAffiliate/:id', affiliateController.);
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;
