const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//================================
//
//  Model for a user
//
//
//================================
const authorSchema = Schema(
    {
        // ============================================================
        name: { type: String, required: true },
        avatarUrl: { type: String, require: false, default: "" },
    },
    { timestamps: true }
);

const Author = mongoose.model("User", authorSchema);
module.exports = Author;