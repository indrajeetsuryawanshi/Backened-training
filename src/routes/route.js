const express = require('express');
const router = express.Router();

// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })

// router.get("/random" , function(req, res) {
//     res.send("hi there")
// })


// router.get("/test-api" , function(req, res) {
//     res.send("hi FunctionUp")
// })


// router.get("/test-api-2" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API")
// })


// router.get("/test-api-3" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
// })


// router.get("/test-api-4" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })



// router.get("/test-api-5" , function(req, res) {
//     res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })

// router.get("/test-api-6" , function(req, res) {
//     res.send({a:56, b: 45})
// })

// router.post("/test-post", function(req, res) {
//     res.send([ 23, 45 , 6])
// })


// router.post("/test-post-2", function(req, res) {
//     res.send(  { msg: "hi" , status: true }  )
// })

// router.post("/test-post-3", function(req, res) {
//     // let id = req.body.user
//     // let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })

// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })
// let players=
// [{ 
//     "name": "indrajeet",
//     "dob" : "13/02/2000",
//      'age': "23",
//      "gender": "male"
// } ,{
//     "name": "sanket",
//     "dob" : "28/07/2000",
//      'age': "22",
//      "gender": "male"
// },{
//      "name": "saurav",
//      "dob" : "28/4/2000",
//       'age': "22",
//       "gender": "male"


// }]
// router.post("/players", function(req, res) {
//     // let players=[]
//     let newplayer=req.body
//     let nameofnewplayer =newplayer.name
//     let isreapeatedname= false
// for (let i=0;i<players.length;i++){
//     if(players[i].name==nameofnewplayer){
//     isreapeatedname = true;
//    break;
// }
// }
//      if (isreapeatedname){
//     res.send("the name is already exist")
// }else{
// players.push(newplayer)
// res.send( {data:players})
// } 
// })


    let person =[{
        name:"pk",
        age:10,
        votingstatus:false},
        {
            name:"rk",
        age:30,
        votingstatus:false
        },
        {
            name:"sk",
        age:8,
        votingstatus:false
        },
        {
            name:"mk",
        age:45,
        votingstatus:false
        }]
        router.post("/votingstatusperson", function(req, res){
let votingage= req.query.age;
let eligibleperson=[]
for (let i=0;i<person.length;i++){
     if(person[i].age> votingage){
      person[i].votingstatus=true;
        eligibleperson.push(person[i])
    }
  res.send({data:eligibleperson, status:true})

}
    
});



// router.post('/voting-post',function(req,res){
//     let querypar=req.query.input;
//     let finalarr=[]
//     for(let i=0;i<peopleList.length;i++){

//         let list=peopleList[i]
//         if (list.age>=querypar){
//            list.votingstatus=true

//            finalarr.push(peopleList[i])
          
//         }
//     }   
//   res.send({data:finalarr,status:true})
// })





// router.post("/players", function(req, res) {
    //     let arr= [ 12, "functionup"]
    //     let ele= req.body.element
    //     arr.push(ele)
    //     res.send(  { msg: arr , status: true }  )


module.exports = router;