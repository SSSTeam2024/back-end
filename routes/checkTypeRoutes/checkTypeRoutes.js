const express = require('express');
const checkTypeController = require('../../controllers/checkTypeControllers/checkTypeControllers');

const router = express.Router();

router.post('/create-duty-checks', checkTypeController.createCheckType);
router.put('/update-duty-checks/:id', checkTypeController.updateCheckType);
router.delete('/delete-duty-check/:id', checkTypeController.deleteCheckType);
router.get('/get-all-duty-checks', checkTypeController.getCheckTypes);
module.exports = router;