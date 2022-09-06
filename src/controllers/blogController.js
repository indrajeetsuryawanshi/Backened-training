const BlogModel= require('/..models/blogsModel')

const getBlog = async function (req, res) {

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
