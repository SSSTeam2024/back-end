const express = require('express');
const checkListController = require('../../controllers/checkListControllers/checkListControllers');

const router = express.Router();

router.post('/create-check-list', checkListController.createCheckList);
router.put('/update-check-list/:id', checkListController.updateCheckList);
router.delete('/delete-check-list/:id', checkListController.deleteCheckList);
router.get('/get-all-check-lists', checkListController.getCheckLists);
module.exports = router;