const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

    router.get('/movies', function (req, res){
        let movies = ['Dabang', 'krish', 'don']
        res.send( movies)
})
    router.get('/movies/:indexNumber', function (req, res){
        let movies=["pushpa " ,"dhoom", "wanted"]
        console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    
    if(movieIndex<0 || movieIndex>=movies.length) {
       
        return res.send('The index value is not correct, Please check the it')
    }

   
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
    
           
           for(let i = 0; i < films.length; i++){
               let film = films[i]
               if(film.id == filmId) {
                   
                   return res.send(film)
               }
           }
    
         
           res.send("The film id doesn't match any movie")
    })

        
module.exports = router;