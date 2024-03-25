const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  start_point: {
    placeName: String,
    coordinates: {
      lat: Number,
      lon: Number,
    },
    postalCode: String,
  },
});

module.exports = mongoose.model("Location", locationSchema);
