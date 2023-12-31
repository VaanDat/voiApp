const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    header: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isDeleted: {
        type: Boolean,
        defaul: false,
    }
})

const Post = mongoose.model("Post", postSchema);
module.exports = Post;