const notificationDao = require("../../dao/notificationQuoteDao/notificationDao");

const getNotifications = async () => {
  return await notificationDao.getNotifications();
};

const updateNotification = async (id, updateData) => {
  return await notificationDao.updateNotification(id, updateData);
};

module.exports = {
  getNotifications,
  updateNotification,
};
