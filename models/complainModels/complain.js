const mongoose = require("mongoose");

const complainSchema = new mongoose.Schema(
  {
    id_school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: false,
      default: null,
    },
    id_company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: false,
      default: null,
    },
    id_student: String,
    id_parent: String,
    id_employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: false,
      default: null,
    },
    subject: String,
    description: String,
    complainDate: String,
    responseMessage: String,
    responseAuthor: String,
    responseDate: String,
    status: String,
    archived: String,
    pdf: String,
    photo: String,
    video: String,
    resVideo: String,
    resPhoto: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Complain", complainSchema);
