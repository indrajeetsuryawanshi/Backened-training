const UserModel= require("../models/userModel")




const basicCode= async function(req, res, next) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    //res.send({ msg: "This is coming from controller (handler)"})
    next()
    }

const createUser= async function (req, res) {
    
    let data= req.body
    let tokenDataInHeaders= req.headers.token
    //Get all headers from request
    console.log("Request headers before modificatiom",req.headers)
    //Get a header from request
    console.log(req.headers.batch)
    console.log(req.headers["content-type"])
    console.log(tokenDataInHeaders)
    //Set a header in request
    req.headers['month']='June' //req.headers.month = "June"

    //Set an attribute in request object
    req.anything = "everything"
    
    
    console.log("Request headers after modificatiom",req.headers)
    
    //Set a header in response
    res.header('year','2022')
    res.send({msg: "Hi"})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
// const creatobject=async function(req,res){

// let 

// let obj={
//     "name":"sabiha",
//     "city":"banglore",
//     "address-pincode":"423201"
// }
// let out = obj.age=12
// console.log (obj.name)
// console.log(obj["city"])
// req.headers["age"]=12
// console.log(obj["address-pincode"])
// // console.log(out)
// // console.log(obj.address-pincode)   give error pincode is not define


// }











module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode