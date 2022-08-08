const express = require('express');
const lodashh= require('lodash')
const abc = require('../introduction/intro')
const pqr = require('../logger/logger.js')
const route=require('../util/helper.js')
const skill=require('../validator/formatter.js')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    const month=['jan','feb','mar','april','may','jun','july','aug','sep','octo','nov','dec']
    const months= lodashh.chunk(month,3)
    console.log(months)
    const num=[1,3,5,7,9,11,13,15,17,19,]
    const renum=lodashh.tail(num)
    console.log(renum)
    const arr=([1,2,3],[2,4,3],[5,2,6],[2,3,7],[3,2,5])
    const newarr=lodashh.union(arr)
    console.log(newarr)
    const infor=[["name","indrajeet"],["age","23"],["village","malegaon"],["habbit","playing"]]
     const newinfo=lodashh.fromPairs(infor)
     console.log(newinfo)
     pqr.cohort()
     route.date()
     route.month()
     route.info()
     skill.team()
     skill.stop()
     skill.start()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason