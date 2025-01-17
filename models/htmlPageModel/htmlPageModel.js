const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const htmlPageSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  link: {
    type: String,
    trim: true,
  },
  quoteForm: String,
  header: {
    type: Schema.Types.ObjectId,
    ref: "Header",
  },
  menu: {
    type: Schema.Types.ObjectId,
    ref: "Menu",
  },
  aboutUs: {
    type: Schema.Types.ObjectId,
    ref: "AboutUs",
  },
  ourValues: {
    type: Schema.Types.ObjectId,
    ref: "OurValue",
  },
  offerServices: {
    type: Schema.Types.ObjectId,
    ref: "OfferService",
  },
  footerList: [
    {
      type: Schema.Types.ObjectId,
      ref: "FooterList",
    },
  ],
  socialMedia: {
    type: Schema.Types.ObjectId,
    ref: "FooterSocial",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("HTMLPage", htmlPageSchema);
