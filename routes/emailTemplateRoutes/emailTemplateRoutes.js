const express = require('express');
const emailTemplateController = require('../../controllers/emailTemplateController/emailTemplateController');

const router = express.Router();

router.post('/newEmailTemplate', emailTemplateController.createEmailTemplate);
router.get('/getAllEmailTemplates', emailTemplateController.getEmailTemplates);
router.get('/getEmailTemplate/:id', emailTemplateController.getEmailTemplateById);
router.put('/updateEmailTemplate/:id', emailTemplateController.updateEmailTemplate);
router.delete('/deleteEmailTemplate/:id', emailTemplateController.deleteEmailTemplate);

module.exports = router;