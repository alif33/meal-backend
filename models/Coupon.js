const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
  { 
    name: {
        type: String,
        required: true,
        trim: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coupon", couponSchema);