const express = require('express')
const authorController = require('../controllers/authorController')
const blogController = require('../controllers/blogController')

// intializing the router from express
const router = express.Router();


router.post("/authors",authorController.createAuthor)
router.post("/blogs",blogController.createBlog)
router.get("/blogs",blogController.getBlog)
router.put("/blogs/:blogId",blogController.updateBlogs)
router.delete("/blogs",blogController.deleteBlog)

module.exports = router;


