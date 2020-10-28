const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//================================
//
//  Model for a post
//
//
//================================
const schema = Schema(
    {
        location: { type: String },
        caption: { type: String },
        likeCount: { type: Number, default: 0 },
        imageUrl: { type: String }
    },
    { timestamps: true }

);
const Post = mongoose.model("Post", schema);

module.exports = Post;