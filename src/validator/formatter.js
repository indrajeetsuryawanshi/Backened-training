let text = "       Indrajeet Suryawanshi       ";
let digital = text.trim()
let gettrimmed=function(){
    console.log(digital)
}
let  read= text.toLowerCase()
let getlowercase=function(){
    console.log(read)
}
let push =text.toUpperCase()
let getuppercase=function(){
    console.log (push)
}
    
module.exports.team = gettrimmed
module.exports.stop = getlowercase
module.exports.start = getuppercase


