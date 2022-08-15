const athorbook=require("../author/bookauthor.js")



const bookathor= async  function(req,res){
    let data= req.body
    let saveData=await athorbook.create(data)
    res.send({msg:saveData})
}
 const getbooklist= async  function(req , res){
    let booklist = await athorbook.find()
    res.send({msg:booklist})
}


module.exports.bookathor=bookathor
module.exports.getbooklist=getbooklist