const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bestOfferSchema = new Schema({
  page: String,
  display: String,
  order: String,
  typeComponent: String,
  image: {
    path: String,
    display: String,
  },
  littleTitle: {
    name: String,
    display: String,
  },
  bigTitle: {
    name: String,
    display: String,
  },
  subTitle: {
    name: String,
    display: String,
  },
  liltleSubTitle: {
    name: String,
    display: String,
  },
  tabs: [
    {
      title: String,
      display: String,
      content: String,
      buttonLabel: String,
      buttonLink: String,
      buttonDisplay: String,
    },
  ],
});

module.exports = mongoose.model("BestOffer", bestOfferSchema);
