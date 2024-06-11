const Attachment = require("../../models/attachmentModel/attachmentModel");

const createAttachment = async (attachment) => {
  return await Attachment.create(attachment);
};

const getAttachments = async () => {
  return await Attachment.find();
};

const deleteAttachment = async (id) => {
  return await Attachment.findByIdAndDelete(id);
};

const getAttachmentById = async (id) => {
  return await Attachment.findById(id);
};

module.exports = {
  createAttachment,
  getAttachments,
  deleteAttachment,
  getAttachmentById,
};
