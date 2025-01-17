const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuItemSchema = new mongoose.Schema({
  label: { type: String, required: false },
  link: { type: String, required: false },
  order: { type: Number, default: 0 },
  target: { type: String, default: "_self" },
  display: { type: Boolean, default: true },
  subItems: [
    {
      label: { type: String, required: false },
      link: { type: String, required: false },
      order: { type: Number, default: 0 },
      target: { type: String, default: "_self" },
      display: { type: Boolean, default: true },
    },
  ],
});

const menuSchema = new mongoose.Schema({
  menuName: { type: String, required: false },
  items: [menuItemSchema],
});

module.exports = mongoose.model("Menu", menuSchema);
