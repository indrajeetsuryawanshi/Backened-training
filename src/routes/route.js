const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

// router.get('/students', function (req, res){
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// }) 
    router.get('/movies', function (req, res){
        let movies = ['Dabang', 'krish', 'don']
        res.send( movies)
})
    router.get('/movies/:indexNumber', function (req, res){
        let movies=["pushpa " ,"dhoom", "wanted"]
        const index=[ " "," "," "]
        
      const moviesin=index()
      const till=moviesin+1
 console.log(till)
        // const inmovie =[]
        // const mm= inmovie+1

        // let requestParams = req.params
        // console.log("This is the movies "+ JSON.stringify(requestParams))
        // let moviesName = requestParams.name
        // console.log('Name of the movies is ', moviesName)
        
        res.send('Dummy response')

})

// router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    // let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
//     console.log("This is the request "+ JSON.stringify(requestParams))
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
    
//     res.send('Dummy response')
// })

module.exports = router;