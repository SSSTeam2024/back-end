const Notification = require("../../models/notificationQuoteModel/notificationQuoteModel");

const createNotification = async (notificationData) => {
  const notification = new Notification(notificationData);
  return await notification.save();
};

const getNotifications = async () => {
  return await Notification.find();
};

const updateNotification = async (id, updateData) => {
  return await Notification.findByIdAndUpdate(id, updateData, { new: true });
};

module.exports = {
  createNotification,
  getNotifications,
  updateNotification,
};
