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
    default: null,
  },
  ourValues: {
    type: Schema.Types.ObjectId,
    ref: "OurValue",
    default: null,
  },
  offerServices: {
    type: Schema.Types.ObjectId,
    ref: "OfferService",
    default: null,
  },
  ourMissions: {
    type: Schema.Types.ObjectId,
    ref: "OurMission",
    default: null,
  },
  terms: {
    type: Schema.Types.ObjectId,
    ref: "TermsCondition",
    default: null,
  },
  vehicleGuide: {
    type: Schema.Types.ObjectId,
    ref: "VehicleGuide",
    default: null,
  },
  vehicleClasse: {
    type: Schema.Types.ObjectId,
    ref: "VehiclesClass",
    default: null,
  },
  inThePress: {
    type: Schema.Types.ObjectId,
    ref: "InThePress",
    default: null,
  },
  serviceBlock1: {
    type: Schema.Types.ObjectId,
    ref: "Block1",
    default: null,
  },
  fleet: {
    type: Schema.Types.ObjectId,
    ref: "Fleet",
    default: null,
  },
  onTheRoad: {
    type: Schema.Types.ObjectId,
    ref: "OnTheRoad",
    default: null,
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
