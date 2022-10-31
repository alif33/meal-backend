const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  { 
    name: {
        type: String,
        require: true
    },
    slug: {
        type: String
    },
    league: {
        type: String,
        enum : ['NFL', 'NBA', 'MLB']
    },
    image: {
        type: String,
    },
    players: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Player'
    }],
    description: {
        type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", teamSchema);