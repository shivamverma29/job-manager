const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const savedLinksSchema = new Schema(
  {
    company: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    liked: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SavedLinks", savedLinksSchema);
