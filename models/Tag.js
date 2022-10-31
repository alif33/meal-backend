const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
  { 
    tagName: {
        type: String,
        required: true,
        trim: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tag", tagSchema);