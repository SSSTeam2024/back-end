const mongoose = require("mongoose");

const socialServicesSchema = new mongoose.Schema([
  {
    pageLink: String,
    display: String,
    cards: [
      {
        icon: String,
        subTitle: String,
        content: String,
        to: String,
        display: String,
      },
    ],
    littleTitle: {
      name: String,
      display: String,
    },
    bigTitle: {
      name: String,
      display: String,
    },
  },
]);

module.exports = mongoose.model("SocialServices", socialServicesSchema);
