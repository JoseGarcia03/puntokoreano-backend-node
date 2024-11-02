const mongoose = require("mongoose");

const userDashSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "dashboard_users_collection",
  userDashSchema,
  "dashboard_users_collection"
);
