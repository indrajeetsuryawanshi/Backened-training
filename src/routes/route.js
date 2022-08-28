const express = require('express');
const router = express.Router();

const Middleware= require("../middlewares/commonMiddlewares")

const Controller= require("../controllers/userController")
const ProductController= require("../controllers/productController")
const OrderController=require("../controllers/orderController")




router.post('/createProduct',  ProductController.createProduct)
router.post('/createUser', Middleware.mid1, Controller.createUser)
router.post('/createOrder', Middleware.mid1, OrderController.createOrder)












module.exports = router;