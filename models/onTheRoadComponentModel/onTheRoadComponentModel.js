const mongoose = require("mongoose");

const onTheRoadSchema = new mongoose.Schema({
  page: String,
  bigTitle: String,
  paragraph: String,
  grids: [
    {
      date: String,
      category: String,
      image: String,
      title: String,
      details: String,
    },
  ],
  display: String,
  order: String,
  typeComponent: String,
});

module.exports = mongoose.model("OnTheRoad", onTheRoadSchema);
