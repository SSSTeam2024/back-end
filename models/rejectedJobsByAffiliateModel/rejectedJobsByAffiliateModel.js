const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rejectedJobsSchema = new mongoose.Schema({
  affiliate: String,
  job_id: { type: Schema.Types.ObjectId, ref: "Quote" },
});

module.exports = mongoose.model("RejectedJobs", rejectedJobsSchema);
