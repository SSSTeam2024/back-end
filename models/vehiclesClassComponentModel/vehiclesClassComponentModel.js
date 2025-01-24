const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehiclesClassSchema = new Schema({
  page: String,
  bigTitle: String,
  paragraph: String,
  vehicleTypes: [
    {
      title: String,
      link: String,
      icon: String,
      display: String,
    },
  ],
});

module.exports = mongoose.model("VehiclesClass", vehiclesClassSchema);
