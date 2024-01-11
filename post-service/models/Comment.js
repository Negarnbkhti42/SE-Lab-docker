const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
        required: true
    },
    text: {
        type: String,
        required: true,
    }
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
