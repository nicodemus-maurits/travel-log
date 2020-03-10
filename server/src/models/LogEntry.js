const mongoose = require("mongoose");

const requiredNumber = {
  type: Number,
  required: true
};

const LogEntrySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: String,
    comments: String,
    rating: {
      type: Number,
      min: 1,
      max: 10,
      default: 1
    },
    image: String,
    latitude: { ...requiredNumber, min: -90, max: 90 },
    longitude: { ...requiredNumber, min: -180, max: 180 },
    visitDate: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("LogEntry", LogEntrySchema);
