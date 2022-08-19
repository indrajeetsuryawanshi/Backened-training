const express = require('express');
const router = express.Router();

const AuthorController= require("../controllers/authorController")






router.post("/createAuthor", AuthorController.createAuthor )








module.exports = router;
