
const BookModel= require("../models/bookModel")
const PublisherModel= require("../models/publisherModel")
const AuthorModel= require("../models//authorModel")

const createBook= async function (req, res) {
    let book = req.body
let authorid = await AuthorModel.findById( book.author_id)
let publisherid =await PublisherModel.findById( book. publisher_id)
// console .log (authorid)
if (!book.author_id || !book. publisher_id){
    return res.send({msg: "this detail is required"})
}else 
    if(authorid==null){
        return res.send({msg: "inter valid authorid"})
    }if (publisherid==null){
        return res.send ({msg: "inter valid publisherid"})
    }

let bookcreated = await BookModel.create(book)
    res.send({data: bookcreated})
}
const getbookwithauthorpublisher=async function(req ,res){
    let getbook= await BookModel.find().populate(['author_id', 'publisher_id'])
res.send({data: getbook})
}
const Newupdatebook= async function(req,res){
// let publisher= await PublisherModel.find({$or:[{name:"Penguin"},{name:"harpercollins"}]}).select({_id:1})
// let updatebook = await BookModel.updateMany({publisher_id:publisher},{$set:{ishardcover:true}})
let author= await AuthorModel.find({rating:{$gt:3.5}}).select({_id:1})
let updateprice= await BookModel.updateMany({author_id:author},{$inc:{price:10}})
let updateboo= await BookModel.find().populate(['author_id', 'publisher_id'])

res.send({data:updateboo})
}

// res.send({data: publisher})
// console.log(updatebook)


module.exports.createBook= createBook
module.exports.getbookwithauthorpublisher=getbookwithauthorpublisher
module.exports.Newupdatebook=Newupdatebook



// createBook
// onst deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,

// var id = req.params.id;
//     collection.update(
//     {_id: id}, {
//         $set: item


