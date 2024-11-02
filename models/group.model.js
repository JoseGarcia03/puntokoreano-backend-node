const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: "" },
  image: { type: String, default: "" },
  subgroups: {
    type: [new mongoose.Schema({ name: { type: String, required: true } })],
  },
});

module.exports = mongoose.model(
  "groups_collection",
  groupSchema,
  "groups_collection"
);
