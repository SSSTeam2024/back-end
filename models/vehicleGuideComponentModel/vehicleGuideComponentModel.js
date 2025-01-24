const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicleGuideSchema = new Schema({
  page: String,
  paragraph: String,
  vehicleType: [
    {
      title: String,
      content: String,
      image: String,
      display: String,
    },
  ],
});

module.exports = mongoose.model("VehicleGuide", vehicleGuideSchema);
