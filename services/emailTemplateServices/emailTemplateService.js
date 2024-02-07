const emailTemplateDao = require('../../dao/emailTemplateDao/emailTemplateDao');

const createEmailTemplate = async (emailTemplateData) => {
  return await emailTemplateDao.createEmailTemplate(emailTemplateData);
};

const getEmailTemplates = async () => {
  return await emailTemplateDao.getEmailTemplates();
};

const getEmailTemplateById = async (id) => {
  return await emailTemplateDao.getEmailTemplateById(id);
}

const updateEmailTemplate = async (id, updateData) => {
  return await emailTemplateDao.updateEmailTemplate(id, updateData);
};

const deleteEmailTemplate = async (id) => {
  return await emailTemplateDao.deleteEmailTemplate(id);
};

module.exports = {
  createEmailTemplate,
  getEmailTemplates,
  getEmailTemplateById,
  updateEmailTemplate,
  deleteEmailTemplate,
};
