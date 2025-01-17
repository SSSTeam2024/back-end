const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footerSocialSchema = new Schema({
  termsAndConditions: {
    name: String,
    link: String,
    display: String,
  },
  privacyPolicy: {
    name: String,
    link: String,
    display: String,
  },
  siteName: String,
  socialLinks: {
    x: {
      link: String,
      display: String,
    },
    facebook: {
      link: String,
      display: String,
    },
    googlePlus: {
      link: String,
      display: String,
    },
    tiktok: {
      link: String,
      display: String,
    },
    youtube: {
      link: String,
      display: String,
    },
  },
  footerBackgroundColor: {
    type: String,
    default: "#1e2a47",
    trim: true,
  },
});

module.exports = mongoose.model("FooterSocial", footerSocialSchema);
