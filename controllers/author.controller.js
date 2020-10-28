const Author = require("../models/author")
const authorController = {};


authorController.createAuthor = async function (req, res, next) {
    try {
        const { name, avatarUrl } = req.body
        const author = await Author.create({
            name,
            avatarUrl
        })
        return res.status(200).json({
            data: author
        })

    }
    catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

module.exports = authorController