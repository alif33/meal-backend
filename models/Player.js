const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  { 
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String
    },
    playerTeam: {
        type: String,
        required: true,
        trim: true
    },
    league: {
        type: String,
        enum : ['NFL', 'NBA', 'MLB']
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    views: {
        type: Number,
        default: 0
    },
    posts: {
        type: Array
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", playerSchema);