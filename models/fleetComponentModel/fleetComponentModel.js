const mongoose = require("mongoose");

const fleetSchema = new mongoose.Schema({
  page: String,
  grids: [
    {
      image: String,
      title: String,
      details: String,
    },
  ],
});

module.exports = mongoose.model("Fleet", fleetSchema);
