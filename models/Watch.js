const mongoose = require("mongoose");

const watchSchema = new mongoose.Schema(
  { 
    title: {
        type: String,
        required: true,
        trim: true
    },
    videoId: {
        type: String,
        required: true,
        trim: true
    },

    slug: {
        type: String
    },
    league: {
        type: String,
        enum : ['NFL', 'NBA', 'MLB'],
        require: true
    },
    playersName: {
        type: Array
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    views: {
        type: Number,
        default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Watch", watchSchema);