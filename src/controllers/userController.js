const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
  let data = req.body;
  let savedData = await userModel.create(data);

  res.status(201).send({ msg: savedData });
  }
  catch (err){  
    res.status (500).send ({msag:"error", error: err.message})
  }
};

const loginUser = async function (req, res) {
try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(404).send({
      status: false,
      msg: "username or the password is not correct",
    });
  }
    catch (err){
      res.status(500).send({msg:"error", error:err.message})
    }

  try {
let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "plutonium",
      organisation: "FUnctionUp",
    },
    "functionup-plutonium-very-very-secret-key"
  );
  
  res.status(200).send({ status: true, data: token });
  }
catch (err){
  res.status(500).send({msg:"error",error: err.message})
}
};


const getUserData = async function (req, res) {
try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
}
catch (err){
  res.status(500).send({msg:"error", error: err.message})
}
};

const updateUser = async function (req, res) {
  try{
 let userId = req.params.userId;
  let user = await userModel.findById(userId);
  
  if (!user) {
    return res.status(404).send("No such user exists");
  }
  }
  catch (err){
    res.status(500).send({msg:"error",error:err.message})
  }
  try{
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new: true});
  res.status(201).send({ status: updatedUser, data: updatedUser });
  }
  catch (err){
    res.status(500).send({msg:"error",error: err.message})
  }
};

const deleteUser = async function(req, res) {    
  try{
  let userId = req.params.userId
  let user = await userModel.findById(userId)
  if(!user) {
      return res.status(404).send({status: false, message: "no such user exists"})
  }
  let updatedUser = await userModel.findOneAndUpdate({_id: userId}, {isDeleted: true}, {new: true})
  res.status(201).send({status: true, data: updatedUser})
}
catch (err){
  res.status(500).send({msg:"error", error: err.message})
}
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
