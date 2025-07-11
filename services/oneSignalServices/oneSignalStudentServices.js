const axios = require("axios");

const ONE_SIGNAL_APP_ID = "cd761c99-6b5a-459c-9025-bfcddb3d1941";
const ONE_SIGNAL_API_KEY =
  "os_v2_app_zv3bzgllljczzebfx7g5wpizie452eskr6ue7p46kdzoifkalpmbzcs3bv6b6qqluhtt2ksabkdle6tlsj3cdlf46xq73lyw24evdrq";

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
