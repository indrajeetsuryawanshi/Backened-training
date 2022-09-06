const BlogModel = require('../models/blogsModel')
const AuthorModel = require('../models/authorModel')


const createBlog = async function (req, res) {
    try {
        let  data= req.body
         let authorid=await AuthorModel.findById(data.authorId)
        if (!authorid)
            return res.status(404).send({ msg: "author_id is not valid" })
        let createBlogs = await BlogModel.create(data)
        res.status(201).send({ msg: createBlogs })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

module.exports.createBlog = createBlog