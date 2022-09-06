const authorSchema = require('../models/authorModel.js');
const validator = require("email-validator");

// router handlers

const createAuthor= async function(req,res){
    try{
    let data= req.body
    let verifyemail= data.email
   let  checkemail=validator.validate(verifyemail); // true
   if (!checkemail)
        return res.status(400).send({status:false, msa: "email id is invalid"})
let authordata= await authorSchema.create(data)
res.status(201).send({status:true, msg:authordata})
}
catch(err){
    res.status(500).send({msg:"error", error:err.message})
}
}

module.exports.createAuthor=createAuthor
validator.validate("test@email.com"); //