const jwt = require("jsonwebtoken");

const validateToken = function(req, res, next) {
    let token = req.headers["x-auth-token"];
    
  
 if (!token) return res.send({ status: false, msg: "token must be present" });
  
  let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken) {
      return res.send({ status: false, msg: "token is invalid" });
    }
    req.loggedInUser=decodedToken.userId
    next()
}
const checkIfAuthorized=function(req, res, next) {
  let requesteduserId=req.params.userId
  if(requesteduserId!==req.loggedInUser){
    return res.send({status:false, msg:"permission denied"})
  }
next()
}
module.exports.validateToken = validateToken
module.exports.checkIfAuthorized=checkIfAuthorized