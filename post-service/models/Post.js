const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    }
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
