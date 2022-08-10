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
        console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    //check index value. less than 0 or greater than array (length - 1) are not valid
    if(movieIndex<0 || movieIndex>=movies.length) {
        //if the index is invalid send an error message
        return res.send('The index value is not correct, Please check the it')
    }

    //if the index was valid send the movie at that index in response
    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)
})

router.get("/films", function(req, res){
    const films = [ {
        "id": 1,
        "name": "pushpa"
       }, {
        "id": 2,
        "name": "dhoom"
       }, {
        "id": 3,
        "name": "wanted "
       }]
       //send all the films
      res.send(films)
    })
    router.get("/films/:filmId", function(req, res){
        const films = [ {
            "id": 1,
            "name": "pushpa"
           }, {
            "id": 2,
            "name": "dhoom"
           }, {
            "id": 3,
            "name": "wanted"
           }]
    
           let filmId = req.params.filmId
    
           //iterate all the films
           //search for a film whose id matches with the id recevied in request
           for(let i = 0; i < films.length; i++){
               let film = films[i]
               if(film.id == filmId) {
                   //if there is a match return the response from here
                   return res.send(film)
               }
           }
    
           //if there is no match give an error response
           res.send("The film id doesn't match any movie")
    })

        // const inmovie =[]
        // const mm= inmovie+1

        // let requestParams = req.params
        // console.log("This is the movies "+ JSON.stringify(requestParams))
        // let moviesName = requestParams.name
        // console.log('Name of the movies is ', moviesName)
        
        // res.send('Dummy response')

// })

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