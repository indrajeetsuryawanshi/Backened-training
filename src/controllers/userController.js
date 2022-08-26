const UserModel= require("../models/userModel")
const Middleware= require("../middlewares/commonMiddlewares")


const createUser= async function (req, res) {
let user=req.body
// let newheader= req.headers['isfreeAppUser']
// let newuser= user.push(newheader)
// let newheader= req.headers(isFreeAppUser)
// req.headers["isfreeAppUser"]=true
// if ( req.headers["isfreeappuser"] ){
//     user.isfreeAppUser=true
// }
user.isFreeAppUser=req.user
    let saveduser= await UserModel.create(user)
    res.send({msg: saveduser})
}



module.exports.createUser=createUser