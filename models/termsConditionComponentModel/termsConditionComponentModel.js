const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TermsConditionSchema = new Schema({
  page: String,
  bigTitle: {
    content: String,
    display: String,
  },
  paragraph: {
    content: String,
    display: String,
  },
  display: String,
  typeComponent: String,
  order: String,
});

module.exports = mongoose.model("TermsCondition", TermsConditionSchema);
