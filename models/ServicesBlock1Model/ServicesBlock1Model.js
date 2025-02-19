const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const block1Schema = new Schema({
  page: String,
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
  tabs: [
    {
      title: String,
      icon: String,
      content: String,
    },
  ],
  display: String,
  order: String,
  typeComponent: String,
});

module.exports = mongoose.model("Block1", block1Schema);
