const axios = require("axios");

const ONE_SIGNAL_APP_ID = "b524001b-8cd2-46d5-b0c3-2907680bbc2b";
const ONE_SIGNAL_API_KEY =
  "os_v2_app_wusaag4m2jdnlmgdfedwqc54fog74k3qsruu3ifhkhz5ywqdtqa27scmdaxxjrw6hd3btx4mx7o5omgtxkbfj3lpczzinnvfo73c5ni";

const config = {
  headers: {
    Authorization: `Basic ${ONE_SIGNAL_API_KEY}`,
    "Content-Type": "application/json",
  },
};
const sendNotification = async (notificationData) => {
  try {
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
