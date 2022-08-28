
const mid1= function ( req, res, next) {
   let header=   req.headers["isfreeappuser"] 
 if (!header){
    return res.send({msg:"required header not present" })
}
// req.user=header
next()
}
module.exports.mid1=mid1
