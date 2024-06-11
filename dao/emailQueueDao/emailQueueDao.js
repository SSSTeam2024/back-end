const EmailQueue = require("../../models/emailQueueModel/emailQueueModel");

const createEmailQueue = async (emailQueueData) => {
  return await EmailQueue.create(emailQueueData);
};

const getEmailQueues = async () => {
  return await EmailQueue.find();
};

const getTheOldestEmailInQueue = async () => {
  return await EmailQueue.findOne({}, {}, { sort: { created_at: 1 } });
};

const deletedEmailQueue = async (id) => {
  return await EmailQueue.findByIdAndDelete(id);
};

const deletedEmailQueues = async (ids) => {
  return await EmailQueue.deleteMany({ _id: { $in: ids } });
};

module.exports = {
  createEmailQueue,
  getEmailQueues,
  deletedEmailQueue,
  deletedEmailQueues,
  getTheOldestEmailInQueue,
};
