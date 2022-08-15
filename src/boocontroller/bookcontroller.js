const authorbook=require("../author/bookauthor.js")



const bookauthor= async  function(req,res){
    let data= req.body
    let saveData=await authorbook.create(data)
    res.send({msg:saveData})
}
 const getbooklist= async  function(req , res){
    let booklist = await authorbook.find()
    res.send({msg:booklist})
}


module.exports.bookauthor=bookauthor
module.exports.getbooklist=getbooklist