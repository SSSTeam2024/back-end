const mongoose = require("mongoose");

const errorReportSchema = new mongoose.Schema({
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
  section: String,
  title: String,
  details: String,
  ref: String,
  date: String,
  status: String,
  answer: String,
  errorImage: String,
});

module.exports = mongoose.model("ErrorReport", errorReportSchema);
