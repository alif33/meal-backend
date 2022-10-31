const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            required: true,
            trim: true
        }
    },

    { timestamps: true }
);

const postSchema = new mongoose.Schema(
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
    _author: {
        type: String,
        required: true,
        trim: true
    },
    league: {
        type: String,
        enum : ['NFL', 'NBA', 'MLB'],
        required: true,
    },
    playersName: {
        type: Array,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    tags: {
        type: Array,
        required: true
    },
    _comments: [commentSchema],
    comments: {
        type: Number,
        default: 0
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);