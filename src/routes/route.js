const express = require('express');
const router = express.Router();

const Middleware= require("../middlewares/commonMiddlewares")

const Controller= require("../controllers/userController")
const ProductController= require("../controllers/productcontroller")





router.post('/createProduct',  ProductController.createProduct)
router.post('/createUser', Middleware.mid1, Controller.createUser)











module.exports = router;