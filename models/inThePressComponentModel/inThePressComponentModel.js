const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inThePressSchema = new Schema({
  page: String,
  paragraph: String,
  title: String,
  news: [
    {
      title: String,
      date: String,
      by: String,
      content: String,
      image: String,
      display: String,
    },
  ],
  display: String,
  order: String,
  typeComponent: String,
});

module.exports = mongoose.model("InThePress", inThePressSchema);
