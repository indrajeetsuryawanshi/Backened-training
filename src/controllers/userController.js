const UserModel= require("../models/userModel")

const users= async function (req,res,){
    res.send( " hi user welcome to hompage ")
}
// console.log ("user is right ")

const about = async function (req, res){
    res.send ( "hi welcome to about")
}
// const basicCode= async function(req, res) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)

//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     res.send({ msg: "This is coming from controller (handler)"})
//     }



















// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

module.exports.users= users
module.exports.about=about
// module.exports.getUsersData= getUsersData
// module.exports.basicCode= basicCode