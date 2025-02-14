const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aboutUsSchema = new Schema({
  page: String,
  display: String,
  newImage: String,
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
  paragraph: {
    content: String,
    display: String,
  },
  button: {
    label: String,
    display: String,
    link: String,
  },
  typeComponent: String,
  order: String,
});

module.exports = mongoose.model("AboutUs", aboutUsSchema);
