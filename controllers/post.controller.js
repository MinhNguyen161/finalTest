const Post = require("../models/post")
const postController = {};


postController.createPost = async function (req, res, next) {
    try {
        const { location, caption, imageUrl, author } = req.body
        const post = await Post.create({
            location,
            caption,
            imageUrl,
            author
        })
        return res.status(200).json({
            data: post
        })

    }
    catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}


postController.getPost = async function (req, res, next) {
    let { ...filter } = req.query
    try {
        const totalPost = await Post.find(filter).countDocuments()
        const post = await Post.find(filter)
        return res.status(200).json({
            data: { totalPost, post }
        })
    }
    catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

module.exports = postController