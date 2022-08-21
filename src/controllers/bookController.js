const { count } = require("console")
const AuthorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
 let savedData= await BookModel.create(data)
    res.send({msg: savedData})
  
}
const getBook= async function (req, res) {
    // let data= req.body
 let savedData= await AuthorModel.find({author_name:"Chetan Bhagat"})
 let book= await BookModel.find({author_id:{$eq:savedData[0].author_id}})
    res.send({msg: book})
}

 


module.exports.createBook= createBook
module.exports.getBook= getBook