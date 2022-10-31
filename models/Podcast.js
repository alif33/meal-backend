const mongoose = require("mongoose");

const podcastSchema = new mongoose.Schema(
  { 
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    audioUri: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    playersName: {
        type: Array,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Podcast", podcastSchema);