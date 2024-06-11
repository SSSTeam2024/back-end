const express = require("express");
const attachmentController = require("../../controllers/attachmentsControllers/attachmentsControllers");

const router = express.Router();

router.post("/new_attachment", attachmentController.createAttachment);
router.get("/all_attachments", attachmentController.getAttachments);
router.delete("/delete_attachment/:id", attachmentController.deleteAttachment);
router.get("/get_attachment/:id", attachmentController.getById);

module.exports = router;
