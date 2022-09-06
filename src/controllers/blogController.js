<<<<<<< HEAD
// const BlogModel= require('/..models/blogsModel')
=======
<<<<<<< HEAD
const BlogModel = require('../models/blogsModel')
const AuthorModel = require('../models/authorModel')
=======
const BlogModel= require('/..models/blogsModel')
>>>>>>> 3b2b1426b68870df4e96b075c8b2c8f24c457397
>>>>>>> 3df1280239701270ada4cb50ea8e4a41325bb9b3

const getBlog = async function (req, res) {

<<<<<<< HEAD
// const createBlog=  async function (req, res){
//     let blogdata = req.body 
//     let saveddata= await  
// }
=======
<<<<<<< HEAD
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
=======
    try {
      let authorId = req.query.authorId
      let category = req.query.category
      let tags = req.query.tags
      let subcategory = req.query.subcategory
  
      let blog = {
        isDeleted: false,
        isPublished: true
      }
  
      if (authorId) {
        blog.authorId = authorId
      }
      if (category) {
        blog.category = category
      }
      if (tags) {
        blog.tags = tags
      }
      if (subcategory) {
        blog.subcategory = subcategory
      }
  
      let savedData = await blogsModel.find(blog)
      if (savedData.length == 0) {
        return res.status(404).send({ status: false, msg: "No such Blogs Available" })
      } else {
        return res.status(200).send({ status:true,data: savedData })
      }
    } catch (err) {
      res.status(500).send({ msg: err.message })
    }
  }

module.exports.getBlog = getBlog
>>>>>>> 3b2b1426b68870df4e96b075c8b2c8f24c457397
>>>>>>> 3df1280239701270ada4cb50ea8e4a41325bb9b3
