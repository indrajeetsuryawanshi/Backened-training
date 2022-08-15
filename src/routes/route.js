const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const athorbook =require("../author/bookauthor.js")
const athorcontroller=require("../boocontroller/bookcontroller.js")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })
    
// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)
router.post("/bookathor", athorcontroller.bookathor)
router.get("/getbooklist",  athorcontroller.getbooklist)







module.exports = router;