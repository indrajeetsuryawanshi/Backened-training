const jwt = require("jsonwebtoken");

const validateToken = function(req, res, next) {
  try{
    let token = req.headers["x-auth-token"];
    
  
 if (!token) return res.status(404).send({ status: false, msg: "token must be present" });
  }
catch (err){
  res.status(500).send({msg:"error",error:err.message})
}
try{
  let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken) {
      return res.status(500).send({ status: false, msg: "token is invalid" });
    }
    req.loggedInUser=decodedToken.userId
    next()
} 
catch (err){
  res.status(500).send({msg:"error",error:err.message})
}
}
       const checkIfAuthorized=function(req, res, next) {
try {
  let requesteduserId=req.params.userId
  if(requesteduserId!==req.loggedInUser){
    return res.status(403).send({status:false, msg:"permission denied"})
  }
next()
}
   catch (err){
    res.status(500).send({msg:"error",error:err.message})
   }    
  
}


module.exports.validateToken = validateToken
module.exports.checkIfAuthorized=checkIfAuthorized