const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get("/sol1",  function (req, res) {
    let arr=[1,2,3,5,6,7]
    let total=0
    for (var i in arr) {
        total=total +arr[i]
     }
        let lastdigit= arr.pop()

        let totalsum= lastdigit* (lastdigit+1)/2
        let missingnumber=totalsum-total
    
    res.send( {data: missingnumber} );
    })

    
    // 
        router.get("/sol2", function (req, res) {
        let arr= [33, 34, 35, 37, 38]
   let len= arr.length
 
   let total = 0;
   for (var i in arr) {
       total += arr[i];
   }
 
   let firstDigit= arr[0]
   let lastDigit= arr.pop()
   let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
   let missingNumber= consecutiveSum - total
  
   res.send(  { data: missingNumber  }  );
 });



module.exports = router;
// adding this comment for no reason