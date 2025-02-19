const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerServicesSchema = new Schema({
  littleTitle: {
    name: String,
    display: String,
  },
  bigTitle: {
    name: String,
    display: String,
  },
  cards: [
    {
      title: String,
      display: String,
      content: String,
      image: String,
      icon: String,
    },
  ],
  associatedPage: String,
  display: String,
  typeComponent: String,
  order: String,
});

module.exports = mongoose.model("OfferService", offerServicesSchema);
