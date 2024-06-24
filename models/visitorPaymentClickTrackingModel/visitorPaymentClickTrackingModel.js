const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitorPayClickTrackSchema = new mongoose.Schema(
  {
    id_visitor: { type: Schema.Types.ObjectId, ref: "Visitor" },
    id_quote: { type: Schema.Types.ObjectId, ref: "Quote" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "visitorPayClickTrack",
  visitorPayClickTrackSchema
);
