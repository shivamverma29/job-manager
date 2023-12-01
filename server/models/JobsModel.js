const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobsSchema = new Schema(
  {
    company: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    lastDate: {
      type: Date,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    batch: {
      type: Number,
      required: true,
    },
    applied: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("jobs", jobsSchema);
