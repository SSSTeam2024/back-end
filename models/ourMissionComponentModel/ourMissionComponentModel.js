const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ourMissionSchema = new Schema({
  missions: [
    {
      page: String,
      display: String,
      littleTitle: {
        name: String,
        display: String,
      },
      bigTitle: {
        name: String,
        display: String,
      },
      content: String,
    },
  ],
});

module.exports = mongoose.model("OurMission", ourMissionSchema);
