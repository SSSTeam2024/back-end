const express = require('express');
const feedbackController = require('../../controllers/feedbackController/feedbackController');

const router = express.Router();

router.post('/newFeedback', feedbackController.createFeedback);
router.get('/getAllFeedbacks', feedbackController.getFeedbacks);
router.get('/getFeedback/:id', feedbackController.getFeedbackById);

module.exports = router;