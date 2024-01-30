const express = require('express');
const quoteController = require('../../controllers/quoteController/quoteController');

const router = express.Router();

router.post('/newQuote', quoteController.createQuote);
router.get('/getAllQuotes', quoteController.getQuotes);
router.put('/updateQuote/:id', quoteController.updateQuote);
router.delete('/deleteQuote/:id', quoteController.deleteQuote);

module.exports = router;