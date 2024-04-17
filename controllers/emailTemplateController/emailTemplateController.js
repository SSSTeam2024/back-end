const emailTemplateService = require('../../services/emailTemplateServices/emailTemplateService');

const createEmailTemplate = async (req, res) => {
  try {
    const { name, body, for_who } = req.body;

    await emailTemplateService.createEmailTemplate({ name, body, for_who });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getEmailTemplates = async (req, res) => {
  try {
    const emailTemplates = await emailTemplateService.getEmailTemplates();
    res.json( emailTemplates );
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getEmailTemplateById = async (req, res) => {
  try {
    const emailTemplateId = req.params.id;

    const getEmailTemplate = await emailTemplateService.getEmailTemplateById(emailTemplateId);

    if (!getEmailTemplate) {
      return res.status(404).send("Email Template not found");
    }
    res.json(getEmailTemplate);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateEmailTemplate = async (req, res) => {
  try {
    const emailTemplateId = req.params.id;
    const { name, body, for_who } = req.body;

    const updatedEmailTemplate = await emailTemplateService.updateEmailTemplate(emailTemplateId, { name, body, for_who });

    if (!updatedEmailTemplate) {
      return res.status(404).send('Email Template not found');
    }
    res.json(updatedEmailTemplate);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteEmailTemplate = async (req, res) => {
  try {
    const emailTemplateId = req.params.id;

    const deletedEmailTemplate = await emailTemplateService.deleteEmailTemplate(emailTemplateId);

    if (!deletedEmailTemplate) {
      return res.status(404).send('Email Template not found');
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createEmailTemplate,
  getEmailTemplates,
  getEmailTemplateById,
  updateEmailTemplate,
  deleteEmailTemplate,
};
