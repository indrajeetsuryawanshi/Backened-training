const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const authorbook =require("../author/bookauthor.js")
const authorcontroller=require("../boocontroller/bookcontroller.js")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })
    
// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)
router.post("/bookauthor", authorcontroller.bookauthor)
router.get("/getbooklist",  authorcontroller.getbooklist)







module.exports = router;