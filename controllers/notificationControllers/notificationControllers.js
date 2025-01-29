const notificationServices = require("../../services/notificationServices/notificationServices");

const getNotifications = async (req, res) => {
  try {
    const notification = await notificationServices.getNotifications();
    res.json(notification);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateNotification = async (req, res) => {
  try {
    const { _id, lu } = req.body;

    const updatedNotification = await notificationServices.updateNotification(
      _id,
      { lu }
    );

    if (!updatedNotification) {
      return res.status(404).send("Notification not found");
    }
    res.json(updatedNotification);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  getNotifications,
  updateNotification,
};
