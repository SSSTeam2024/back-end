const emailQueueService = require("../../services/emailQueueServices/emailQueueServices");

const createEmailQueue = async (req, res) => {
  try {
    const {
      newEmail,
      subject,
      body,
      file,
      sender,
      name,
      quote_Id,
      date_email,
    } = req.body;

    const newEmailQueue = await emailQueueService.createEmailQueue({
      newEmail,
      subject,
      body,
      file,
      sender,
      name,
      quote_Id,
      date_email,
    });
    res.status(201).json(newEmailQueue);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const createMultipleEmailQueue = async (req, res) => {
  try {
    const { emails } = req.body;
    const result = await emailQueueService.createMultipleEmailQueue(emails);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteEmailQueue = async (req, res) => {
  try {
    const emailQueueId = req.params.id;

    const deletedEmailQueue = await emailQueueService.deleteEmailQueue(
      emailQueueId
    );

    if (!deletedEmailQueue) {
      return res.status(404).send("Email Queue not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getEmailQueues = async (req, res) => {
  try {
    const emails = await emailQueueService.getEmailQueues();
    res.json(emails);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteEmailQueues = async (req, res) => {
  try {
    const emailQueueIds = req.body.ids;
    const deletedEmailQueues = await emailQueueService.deleteEmailQueues(
      emailQueueIds
    );

    if (!deletedEmailQueues || deletedEmailQueues.deletedCount === 0) {
      return res.status(404).send("Email Queues not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createEmailQueue,
  getEmailQueues,
  deleteEmailQueue,
  deleteEmailQueues,
  createMultipleEmailQueue,
};
