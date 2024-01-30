const Router = require('express');

const authRoutes = require('./authRoutes');
const todoRoutes = require('./todoRoutes');
const affiliateRoutes = require('./affiliateRoutes/affiliateRoutes');
const complainRoutes = require('./complainRoutes/complainRoutes');
const sourceRoutes = require('./sourceRoutes/sourceRoutes');
const feedbackRoutes = require('./feedbackRoutes/feedbackRoutes');
const visitorRoutes = require('./visitorRoutes/visitorRoutes');
const emailTemplateRoutes = require('./emailTemplateRoutes/emailTemplateRoutes');


const router = new Router();

/// FOR TEST ONLY ///
router.use('/auth', authRoutes);
router.use('/todos', todoRoutes);

/// BCT APIS ///
router.use('/affiliate', affiliateRoutes);
router.use('/complain', complainRoutes);
router.use('/source', sourceRoutes);
router.use('/feedback', feedbackRoutes);
router.use('/visitor', visitorRoutes);
router.use('/emailTemplate', emailTemplateRoutes);

module.exports = router;