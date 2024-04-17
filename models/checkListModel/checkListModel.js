const mongoose = require("mongoose");

const checkListSchema = new mongoose.Schema({
  list: [
    {
      report_media: String,
      report_text: String,
      positive_check: String,
      check_type: String,
    },
  ],
});

module.exports = mongoose.model("CheckList", checkListSchema);
