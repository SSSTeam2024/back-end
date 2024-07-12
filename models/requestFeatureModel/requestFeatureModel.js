const mongoose = require("mongoose");

const requestFeatureSchema = new mongoose.Schema({
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    default: null,
  },
  school_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    default: null,
  },
  subject: String,
  title: String,
  details: String,
  ref: String,
  date: String,
  status: String,
  answer: String,
  featureImage: String,
});

module.exports = mongoose.model("RequestFeature", requestFeatureSchema);
