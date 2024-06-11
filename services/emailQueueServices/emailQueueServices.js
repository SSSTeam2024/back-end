const emailQueueDao = require("../../dao/emailQueueDao/emailQueueDao");

const createEmailQueue = async (emailQueueData) => {
  return await emailQueueDao.createEmailQueue(emailQueueData);
};

const getEmailQueues = async () => {
  return await emailQueueDao.getEmailQueues();
};

const getTheOldestEmailInQueue = async () => {
  return await emailQueueDao.getTheOldestEmailInQueue();
};

const deleteEmailQueue = async (id) => {
  return await emailQueueDao.deletedEmailQueue(id);
};

const deleteEmailQueues = async (ids) => {
  return await emailQueueDao.deletedEmailQueues(ids);
};

module.exports = {
  createEmailQueue,
  getEmailQueues,
  deleteEmailQueue,
  deleteEmailQueues,
  getTheOldestEmailInQueue,
};
