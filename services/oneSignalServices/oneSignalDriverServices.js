const axios = require("axios");

// Configuration
const ONE_SIGNAL_APP_ID = "4fc3bce8-acbd-4a8d-914e-95f6e4f4f8b7";
const ONE_SIGNAL_API_KEY =
  "os_v2_app_j7b3z2fmxvfi3ekosx3oj5hyw77ohifejdgeo25dvneqpa5hxwh2udyh4tevm2tln5epfkjurjmudz2dsqztvycid6pvluugvaqf3rq";

const config = {
  headers: {
    Authorization: `Basic ${ONE_SIGNAL_API_KEY}`,
    "Content-Type": "application/json",
  },
};
const sendNotification = async (notificationData) => {
  try {
    // for (const notificationData of notifications) {
    const notification = {
      app_id: ONE_SIGNAL_APP_ID,
      contents: { en: notificationData.contents },
      headings: { en: notificationData.title },
      include_player_ids: notificationData.users,
      //   include_player_ids: ["c8fee401-bd8b-425e-bfa1-d354306b310e"], //Subscription id
      //   data: {
      //     key: notificationData.key,
      //     notificationId: notificationData.notificationId,
      //   },
    };

    // Sending the notification
    axios
      .post("https://onesignal.com/api/v1/notifications", notification, config)
      .then((response) => {
        console.log("Notification sent successfully:", response.data);
      })
      .catch((error) => {
        console.error(
          "Error sending notification:",
          error.response ? error.response.data : error.message
        );
      });
    // }
  } catch (e) {
    if (e) {
      console.log(e);
    }
  }
};

module.exports = {
  sendNotification,
};
