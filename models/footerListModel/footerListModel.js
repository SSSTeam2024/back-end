const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footerListSchema = new mongoose.Schema({
  name: String,
  items: [
    {
      name: String,
      display: String,
      order: String,
      link: String,
    },
  ],
  order: String,
  display: String,
});

module.exports = mongoose.model("FooterList", footerListSchema);
