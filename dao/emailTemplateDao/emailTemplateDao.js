const EmailTemplate = require('../../models/emailTemplateModel/emailTemplate');

const createEmailTemplate = async (emailTemplateData) => {
  return await EmailTemplate.create(emailTemplateData);
};

const getEmailTemplates = async () => {
  return await EmailTemplate.find();
};

const getEmailTemplateById = async (id) => {
  return await EmailTemplate.findById(id);
}

const getEmailTemplateByName = async (name) => {
  return await EmailTemplate.findOne({ name });
}

const updateEmailTemplate = async (id, updateData) => {
  return await EmailTemplate.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteEmailTemplate = async (id) => {
  return await EmailTemplate.findByIdAndDelete(id);
};

module.exports = {
  createEmailTemplate,
  getEmailTemplates,
  getEmailTemplateById,
  updateEmailTemplate,
  deleteEmailTemplate,
  getEmailTemplateByName
};
