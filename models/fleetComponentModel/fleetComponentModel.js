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
  display: String,
  order: String,
  typeComponent: String,
});

module.exports = mongoose.model("Fleet", fleetSchema);
